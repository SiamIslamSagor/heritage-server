import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import { Property } from "../models/property.js";

// Function to generate an array of fake properties
const generateFakeProperties = async numberOfProperties => {
  try {
    const propertiesPromise = [];

    for (let i = 0; i < numberOfProperties; i++) {
      const fakeProperty = Property.create({
        propertyOwner: new mongoose.Types.ObjectId(),
        title: faker.address.streetName(),
        priceRange: {
          min: faker.datatype.number({ min: 100, max: 500 }),
          max: faker.datatype.number({ min: 500, max: 1000 }),
        },
        description: faker.lorem.sentences(2),
        amenities: faker.helpers.arrayElement([
          "Pool, Gym, Wi-Fi",
          "Parking, Elevator",
          "Security, Playground",
        ]),
        location: faker.address.streetAddress(),
        propertyType: faker.helpers.arrayElement([
          "House",
          "Apartment",
          "Commercial",
        ]),
        listingType: faker.helpers.arrayElement(["Rent", "Sale", "Commercial"]),
        area: faker.datatype.number({ min: 50, max: 500 }),
        city: faker.address.city(),
        country: faker.address.country(),
        bedrooms: faker.datatype.number({ min: 1, max: 5 }),
        bathrooms: faker.datatype.number({ min: 1, max: 3 }),
        parkingSpace: faker.datatype.number({ min: 0, max: 3 }),
        imageUrls: [
          faker.image.imageUrl(),
          faker.image.imageUrl(),
          faker.image.imageUrl(),
          faker.image.imageUrl(),
        ],
      });

      propertiesPromise.push(fakeProperty);
    }

    await Promise.all(propertiesPromise);

    console.log("Properties created", numberOfProperties);
    process.exit(1);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { generateFakeProperties };
