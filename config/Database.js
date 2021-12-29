const mongoose = require('mongoose');
const DB_CONNECTION_STRING = process.env.DB_ATLAS || process.env.DB_LOCAL;

let DBConnectionStatus = true

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(DB_CONNECTION_STRING)
        console.log(
            `[*] DATABASE Connection Established: ${connect.connection.host}`
        )
    } catch (err) {
        const ERRORLOG = {
            STATUS: `DATABASED ERROR`,
            MSG: `${err.message}`,
        }
        DBConnectionStatus = false
        console.table(ERRORLOG)
    }
}
const connection = { connectDB, DBConnectionStatus }

module.exports = connection