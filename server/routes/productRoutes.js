const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAll);
router.get("/:id",productController.getById);
router.get("/category/:id", productController.getCategoryNameByCategoryId);
router.post("/add",productController.create);
router.delete("/:id",productController.delete);
router.put("/update",productController.update);

module.exports = router;