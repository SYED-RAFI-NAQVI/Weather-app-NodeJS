const Event = require('events')

class Logger extends Event{
    log(message){
        console.log(message)
    
    this.emit('logging', {data: 'message'})
    }

}

module.exports = Logger