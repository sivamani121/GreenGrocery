const express = require("express");
const CartController = require("../controllers/cartController");
const ProductController = require('../controllers/ProductsController');
const {protect}=require('./../controllers/authenticationController');
const router = express.Router();

router.route("/").get(ProductController.getItems);


router.route('/:id').get(ProductController.getItem);

router.route('/add/').post(protect,ProductController.addItem);

