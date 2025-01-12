import { Product } from "../domain/Product.model";
import { productRepository } from "../infrastructure/Product/repository/Product.repository";

export const productService = {
  getProduct: async (name: string): Promise<Product> => {
    return productRepository.getOne(name);
  },
};
