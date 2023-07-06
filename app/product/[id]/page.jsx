import ProductDetails from "@/components/products/ProductDetails";
import axios from "axios";
import React from "react";

const getProductDetails = async (id) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);
  return data?.product;
};

const ProductDetailsPage = async ({ params }) => {
  const product = await getProductDetails(params.id);
  console.log(product);

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
