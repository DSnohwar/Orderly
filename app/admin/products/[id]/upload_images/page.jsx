import UploadImages from "@/components/admin/UploadImages";
import React from "react";
import mongoose from "mongoose";
import { redirect } from "next/navigation";


const UploadImagePage = async ({ params }) => {
  const isValidId = mongoose.isValidObjectId(params?.id);

  if (!isValidId) {
    return redirect("/");
  }
  return <UploadImages id={params.id} />;
};

export default UploadImagePage;