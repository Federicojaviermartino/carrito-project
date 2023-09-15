import express from "express"
import { addToCart, deleteCart, getCarts, removeFromCart } from "../controllers/carts.controller.js";

const router = express.Router();

router.route("/:id").post(addToCart)
router.route("/").get(getCarts)
router.route("/removeFromCart/:id").delete(removeFromCart)
router.route("/deleteCart/:id").delete(deleteCart)

export default router