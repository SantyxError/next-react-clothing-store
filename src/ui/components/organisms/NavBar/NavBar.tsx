import React, { useState } from "react";
import Text from "@/ui/components/atoms/Text/Text"; // Asegúrate de que la ruta sea correcta
import {
  NavbarContainer,
  Logo,
  Menu,
  MenuItem,
  BurgerMenu,
  BurgerIcon,
  CartIconWrapper,
  CartIcon,
} from "./NavBar.styled";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <Logo href="/">
        <Text as="p" size={5} color="bone">
          SantyxError
        </Text>{" "}
      </Logo>
      <BurgerMenu onClick={toggleMenu}>
        <BurgerIcon />
        <BurgerIcon />
        <BurgerIcon />
      </BurgerMenu>
      <Menu $isOpen={isMenuOpen}>
        <MenuItem href="/">
          <Text as="p" size={4}>
            Inicio
          </Text>{" "}
        </MenuItem>
        <MenuItem href="/products">
          <Text as="p" size={4}>
            Productos
          </Text>{" "}
        </MenuItem>
        <MenuItem href="/contact">
          <Text as="p" size={4}>
            Contacto
          </Text>{" "}
        </MenuItem>
      </Menu>
      <CartIconWrapper>
        <CartIcon />
      </CartIconWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
