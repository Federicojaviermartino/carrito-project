import { mongoose } from "mongoose"
import 'dotenv/config'
import app from "./app.js";

let server = null;

mongoose.connect(process.env.db_uri).then(() => {
    console.log("db connected")
    server = app.listen(process.env.server_port, () => {
        console.log(`listening on port ${process.env.server_port}`)
    })
})



