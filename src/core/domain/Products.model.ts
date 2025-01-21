export type Product = {
  sku: number;
  name: string;
  salePrice: number;
  image: string;
};

export type Products = {
  products: Product[];
};
