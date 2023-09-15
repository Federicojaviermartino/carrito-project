import express from "express"
import { createProducto, deleteProducto, getProductos, updateProducto } from "../controllers/productos.controller.js";

const router = express.Router();

router.route("/").post(createProducto)
router.route("/").get(getProductos)
router.route("/:id").patch(updateProducto)
router.route("/:id").delete(deleteProducto)

export default router
