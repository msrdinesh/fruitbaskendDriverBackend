var mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

var AddressSchema = new mongoose.Schema(
  {
    isPrimary:{
        type:Boolean
    },
    name: {
      type: String,
      trim: true,
      required:true
    },
    houseNumber: {
      type: String,
    },
    street: {
      type: String
    },
    city: {
      type: String,
      required:true
    },
    state: {
      type: String,
      required:true
    },
    pincode: {
      type: String,
      required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);
