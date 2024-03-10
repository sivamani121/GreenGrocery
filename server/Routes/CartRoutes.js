const express = require("express");
const CartController = require("../controllers/cartController");
const ProductController = require('../controllers/ProductsController');

const router = express.Router();

router.route("/").get(CartController.getItems).patch(CartController.ChangeItem).post(CartController.AddItems);


router.route('/:id').get(ProductController.getProduct);
