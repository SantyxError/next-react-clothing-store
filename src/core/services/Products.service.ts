import { Products } from "../domain/Products.model";
import { productsRepository } from "../infrastructure/Products/repository/Products.repository";

export const productsService = {
  getProducts: (): Promise<Products> => {
    return productsRepository.getProducts();
  },
};


