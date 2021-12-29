require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

const {connectDB, DBConnectionStatus} = require('./config/Database');
connectDB();

app.use(cors());
app.use(express.json())



app.get('/', (req,res)=>{
    res.status(200).json({
        message: `Welcome!`
    })
})

const problemSchedulerRoute = require('./routes/problemScheduler.route');
app.use('/api', problemSchedulerRoute)

app.listen(PORT, (req,res)=>{
    const LOG={
        PORT: PORT,
        Status: `Server is Live`,
        BaseURI: `localhost:${PORT}`,
        DB_Status: DBConnectionStatus? "Remote DB (Atlas)": "Local DB"
    }
    console.table(LOG);
})