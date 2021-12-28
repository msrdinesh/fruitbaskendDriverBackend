const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    mrp: {
      type: Number,
      trime: true,
      required: true
    },
    per: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: true,
    },
    icons:{
      type: Array,
    },
    type:{
      type: String,
      required: true
    },
    description: {
      type: Array,
      default:[],
      required: true,
    },
    information: {
      type: Array,
      default:[],
    },
    nutritionalValue: {
      type: Array,
      default:[]
    },
    instructions:{
      type: Array,
      default:[]
    },
    firstName: {
      type: String
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true
    },
    subCategories: {
      type: Array,
      default: []
    },
    stock: {
      type: Number
    },
    sold: {
      type: Number,
      default: 0
    },
    imgUrl: {
      type: String,
      trim: true
    },
    size: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
