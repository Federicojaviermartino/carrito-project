import express from "express"
import morgan from "morgan"
import defaultRoute from "./routes/default.route.js"

const app = express()
app.use(morgan("dev"))

app.use(defaultRoute)

export default app

