module.exports = (req, res, next) => {
    return res.sendFile('/static/notFound.html');
}