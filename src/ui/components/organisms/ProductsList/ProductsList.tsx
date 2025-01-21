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
} from "./ProductsList.styled"; // Importar los estilos

export default function ProductsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  // Obtener los productos desde el servicio
  const getProducts = async () => {
    const productsData = await productsService.getProducts();
    if (productsData) {
      setProducts(productsData.products); // Actualizar el estado de productos
      setIsLoading(false); // Detener la carga
    }
  };

  useEffect(() => {
    getProducts(); // Obtener productos al montar el componente
  }, []);

  // Si está cargando, mostrar mensaje de carga
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <ProductsListWrapper>
      {products.map((product) => (
        <ProductCard key={product.sku}>
          {/* Usando Image de Next.js para cargar la imagen */}
          <ProductImage>
            <Image
              className="product-image"
              src={product.image}
              width={400}
              height={200}
              alt={product.name}
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
  );
}
