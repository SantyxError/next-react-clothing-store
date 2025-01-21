import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Product as ProductModel } from "@/core/domain/Product.model";
import { productService } from "@/core/services/Product.service";
import ProductDetails from "@/ui/components/molecules/ProductDetails/ProductDetails";

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
      <ProductDetails
        product={{
          sku: product.sku,
          name: product.name,
          salePrice: product.salePrice,
          image: product.image,
          description: product.description,
          reviewAverage: product.reviewAverage,
        }}
      />
    </>
  );
}
