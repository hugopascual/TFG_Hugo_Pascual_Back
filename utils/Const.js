const HttpStates = {
    HTTP_OK: 200,
    HTTP_NO_CONTENT: 204,
    HTTP_BAD_REQUEST: 400,
    HTTP_UNAUTHORIZED: 401,
    HTTP_FORBIDDEN: 403,
    HTTP_NOT_FOUND: 404,
    HTTP_CONFLICT: 409,
    HTTP_PRECONDITION_FAILED: 412
}

const Times = {
    WAIT_TIME: 1000
}

module.exports = {
    "HttpStates": HttpStates,
    "Times": Times
}