require('dotenv').config()
const express = require('express');
const app = express();
const pool = require('./db_configuration');

app.use(express.static('public'))

app.get('/api/task', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM task") 
        res.json(result.rows);
        res.send("working")
    } catch (err) {
        console.error(err.message)
        res.end('error')
    }
});

app.get('api/task/:id', async (req, res) => {
        const {id} = req.params
    try {
        const selectTask
    } catch (error) {
        
    }
})


app.listen(process.env.PORT, () => {
    console.log(`listening on Port ${process.env.PORT}`);
})


