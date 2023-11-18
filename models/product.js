const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description:{
        type: String
    },
    price: {
        type: Number,
        required: true
    }
}, {timestamps:true})

export const Product = mongoose.model("Product", productSchema)