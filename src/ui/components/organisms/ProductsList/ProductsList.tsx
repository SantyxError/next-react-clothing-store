import { useState, useEffect } from "react";
import { Product } from "@/core/domain/Products.model";
import { productsService } from "@/core/services/Products.service";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import { ProductsListWrapper, Title } from "./ProductsList.styled";

export default function ProductsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const productsData = await productsService.getProducts();
    if (productsData) {
      setProducts(productsData.products);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Title>Lista de productos</Title>
      <ProductsListWrapper>
        {products.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </ProductsListWrapper>
    </>
  );
}
