import UploadImages from "@/components/admin/UploadImages";
import React from "react";

const UploadImagePage = async ({ params }) => {
  return <UploadImages id={params.id} />;
};

export default UploadImagePage;