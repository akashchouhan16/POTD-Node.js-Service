const FALL_BACK_GET = {
    status: 403,
    message: `Invalid GET request.`
}

const FALL_BACK_POST = {
    status: 403,
    message: `Invalid POST request`
}

const FALL_BACKS = {FALL_BACK_GET, FALL_BACK_POST}
module.exports = FALL_BACKS;