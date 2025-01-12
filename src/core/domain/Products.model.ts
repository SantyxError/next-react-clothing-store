export type Product = {
  sku: string;
  name: string;
  salePrice: number;
  image: string;
};

export type Products = {
  products: Product[];
};
