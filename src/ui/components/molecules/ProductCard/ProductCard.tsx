import { Product } from "@/core/domain/Products.model";
import Link from "next/link";
import Image from "next/image";
import {
  ProductCardWrapper,
  ProductImage,
  ProductName,
  ProductPrice,
  DetailsLink,
  CardButton,
} from "./ProductCard.syled";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <ProductCardWrapper>
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
      <CardButton onClick={() => alert(`Detalles de ${product.name}`)}>
        Añadir al carrito
      </CardButton>
    </ProductCardWrapper>
  );
};

export default ProductCard;
