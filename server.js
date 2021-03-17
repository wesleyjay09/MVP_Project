require('dotenv').config()
const express = require('express');
const app = express();
const pool = require('./db_configuration');
const cors = require("cors")
const axios = require('axios')


//middlewares
app.use(express.static('public'))
app.use(cors())
app.use(express.json())

//routes
app.post('/api/task/', async (req, res) => {
    console.log(req.body)
    const input = req.body.task
  
    try {
        const result = await pool.query(`INSERT INTO task (task) VALUES ($1) `[input])
        res.json(result.rows)
        console.log(results.rows)

    } catch (err) {
        console.error(err.message)
        console.log('error')
    }
})


app.get('/api/task', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM task") 
        res.json(result.rows);
    } catch (err) {
        console.error(err.message)
        res.end('error')
    }
});

// app.get('api/task/:id', async (req, res) => {
//         const {id} = req.params
//     try {
//         const selectTask
//     } catch (error) {
        
//     }
// })


app.listen(process.env.PORT, () => {
    console.log(`listening on Port ${process.env.PORT}`);
})



