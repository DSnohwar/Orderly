import ProductDetails from "@/components/products/ProductDetails";
import axios from "axios";
import React from "react";
import mongoose from "mongoose";
import { redirect } from "next/navigation";

const getProductDetails = async (id) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);
  return data?.product;
};

const ProductDetailsPage = async ({ params }) => {
  const isValidId = mongoose.isValidObjectId(params?.id);

  if (!isValidId) {
    return redirect("/");
  }
  const product = await getProductDetails(params.id);
  console.log(product);

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
