import React from "react";
import { Product } from "@/core/domain/Product.model";
import Text from "@/ui/components/atoms/Text/Text";
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
        <ProductTitle>
          <Text as="h3" size={4} fontWeight="bold" align="left">
            {product.name}
          </Text>
        </ProductTitle>

        <ProductDescription>
          <Text as="p" size={3} color="black" align="left">
            {product.description}
          </Text>
        </ProductDescription>

        <ProductPrice>
          <Text as="p" size={4} fontWeight="bold" color="success" align="left">
            <strong>Precio:</strong> {product.salePrice} €
          </Text>
        </ProductPrice>

        <ProductReview>
          <Text as="p" size={3} color="textSecondary" align="left">
            <strong>Review Average:</strong> {product.reviewAverage}
          </Text>
        </ProductReview>

        <AddToCartButton>
          <Text as="span" size={3} color="bone">
            Añadir al carrito
          </Text>
        </AddToCartButton>
      </ProductInfo>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
