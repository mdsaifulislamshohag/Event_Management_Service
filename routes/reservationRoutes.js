const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const db = require('../config/database.js');
const { arrayIsEmpty } = require('../utils/utility.js')
                
const event_model = 'events.id as event_id,events.title as event_title,events.start_at as event_start_at,events.end_at as event_end_at'
const workshop_model = 'workshops.id as workshop_id,workshops.title as workshop_title,workshops.description as workshop_description,workshops.start_at as workshop_start_at,workshops.end_at as workshop_end_at'


// @description  Fetch reservation By User Id
// @route        GET /api/reservation/
// @access       Public
router.get(
    '/',
    asyncHandler(async (req, res) => {
         // TAKEN DATA FROM BODY PARAMETERS
        const name = req.body.name;
        const email = req.body.email;
         // FETCHED RESERVATIONS & WORKSHOPS DATA ASSOCIATED USER EMAIL
         db.execute(`SELECT reservations.*,${workshop_model},${event_model}
     FROM ( SELECT * from reservations WHERE email = ${JSON.stringify(email)} ) reservations INNER JOIN workshops ON reservations.workshop_id = workshops.id INNER JOIN events ON events.id = workshops.event_id;`)
            .then(([result, fieldData]) => {
                // DECLARED NECCESSARY OBJECTS
                let reservationObject ={}
                let workshopObject ={}
                let eventObject ={}
                // REFINE OBJECTS
                result.map((item)=>{
                    reservationObject.id=item.id,
                    reservationObject.name=item.name,
                    reservationObject.email=item.email,
                    eventObject.id =item.event_id,
                    eventObject.title=item.event_title,
                    eventObject.start_at=item.event_start_at,
                    eventObject.end_at=item.event_end_at
                    workshopObject.id=item.workshop_id
                    workshopObject.title=item.workshop_title
                    workshopObject.description=item.workshop_description
                    workshopObject.start_at=item.workshop_start_at
                    workshopObject.end_at=item.workshop_end_at

                })
                // IF FOUND THEN SEND RESPONSE 
                arrayIsEmpty(result)?res.status(404).json({ code: 404, msg: "No reservations found with this email" }) :res.status(200).json({ code: 200, msg: "ok", data:{reservation:reservationObject,event:eventObject,workshop:workshopObject} });

            })
            .catch(err => {
                res.status(500).json({ msg: 'Server Error' });
            });
    })
);


module.exports = router;