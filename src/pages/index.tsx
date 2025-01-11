import { useEffect, useState } from "react";
import { getProductsByCategory } from "../core/services/Products.service";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory("abcat0502000");
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.sku}>
            <img src={product.image} alt={product.name} width={100} />
            <p>{product.name}</p>
            <p>${product.salePrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
