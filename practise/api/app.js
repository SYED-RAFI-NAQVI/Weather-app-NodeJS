const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4,5])
})

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params)
})


const port = process.env.PORT || 2000

app.listen(port, () =>{
    console.log(`started at ${port}`)
})