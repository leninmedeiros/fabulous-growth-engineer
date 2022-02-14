const user = require('./user.json')

const buckets = {
    A:'A',
    B: 'B',
    control: 'control'
}

function getBucket() {
    return buckets.A;
}

function getUser() {
    return user
}

module.exports = {
    getBucket: getBucket,
    getUser: getUser,
    buckets: buckets
};
