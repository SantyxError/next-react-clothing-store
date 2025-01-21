import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/core/domain/Products.model";
import { productsService } from "@/core/services/Products.service";
import {
  ProductsListWrapper,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  DetailsLink,
} from "./ProductsList.styled";

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
      <h1>Lista de productos</h1>

      <ProductsListWrapper>
        {products.map((product) => (
          <ProductCard key={product.sku}>
            <ProductImage>
              <Image
                className="product-image"
                src={product.image}
                width={400}
                height={400}
                alt={product.name}
                layout="intrinsic"
              />
            </ProductImage>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.salePrice}</ProductPrice>
            <Link
              href={{
                pathname: "/product/[slug]",
                query: { slug: product.sku },
              }}
              passHref>
              <DetailsLink>Ver detalles</DetailsLink>
            </Link>
          </ProductCard>
        ))}
      </ProductsListWrapper>
    </>
  );
}
