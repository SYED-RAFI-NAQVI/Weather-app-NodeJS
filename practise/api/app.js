const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())


let courses = [
    {id : 1, name : 'course1'},
    {id : 2, name : 'course2'},
    {id : 3, name : 'course3'},
]

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4,5])
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send('404 error')
    res.send(course)
})

app.post('/api/courses', (req, res) => {
    const schema  =  {
        name : Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body, schema)


    if (result.error){
        res.status(400).send(result.error.message)
        return
    }

    const course = {
        id : courses.length + 1,
        name : req.body.name
    }
    courses.push(course)
    res.send(course)
})

const port = process.env.PORT || 2000

app.listen(port, () =>{
    console.log(`started at ${port}`)
})
