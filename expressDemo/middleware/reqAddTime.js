module.exports = function (options) {
    return function (req, res, next) {
        req.requestTime = Date.now()
        next()
    }
}