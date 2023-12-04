import { Products } from "../models/index.js";

export const readProducts = async () => {
  return await Products.findAll();
};

export const createProduct = async (product_image, title, price, AKG) => {
  return await Products.create({
    product_image,
    title,
    price,
    AKG,
  });
};
