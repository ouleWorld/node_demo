const declareLog = () => {
    if (global) {
        global.log = console.log.bind(console);
    }
}

module.exports = {
    declareLog
}