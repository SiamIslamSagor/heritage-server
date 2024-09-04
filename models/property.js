import mongoose, { Schema, model } from "mongoose";

const propertySchema = new Schema({
  propertyOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  priceRange: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  amenities: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    enum: ["House", "Apartment", "Commercial"],
    required: true,
  },
  listingType: {
    type: String,
    enum: ["Rent", "Sale", "Commercial"],
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  parkingSpace: {
    type: Number,
    required: true,
  },
  imageUrls: {
    type: [String],
    validate: [arrayLimit, "{PATH} exceeds the limit of 4 images"],
    required: true,
  },
});

function arrayLimit(val) {
  return val.length >= 2 && val.length <= 4;
}

export const Property =
  mongoose.models.Property || model("Property", propertySchema);
