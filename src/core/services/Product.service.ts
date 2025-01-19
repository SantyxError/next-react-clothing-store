import { Product } from "../domain/Product.model";
import { productRepository } from "../infrastructure/Product/repository/Product.repository";

export const productService = {
  getProduct: async (sku: string): Promise<Product> => {
    return productRepository.getProduct(sku);
  },
};
