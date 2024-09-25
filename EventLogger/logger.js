const fs = require('fs')
const os = require('os')

const EventEmitter = require('events')

class Logger extends EventEmitter{

    log(message){
        this.emit('message',{message})
    } 
}

const logger = new Logger()

const logFile = './eventLog.txt'

const logToFile = (event) =>{
    const logMessage = `${new Date().toISOString()} -> ${event.message} \n`
    fs.appendFileSync(logFile,logMessage)
}

logger.on('message',logToFile)

setInterval(()=>{
    const memmoryUsage = (os.freemem()/os.totalmem())*100
    logger.log(`Current memory usage : ${memmoryUsage.toFixed(2)}`)
},3000)


logger.log("Application started")
logger.log("Application event occured")