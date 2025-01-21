import { Meta, StoryObj } from "@storybook/react";
import ProductDetails from "@/ui/components/molecules/ProductDetails/ProductDetails"; // Ajusta la ruta según corresponda

const mockProduct = {
  name: 'Apple - MacBook Pro® - 15.4" Display - Intel Core i7 - 16 GB Memory - 1TB Solid State Drive - Space Gray',
  description: "Este es un ejemplo de descripción de producto",
  salePrice: 19.99,
  image:
    "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4600/4600100_sd.jpg",
  reviewAverage: 4.5,
  sku: 12345,
};

const meta: Meta<typeof ProductDetails> = {
  component: ProductDetails,
  title: "molecules/ProductDetails",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductDetails>;

export const Playground: Story = {
  args: {
    product: mockProduct,
  },
};
