import { useState, useEffect } from "react";
import { Product } from "@/core/domain/Products.model";
import { productsService } from "@/core/services/Products.service";

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
      <ul>
        {products.map((product) => (
          <li key={product.sku}>
            <img src={product.image} alt={product.name} width="100" />
            <h2>{product.name}</h2>
            <p>Precio: ${product.salePrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
