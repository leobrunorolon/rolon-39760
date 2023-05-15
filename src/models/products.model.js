import mongoose from "mongoose";

const productsCollection = 'products'

// {
//   "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//   "price": 695,
//   "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//   "category": "jewelery",
//   "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//   "stock": 400
//   "id": 1
// },

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  stock: {
    type: Number,
    require: true
  },
})

export const productsModel = mongoose.model(productsCollection, productsSchema)