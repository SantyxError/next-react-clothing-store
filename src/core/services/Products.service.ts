import { fetchFromBestBuy } from "../infrastructure/Products/repository/Products.repository";

export const getProducts = async (
  query: string,
  params: Record<string, string>
) => {
  return fetchFromBestBuy(query, params);
};

export const getProductsByCategory = async (category: string) => {
  return getProducts(`products(categoryPath.id=${category})`, {
    format: "json",
    show: "sku,name,salePrice,image",
  });
};
