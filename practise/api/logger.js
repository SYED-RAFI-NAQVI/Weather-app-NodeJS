function log(req, res, next){
    console.log("logging")
    next()
}

function aut(req, res, next){
    console.log("auth")
    next()
}

module.exports = log;
module.exports = aut;