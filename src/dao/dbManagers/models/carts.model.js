import mongoose from "mongoose";

const cartsCollection = 'carts'

// {
//   "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//   "price": 695,
//   "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//   "category": "jewelery",
//   "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//   "stock": 400
//   "id": 1
// },

const cartsSchema = new mongoose.Schema({
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'products'
        }
      }
    ],
    default: []
  }
})

cartsSchema.pre('find', function () {
  this.populate('products.product');
});

const cartsModel = mongoose.model(cartsCollection, cartsSchema)

export default cartsModel