import express from "express"
import morgan from "morgan"
import defaultRoute from "./routes/default.route.js"
import productRoute from "./routes/product.routes.js"
import cartRoute from "./routes/cart.route.js"

const app = express()

app.use(express.json())

app.use(morgan("dev"))

app.use(defaultRoute)

app.use("/products", productRoute)

app.use("/cart", cartRoute)


export default app

