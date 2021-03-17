require('dotenv').config()
const express = require('express');
const app = express();
const pool = require('./db_configuration');
const cors = require("cors")



//middlewares
app.use(express.static('public'))
app.use(cors())
app.use(express.json())

//routes

app.get('/api/todo', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM todo") 
        res.json(result.rows);
    } catch (err) {
        console.error(err.message)
        res.end('error')
    }
});

app.post('/api/todo', async (req, res) => {
    try {
        const {task} = req.body;
        const newTask = await pool.query("INSERT INTO todo(task) VALUES($1)",[task])
        res.json(task);
        } catch (err) {
        console.error(err.message)
        
    }
})

app.delete('/api/todo/', async (req, res) => {
    try {
        const deleteTask = await pool.query('DELETE FROM todo WHERE id = $1', [id])
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(process.env.PORT, () => {
    console.log(`listening on Port ${process.env.PORT}`);
})



