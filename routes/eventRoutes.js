const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const db = require('../config/database.js');
require = require('esm')(module)
const { paginatedResults, arrayIsEmpty } = require('../utils/utility.js')

// @description  Fetch all events
// @route        GET /api/events
// @access       Public
router.get(
    '/',
    asyncHandler(async (req, res) => {
        
        // TAKEN DATA FROM QUERY PARAMS & STORED TO THE DECLARED NECCESSARY VARIABLES 
        const limit = req.query.limit ? parseInt(req.query.limit) : 10;
        const page = req.query.limit ? parseInt(req.query.page) : 1;
        const offset = page ? ((page - 1) * limit) : 1;
      
        // FETCHED ALL ACTIVE EVENTS FROM EVENT COLLECTIONS WHERE CURRENT DATE IS LESS THAN EVENT START DATE ( BECAUSE THESE EVENTS HAVE NOT STARTED YET)
        db.execute(
            `SELECT id,title,start_at,end_at,count(*) OVER() AS total_product FROM events WHERE start_at > CURRENT_TIMESTAMP() LIMIT ${limit} offset ${offset}`
        )
            .then(([rows, fieldData]) => {
              
                // CHECKED EVENTS FOUND OR NOT THEN SENDIND RESPONSE
                arrayIsEmpty(rows) ? res.status(404).json({ code: 404, msg: "No active events found in this page. Please sesrch in other pages" }) : res.status(200).json({ code: 200, msg: "ok", data: paginatedResults(rows, page, limit) });
            })
            .catch(err => {
                res.status(500).json({ msg: 'Server Error' });
            });
    })
);

// @description  Fetch event details
// @route        GET /api/events/:id
// @access       Public
router.get(
    '/:id',
    asyncHandler(async (req, res) => {
       
        // TAKEN EVENT ID FROM REQUEST PARAMS
        const event_id = req.params.id;

        // FETCHED ALL EVENT DETAILS FROM EVENT COLLECTIONS
        db.execute(
            `SELECT id,title,start_at,end_at,(SELECT count(*) FROM workshops where event_id = ${event_id}) total_workshop FROM events where id =${event_id}`
        )
            .then(([rows, fieldData]) => {
               
                // CHECKED EVENTS DATA FOUND OR NOT THEN SENDING RESPONSE
                arrayIsEmpty(rows) ? res.status(404).json({ code: 404, msg: "No events found with this Id" }) : res.status(200).json({ code: 200, msg: "ok", data: rows });

            })
            .catch(err => {
                res.status(500).json({ msg: 'Server Error' });
            });
    })
);


module.exports = router;