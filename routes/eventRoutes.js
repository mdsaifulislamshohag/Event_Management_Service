const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const db = require('../config/database.js');

// @description  Fetch all events
// @route        GET /api/events
// @access       Public
router.get(
    '/',
    asyncHandler(async(req, res) => {
        db
            .execute(
                'SELECT * FROM events'
            )
            .then(([rows, fieldData]) => {
                res.json(rows);
            })
            .catch(err => {
                res.status(500).json({ msg: 'Server Error' });
            });
    })
);



module.exports = router;