import axios from "axios";
import dotenv from "dotenv";
import { Products } from "../../../domain/Products.model";
import { ProductsDTO } from "../dto/Products.dto";

dotenv.config();

const BASE_URL = "https://api.bestbuy.com/v1/products";

const getProducts = async (): Promise<Products> => {
  const apiKey = process.env.NEXT_PUBLIC_BESTBUY_API_KEY;
  if (!apiKey) {
    throw new Error("API key is missing in .env file");
  }

  const url = `${BASE_URL}(categoryPath.id=abcat0502000)?show=sku,name,salePrice,image&format=json&apiKey=${apiKey}`;

  try {
    const response = await axios.get<ProductsDTO>(url);
    return mapProducts(response.data);
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

const mapProducts = (productsDTO: ProductsDTO): Products => {
  return {
    products: productsDTO.products,
  };
};

export const productsRepository = {
  getProducts,
};
