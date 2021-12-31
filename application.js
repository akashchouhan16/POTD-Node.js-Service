require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;

const {connectDB, DBConnectionStatus} = require('./config/Database');
connectDB();

app.use(cors());
app.use(express.json())

// Logging:
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('short', {stream: accessLogStream}));



app.get('/', (req,res)=>{
    res.status(200).json({
        message: `Welcome!`
    })
})

const problemSchedulerRoute = require('./routes/problemScheduler.route');
app.use('/', problemSchedulerRoute)

app.listen(PORT, (req,res)=>{
    const LOG={
        PORT: PORT,
        Status: `Server is Live`,
        BaseURI: `localhost:${PORT}`,
        DB_Status: DBConnectionStatus? "Connected To Remote DB (Atlas)": "DB Not Connected"
    }
    console.table(LOG);
})