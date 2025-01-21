import { Meta, StoryObj } from "@storybook/react";
import ProductCard from "@/ui/components/molecules/ProductCard/ProductCard";

const mockProduct = {
  sku: "12345",
  name: 'Apple - MacBook Pro® - 15.4" Display - Intel Core i7 - 16 GB Memory - 1TB Solid State Drive - Space Gray',
  image:
    "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4600/4600100_sd.jpg",
  salePrice: 20.0,
  description: "Este es un ejemplo de descripción de producto",
  reviewAverage: 4.5,
};

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  title: "molecules/ProductCard",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Playground: Story = {
  args: {
    product: mockProduct,
  },
};
