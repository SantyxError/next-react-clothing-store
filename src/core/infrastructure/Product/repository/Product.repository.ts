import axios from "axios";
import { Product } from "./../../../domain/Product.model";
import { ProductDTO } from "../dto/Product.dto";
import dotenv from "dotenv";
dotenv.config(); 

const API_KEY = process.env.BESTBUY_API_KEY;
if (!API_KEY) {
  throw new Error("La API Key de BestBuy no está definida en el archivo .env");
}
const BASE_URL = "https://api.bestbuy.com/v1/products";

const getOne = async (sku: string): Promise<Product> => {
  try {
    const response = await axios.get<ProductDTO>(`${BASE_URL}/${sku}.json`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return mapProduct(response.data);
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

const mapProduct = (productDTO: ProductDTO): Product => {
  return {
    accessories: productDTO.accessories,
    color: productDTO.color,
    condition: productDTO.condition,
    customerReviewAverage: productDTO.customerReviewAverage,
    customerReviewCount: productDTO.customerReviewCount,
    customerTopRated: productDTO.customerTopRated,
    depth: productDTO.depth,
    description: productDTO.description,
    details: {
      name: productDTO.details.name,
      value: productDTO.details.value,
    },
    digital: productDTO.digital,
    features: productDTO.features,
    format: productDTO.format,
    height: productDTO.height,
    includedItemList: productDTO.includedItemList,
    longDescription: productDTO.longDescription,
    longDescriptionHtml: productDTO.longDescriptionHtml,
    manufacturer: productDTO.manufacturer,
    modelNumber: productDTO.modelNumber,
    name: productDTO.name,
    preowned: productDTO.preowned,
    productVariations: productDTO.productVariations,
    quantityLimit: productDTO.quantityLimit,
    releaseDate: productDTO.releaseDate,
    shortDescription: productDTO.shortDescription,
    shortDescriptionHtml: productDTO.shortDescriptionHtml,
    sku: productDTO.sku,
    upc: productDTO.upc,
    warrantyLabor: productDTO.warrantyLabor,
    warrantyParts: productDTO.warrantyParts,
    weight: productDTO.weight,
    width: productDTO.width,
  };
};

export const productRepository = {
  getOne,
};
