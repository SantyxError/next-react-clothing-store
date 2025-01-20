import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/core/domain/Products.model";
import { productsService } from "@/core/services/Products.service";
import { GridContainer } from "@/ui/components/molecules/GridContainer/GridContainer";

export default function Products() {
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
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Productos:</h1>
      <GridContainer columns={3} rows={3}>
        {products.map((product) => (
          <div key={product.sku}>
            <Image
              src={product.image}
              width={400}
              height={200}
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>Precio: ${product.salePrice}</p>
            <Link
              href={{
                pathname: "/product/[slug]",
                query: { slug: product.sku },
              }}>
              Details
            </Link>
          </div>
        ))}
      </GridContainer>
    </div>
  );
}
