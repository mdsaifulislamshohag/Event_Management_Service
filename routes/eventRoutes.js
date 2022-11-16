const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const db = require('../config/database.js');
var _ = require('lodash-contrib'); 

// @description  Fetch all events
// @route        GET /api/events
// @access       Public
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const limit = req.query.limit ? parseInt(req.query.limit) : 10;
        const page = req.query.limit ? parseInt(req.query.page) : 1;
        const offset = page ? ((page-1) * limit) : 1;
        db
            .execute(
                `SELECT id,title,start_at,end_at,count(*) OVER() AS total_product FROM events LIMIT ${limit} offset ${offset}`
            )
            .then(([rows, fieldData]) => {
                if(rows.length==0){
                    res.status(404).json({code:404,msg:"No events found in this page. Please sesrch in other pages"});
                }else{res.status(200).json({code:404,msg: paginatedResults(rows, page,limit)});}
                 
            })
            .catch(err => {
                res.status(500).json({ msg: 'Server Error' });
            });
    })
);

const paginatedResults = (model, page,limit) => {
    const pagination = {};
    pagination.total = model[0].total_product
    pagination.per_page = limit
    console.log(model[0].total_product/limit)
    if(_.isFloat(model[0].total_product/limit )){
        pagination.total_pages = parseInt((model[0].total_product/limit )+1)
    }else{
        pagination.total_pages = Math.round(model[0].total_product/limit )
    }
    
    pagination.current_page = page
    const events = model
    return{events,pagination}
    
};

module.exports = router;