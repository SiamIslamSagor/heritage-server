import { TryCatch } from "../middlewares/error.js";
import { Property } from "../models/property.js";
import { ErrorHandler } from "../utils/utility.js";

const uploadProperty = async (req, res, next) => {
  const {
    title,
    priceRange,
    description,
    amenities,
    location,
    propertyType,
    listingType,
    area,
    city,
    country,
    bedrooms,
    bathrooms,
    parkingSpace,
    imageUrls,
  } = req.body;

  console.log(req.body);

  // Validate image URLs count (2 to 4 images required)
  if (!imageUrls || imageUrls.length < 2 || imageUrls.length > 4) {
    return next(new ErrorHandler("Please upload between 2 to 4 images.", 400));
  }

  // Create a new property instance
  await Property.create({
    title,
    priceRange,
    description,
    amenities,
    location,
    propertyType,
    listingType,
    area,
    city,
    country,
    bedrooms,
    bathrooms,
    parkingSpace,
    imageUrls,
  });

  // Send success response
  res.status(201).json({
    success: true,
    message: "Property created successfully.",
  });
};

export { uploadProperty };
