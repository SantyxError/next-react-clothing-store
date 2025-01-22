import { Product } from "@/core/domain/Products.model";
import Text from "@/ui/components/atoms/Text/Text";

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
import { Button } from "../../atoms/Button/Button";

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
      <ProductName>
        <Text
          as="h4"
          size={3}
          color="linkHover"
          align="center"
          fontWeight="bold">
          {product.name} {/* Aquí cambiamos el valor de nombre */}
        </Text>
      </ProductName>
      <ProductPrice>
        <Text as="p" size={4} color="success" align="center" fontWeight="bold">
          ${product.salePrice} {/* Aquí añadimos el precio de venta */}
        </Text>
      </ProductPrice>
      <Link
        href={{
          pathname: "/product/[slug]",
          query: { slug: product.sku },
        }}
        passHref>
        <DetailsLink>
          <Text as="p" size={2} color="textSecondary" align="center">
            Ver Detalles
          </Text>
        </DetailsLink>
      </Link>
      <Button
        variant="primary"
        onClick={() => alert(`Añadir ${product.name} al carrito`)}>
        Añadir al carrito
      </Button>
    </ProductCardWrapper>
  );
};

export default ProductCard;
