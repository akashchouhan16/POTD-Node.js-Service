require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const sanitizer = require('mongo-sanitize');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "production" || "development"
const {connectDB, DBConnectionStatus} = require('./config/Database');
connectDB();

app.use(cors());
app.use(express.json())

// Logging:
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('short', (NODE_ENV === 'development')? {stream:  accessLogStream}: null));



app.get('/', (req,res)=>{
    res.status(200).json({
        message: `Welcome!`
    })
})

app.get('/clearlogs', (req,res)=>{
    let accesslogs;
    const token = req.body.token || req.query.token;
    const sanitizedToken = sanitizer(token);
    if(sanitizedToken === process.env.ADMIN_TOKEN){
    let bytes = 0;
    fs.stat(path.join(__dirname, 'access.log'), (err, stats) => {
        if (err)
            return res.status(400).json({
                status: 400,
                message: `File doesn't exist. ${err}`,
                bytes_freed: bytes
            });
        
        bytes = stats.size;
        // delete previous log file contents.
        fs.truncate(path.join(__dirname, 'access.log'), 0, (error, data)=>{
            if(err){
                return res.status(400).json({
                    status: 400,
                    message: error,
                    bytes_freed: bytes
                })
            }
            accesslogs = data;
        })
        // create new log file.
        // accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

        return res.status(200).json({
            status: 200,
            message: `Access Logs are cleared`,
            bytes_freed: bytes,
            logs: accesslogs
        });
    });
    }else{
        return res.status(403).json({
            status:403,
            message: token===undefined?`Admin Access Token Needed`:`Invalid Access Token`
        })
    }
})
const problemSchedulerRoute = require('./routes/problemScheduler.route');
const contestsRoute = require('./routes/contests.route');
app.use('/', contestsRoute);
app.use('/', problemSchedulerRoute);


app.listen(PORT, (req,res)=>{
    const LOG={
        PORT: PORT,
        Status: `Server is Live`,
        BaseURI: `localhost:${PORT}`,
        DB_Status: DBConnectionStatus? "Connected To Remote DB (Atlas)": "DB Not Connected"
    }
    console.table(LOG);
})

//app export for Vercel instance
module.exports = app;
