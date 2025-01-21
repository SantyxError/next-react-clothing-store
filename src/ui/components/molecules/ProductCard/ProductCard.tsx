import React from "react";
import { Product } from "../../../../core/domain/Product.model";
import {
  ProductCardContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./ProductCard.syled";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.salePrice}</ProductPrice>
      </ProductInfo>
    </ProductCardContainer>
  );
};
