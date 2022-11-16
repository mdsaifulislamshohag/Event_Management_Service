var _ = require('lodash-contrib');

//THIS IS FOR PAGINATION 
export function paginatedResults(model, page, limit) {
    const pagination = {};
    pagination.total = model[0].total_product
    pagination.per_page = limit
    if (_.isFloat(model[0].total_product / limit)) {
        pagination.total_pages = parseInt((model[0].total_product / limit) + 1)
    } else {
        pagination.total_pages = Math.round(model[0].total_product / limit)
    }

    pagination.current_page = page
    const events = model.map(({ total_product, ...rest }) => ({ ...rest }));
    return { events, pagination }
};

//To check if an array is empty using javascript
export function arrayIsEmpty(array) {
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

