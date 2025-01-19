import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Product as ProductModel } from "@/core/domain/Product.model";
import { productService } from "@/core/services/Product.service";

export default function Product() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<ProductModel>();

  const getProduct = async (sku?: string) => {
    if (sku) {
      const productData = await productService.getProduct(sku);
      if (productData) {
        setProduct(productData);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getProduct(router.query.slug as string);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  if (!product) {
    return <div>No se ha encontrado el producto</div>;
  }

  return (
    <>
      <p>Product: {product.name}</p>
      <p>Image: {product.image}</p>
    </>
  );
}
