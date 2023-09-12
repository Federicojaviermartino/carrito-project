import express from "express"

const router = express.Router();

router.route("/default").get((req, res) => {
    res.send("prueba")
})

export default router

