require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

// let persons = [
//   {
//     name: "Arto Hellas",
//     number: "040-123456",
//     id: 1
//   },
//   {
//     name: "Ada Lovelace",
//     number: "39-44-5323523",
//     id: 2
//   },
//   {
//     name: "Dan Abramov",
//     number: "12-43-234345",
//     id: 3
//   },
//   {
//     name: "Mary Poppendieck",
//     number: "39-23-6423122",
//     id: 4
//   }
// ]

app.get('/api/persons', (req,res) => {
  Person.find({}).then(person => {
    res.json(person)
  })
})

app.get('/api/persons/:id', (req,res) => {
  Person.findById(req.params.id).then(person => {
    res.json(person)
  }).catch(error => next(error))
})

app.post('/api/persons', (req,res) => {
  const body = req.body
  console.log(body.name, body.number)
  if(!body.name || !body.number) {
    return res.status(400).json({
      error: "name or number missing"
    })
  }

  const checkPersonName = Person.exists({name: body.name})
  console.log(checkPersonName)

  // if(Person.find(person => person.name === body.name)) {
  //   return res.status(400).json({
  //     error: "name must be unique"
  //   })
  // }

  const person = new Person ({
    name: body.name,
    number: body.number,
    date: new Date()
    //id: Math.random()*10000 not needed for MongoDB
  })

  person.save().then(savedPerson => {
    res.json(savedPerson)
  })
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const person = {
    name: body.name,
    number: body.number,
    date: body.date
  }

  Person.findByIdAndUpdate(req.params.id, person, {new: true})
    .then(updatePerson => {
      res.json(updatePerson)
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req,res) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.get('/info', (req,res) => {
  const requestDate = new Date()
  res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${requestDate}</p>`)
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})