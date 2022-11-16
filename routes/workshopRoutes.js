const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const db = require('../config/database.js');

// @description  Fetch Workshop List By Event Id
// @route        GET /api/workshops/:id
// @access       Public
router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const event_id = req.params.id;
        var result = {};

        return db.execute(
            `SELECT id,title,start_at,end_at FROM events where id =${event_id}`
        )
            .then((events) => {
                arrayIsEmpty(events[0])?res.status(404).json({ code: 404, msg: "No event found with this Id" }):result = events[0];
                
                return db.execute(`SELECT id,title,description,start_at,end_at FROM workshops where workshops.event_id in (${event_id})`)
            }).then((workshop) => {
                arrayIsEmpty(workshop[0]) ? result[0].workshops = [] : result[0].workshops = workshop[0];

                res.status(200).json({ code: 200, msg: "ok", data: result[0] });

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
        const workshop_id = req.params.id;

        return db.execute(`SELECT id,title,description,start_at,end_at FROM workshops where id = ${workshop_id}`)
            .then(([workshops, fieldData]) => {

                arrayIsEmpty(workshops)?res.status(404).json({ code: 404, msg: "No workshops found with this Id" }) :res.status(200).json({ code: 200, msg: "ok", data: workshops[0] });
                
            })
            .catch(err => {
                res.status(500).json({ msg: 'Server Error' });
            });
    })
);

//To check if an array is empty using javascript
function arrayIsEmpty(array) {
    //If it's not an array, return FALSE.
    if (!Array.isArray(array)) {
        return FALSE;
    }
    //If it is an array, check its length property
    if (array.length == 0) {
        //Return TRUE if the array is empty
        return true;
    }
    //Otherwise, return FALSE.
    return false;
}


module.exports = router;