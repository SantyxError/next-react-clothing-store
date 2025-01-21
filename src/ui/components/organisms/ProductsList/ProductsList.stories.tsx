// src/stories/ProductsList.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import ProductsList from "@/ui/components/organisms/ProductsList/ProductsList";

// Mock de productos
const mockProducts = [
  {
    sku: "12345",
    name: "Camiseta Básica",
    image: "/images/camiseta.jpg",
    salePrice: "20.00",
  },
  {
    sku: "67890",
    name: "Pantalón Casual",
    image: "/images/pantalon.jpg",
    salePrice: "40.00",
  },
  {
    sku: "11223",
    name: "Chaqueta de Invierno",
    image: "/images/chaqueta.jpg",
    salePrice: "60.00",
  },
];

// Mock para el servicio `getProducts`
const mockGetProducts = () => {
  return Promise.resolve({ products: mockProducts });
};

const meta: Meta<typeof ProductsList> = {
  component: ProductsList,
  title: "Organisms/ProductsList",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductsList>;

export const Playground: Story = {
  args: {
    // Sobrescribir el servicio productsService directamente
    getProducts: mockGetProducts,
  },
};
