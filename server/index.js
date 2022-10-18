// Server

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// Connects databases
const {getMovies, deleteMovie, createMovie, updateMovie} = require('./controller.js') // Uses destrucuring


// Endpoints
app.get('/api/movies', getMovies)

app.delete('/api/movies/:id', deleteMovie)

app.post('/api/movies', createMovie)

app.put('/api/movies/:id', updateMovie)


// infinity while loop to run server
app.listen(4004, () => {
    console.log('Server running on port 4004')
})