//////////////////
/////  PATH  /////
//////////////////
const path = require('path')

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

