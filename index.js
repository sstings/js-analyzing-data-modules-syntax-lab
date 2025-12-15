require('datejs');

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };

    for (let arr of args) {
        combinedObject.users = [...combinedObject.users, ...arr];
    }

    combinedObject.merge_date = new Date().toString("M/d/yyyy");

    return combinedObject;
}

module.exports = { combineUsers };


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};