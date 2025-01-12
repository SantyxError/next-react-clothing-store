export type ProductDTO = {
  sku: string;
  name: string;
  salePrice: number;
  image: string;
};

export type ProductsDTO = {
  from: number;
  to: number;
  currentPage: number;
  total: number;
  totalPages: number;
  queryTime: string;
  totalTime: string;
  partial: boolean;
  canonicalUrl: string;
  products: ProductDTO[];
};
