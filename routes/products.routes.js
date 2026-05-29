const express = require("express");
const router = express.Router();

const productController = require("../controllers/products.controller");

// http://localhost:8080/products/create
router.post("/create", productController.createProduct);
router.get("/", productController.getallProducts);

// http://localhost:8080/products/<id>
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;