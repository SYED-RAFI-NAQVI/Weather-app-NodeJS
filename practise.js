/////PATH/////

const path = require('path')

let jn = path.join('rafi','naqvi')
console.log(jn)

let ab = path.isAbsolute(__filename)
console.log(ab)

let form = path.format({
    root: '/',
    dir: '/rafi/naqvi',
    base: 'syed.txt'
})
console.log(form)

let extention = path.extname('rafi.txt')
console.log(extention)

let dir = path.dirname(__filename)
console.log(dir)


console.log(path.parse(__filename))