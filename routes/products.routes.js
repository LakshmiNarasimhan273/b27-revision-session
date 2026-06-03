const express = require("express");
const router = express.Router();

const productController = require("../controllers/products.controller");

const authMiddleware = require("../middleware/auth.middleware");

// http://localhost:8080/products/create
router.post("/create", authMiddleware, productController.createProduct);

router.get("/", authMiddleware, productController.getallProducts);

// http://localhost:8080/products/<id>
router.put("/:id", authMiddleware, productController.updateProduct);

router.delete("/:id", authMiddleware, productController.deleteProduct);

module.exports = router;