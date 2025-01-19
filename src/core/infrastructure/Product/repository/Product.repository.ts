import axios from "axios";
import { Product } from "./../../../domain/Product.model";
import { ProductDTO } from "../dto/Product.dto";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = "https://api.bestbuy.com/v1/products";

const getProduct = async (sku: string): Promise<Product> => {
  const apiKey = process.env.NEXT_PUBLIC_BESTBUY_API_KEY;

  if (!apiKey) {
    throw new Error("API key is missing in .env file");
  }

  const url = `${BASE_URL}/${sku}.json?show=sku,name,salePrice,image,longDescription,customerReviewAverage&format=json&apiKey=${apiKey}`;

  try {
    const response = await axios.get<ProductDTO>(url);
    return mapProduct(response.data);
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

const mapProduct = (productDTO: ProductDTO): Product => {
  return {
    reviewAverage: productDTO.customerReviewAverage,
    image: productDTO.image,
    description: productDTO.longDescription,
    name: productDTO.name,
    salePrice: productDTO.salePrice,
    sku: productDTO.sku,
  };
};

export const productRepository = {
  getProduct,
};
