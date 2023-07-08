import React from "react";
import axios from "axios";
import mongoose from "mongoose";
import { redirect } from "next/navigation";
import UpdateProduct from "@/components/admin/UpdateProduct";

const getProduct = async (id) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);
  return data;
};

const HomePage = async ({ params }) => {
  const isValidId = mongoose.isValidObjectId(params?.id);

  if (!isValidId) {
    return redirect("/");
  }
  const data = await getProduct(params.id);

  return <UpdateProduct data={data.product} />;
};

export default HomePage;