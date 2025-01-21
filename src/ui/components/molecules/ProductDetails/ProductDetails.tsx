import React from "react";
import { Product } from "@/core/domain/Product.model";
import {
  ProductDetailsContainer,
  ProductInfo,
  ProductImageContainer,
  ProductTitle,
  ProductImage,
  ProductDescription,
  ProductPrice,
  ProductReview,
  AddToCartButton,
} from "./ProductDetails.styled";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <ProductDetailsContainer>
      <ProductImageContainer>
        <ProductImage src={product.image} alt={product.name} />
      </ProductImageContainer>

      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>
          <strong>Precio:</strong> {product.salePrice} €
        </ProductPrice>
        <ProductReview>
          <strong>Review Average:</strong> {product.reviewAverage}
        </ProductReview>
        <AddToCartButton>Añadir al carrito</AddToCartButton>
      </ProductInfo>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
