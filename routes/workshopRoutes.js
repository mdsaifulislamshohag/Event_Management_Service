const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const db = require('../config/database.js');
require = require('esm')(module)
const { arrayIsEmpty } = require('../utils/utility.js')


// @description  Fetch Workshop List By Event Id
// @route        GET /api/workshops/:id
// @access       Public
router.get(
    '/:id',
    asyncHandler(async (req, res) => {

        // DECLARED NECCESSARY VARIABLES
        const event_id = req.params.id;
        var result = {};

        // FETCH EVENTS FROM EVENT COLLECTIONS BY ID
        return db.execute(
            `SELECT id,title,start_at,end_at FROM events where id =${event_id}`
        )
            .then((events) => {

                // CHECK EVENTS FOUND OR NOT 
                arrayIsEmpty(events[0]) ? res.status(404).json({ code: 404, msg: "No event found with this Id" }) : result = events[0];
             
                // CHECK EVENTS EXIST THEN FETCH WORKSHOP DATA 
                // FETCHED ALL ACTIVE WORKSHOPS FROM WORKSHOP COLLECTIONS WHERE CURRENT DATE IS LESS THAN WORKSHOP START DATE ( BECAUSE THESE WORKSHOP HAVE NOT STARTED YET)
                if (arrayIsEmpty(events[0]) === false) {
                    return db.execute(`SELECT id,title,description,start_at,end_at FROM workshops where workshops.event_id in (${event_id}) and start_at > CURRENT_TIMESTAMP()`)
                        .then((workshop) => {
                            
                            // IF FOUND WORKSHOPS THEN SEND RESPONSE 
                            arrayIsEmpty(workshop[0]) ? result[0].workshops = [] : result[0].workshops = workshop[0];

                            res.status(200).json({ code: 200, msg: "ok", data: result[0] });

                        }).catch(err => {
                            res.status(500).json({ msg: 'Server Error' });
                        });
                }
            })
            .catch(err => {
                res.status(500).json({ msg: 'Server Error' });
            });
    })
);

// @description  Fetch Workshop Detail By Id
// @route        GET /api/workshops/detail/:id
// @access       Public
router.get(
    '/detail/:id',
    asyncHandler(async (req, res) => {
      
        // DECLARED NECCESSA VARIABLES
        const workshop_id = req.params.id;
       
        // FETCH RESERVATION DETAIL BY ID
        return db.execute(`SELECT id,title,description,start_at,end_at,(SELECT count(*) FROM reservations where workshop_id = ${workshop_id}) total_reservations FROM workshops where id = ${workshop_id}`)
            .then(([workshops, fieldData]) => {
               // IF FOUND THEN SEND RESPONSE 
                arrayIsEmpty(workshops) ? res.status(404).json({ code: 404, msg: "No workshops found with this Id" }) : res.status(200).json({ code: 200, msg: "ok", data: workshops[0] });

            })
            .catch(err => {
                res.status(500).json({ msg: 'Server Error' });
            });
    })
);


module.exports = router;