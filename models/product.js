// const { Schema, mongoose, models } = require("mongoose");
import {model, Schema, models} from "mongoose"

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = models.Product || model("Product", productSchema);
