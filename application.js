require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).json({
        message: `Welcome!`
    })
})

const problemSchedulerRoute = require('./routes/problemScheduler.route');
// app.use('/api', problemSchedulerRoute)

app.listen(PORT, (req,res)=>{
    const LOG={
        PORT: PORT,
        Status: `Server is Live`,
        BaseURI: `localhost:${PORT}`
    }
    console.table(LOG);
})