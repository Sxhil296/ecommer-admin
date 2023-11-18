import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState } from "react";

const newProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function createProduct(e) {
    e.preventDefault()
    const data = { title, description, price };
    await axios.post("/api/products", data);
  }
  return (
    <div>
      <Layout>
        <form onSubmit={createProduct}>
          <h1 className="text-blue-900 mb-2 text-xl">New Product</h1>
          <label htmlFor="">Product name</label>
          <input
            type="text"
            placeholder="product name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="">Price (in USD) </label>
          <input
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button className="btn-primary" type="submit">
            Save
          </button>
        </form>
      </Layout>
    </div>
  );
};

export default newProduct;
