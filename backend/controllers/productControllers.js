import Product from "../models/product";
import APIFilters from "../utils/APIFilter";
import { cloudinary, uploads } from "../utils/cloudinary";
import fs from "fs";
import ErrorHandler from "../utils/errorHandler";

export const newProduct = async (req, res, next) => {
  req.body.user = req.user._id;

  const product = await Product.create(req.body);
  res.status(201).json({
    product,
  });
};

export const getProducts = async (req, res, next) => {
  const resPerPage = 2;
  const productsCount = await Product.countDocuments();

  const apiFilters = new APIFilters(Product.find(), req.query)
    .search()
    .filter();

  let products = await apiFilters.query;
  const filteredProductsCount = products.length;

  apiFilters.pagination(resPerPage);

  products = await apiFilters.query.clone();

  res.status(200).json({
    productsCount,
    resPerPage,
    filteredProductsCount,
    products,
  });
};

export const getProduct = async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  res.status(200).json({
    product,
  });
};

export const uploadProductImages = async (req, res, next) => {
  let product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }
  //uploading image on CloudS
  const uploader = async (path) => await uploads(path, "Orderly/products");

  const urls = [];
  const files = req.files;

  for (const file of files) {
    const { path } = file;
    const imgUrl = await uploader(path);
    urls.push(imgUrl);
    fs.unlinkSync(path);
  }
  //adding images to db
  product = await Product.findByIdAndUpdate(req.query.id, {
    images: urls,
  });

  res.status(200).json({
    data: urls,
    product,
  });
};

export const updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }
//updating product details
  product = await Product.findByIdAndUpdate(req.query.id, req.body);

  res.status(200).json({
    product,
  });
};

export const deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }
  //deleteing images on cloud
  for (let i = 0; i < product.images.length; i++) {
    const res = await cloudinary.v2.uploader.destroy(
      product.images[i].public_id
    );
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
  });
};