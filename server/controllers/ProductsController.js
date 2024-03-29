const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const Product = require("./../models/producModel");
const catchAsync = require("../utils/catchAsync");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.addItem = catchAsync(async (req, res) => {
  let images = [];
  for (i = 0; i < req.body.images.length; i++) {
    images.push({ url: req.body.images[i] });
  }
  try {
    const newItem = await Product.create({
      name: req.body.name,
      price: req.body.price,
      Description: req.body.Description,
      ratings: req.body.ratings,
      quantity: req.body.quantity,
      images: images,
      category: req.body.category,
    });
    res.status(200).json({
      data: newItem,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ error: errors });
    } else {
      // Handle other types of errors
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
});

exports.getItems = async function (req, res) {
  const { name, minRating, category, minPrice, maxPrice } = req.body;
  const filter = {};

  if (name) {
    filter.name = { $regex: name, $options: "i" };
  }

  if (minRating) {
    filter.ratings = { $gte: minRating };
  }

  if (category) {
    filter.category = category;
  }

  if (minPrice !== undefined && maxPrice !== undefined) {
    filter.price = { $gte: minPrice, $lte: maxPrice }; // Filter products within the price range
  } else if (minPrice !== undefined) {
    filter.price = { $gte: minPrice };
  } else if (maxPrice !== undefined) {
    filter.price = { $lte: maxPrice };
  }

  try {
    // Query products based on the filter criteria
    const products = await Product.find(filter);
    if (products.length === 0) {
      res
        .status(405)
        .send(
          json({ msg: "No products available with these specifications." })
        );
    }
    res.status(200).send(json({ products: products }));
  } catch (error) {
    console.error("Error filtering products:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

// Example usage:
// filterProducts('name', 4, 'category', 10, 50)

exports.getItem = async function (req, res) {
  try {
    const ID = req.params.id;
    const item = await Product.findById(ID);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json({ item });
  } catch (error) {
    console.error("Error retrieving item:", error);
    res.status(500).json({ error: "Server error" });
  }
};
