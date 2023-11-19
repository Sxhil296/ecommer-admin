import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import React, { useState } from "react";

const NewProduct = () => {
  return (
    <Layout>
      <h1 className="text-blue-900 mb-2 text-xl">New Product</h1>
      <ProductForm />
    </Layout>
  );
};

export default NewProduct;
