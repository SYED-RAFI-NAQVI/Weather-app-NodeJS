//////////////////
/////  PATH  /////
//////////////////
const path = require('path')

console.log('Path Module')

let jn = path.join('rafi','naqvi')
console.log(`joining paths : ${jn}`)

let ab = path.isAbsolute(__filename)
console.log(`absolute path : ${ab}`)

let form = path.format({
    root: '/',
    dir: '/rafi/naqvi',
    base: 'syed.txt'
})
console.log(`format of file : ${form}`)

let extention = path.extname('rafi.txt')
console.log(`extention of file : ${extention}`)

let dir = path.dirname(__filename)
console.log(`directory : ${dir}`)

console.log('parse of filename :')
console.log(path.parse(__filename))


console.log('---------------------------------')
////////////////////
//////// OS ////////
////////////////////

const os = require('os')

console.log('OS Module')

let arch = os.arch()
console.log(`architecture : ${arch}`)

let cpu = os.cpus()
console.log('cpu info :')
console.log(cpu)

let free = os.freemem()
console.log(`Free Space : ${free}`)

let host = os.hostname()
console.log(`Host Name: ${host}`)

let plat = os.platform()
console.log(`platform : ${plat}`)

let total = os.totalmem()
console.log(`total memory : ${total}`)

let upTime = os.uptime()
console.log(`uptime : ${upTime}`)


console.log('----------------------------')


////////////////////////////////
///////// File System //////////
////////////////////////////////
console.log('File System')

const fs = require('fs')

console.log('SYNC ---')
console.log('files : ',fs.readdirSync('./'))

console.log('ASYNC ---')
fs.readdir('./', (error, files) => {
    if (error) console.log('error', error)
    else console.log('files : ' , files)
})


console.log('--------')
///////////////////////////////
/////////// Events ////////////
///////////////////////////////

console.log('Events')

const Event = require('events')
const Logger = require('./practise2')
const Log = new Logger()

// emmiter.on('message', () => {
//     console.log('success')
// })

// emmiter.emit('message')

Log.on('logging', (arg) => {
    console.log(arg.data)
})

Log.log('hey there')