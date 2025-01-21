import React, { useState } from "react";
import {
  NavbarContainer,
  Logo,
  Menu,
  MenuItem,
  BurgerMenu,
  BurgerIcon,
} from "./NavBar.styled";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <Logo href="/">SantyXError</Logo>
      <BurgerMenu onClick={toggleMenu}>
        <BurgerIcon />
        <BurgerIcon />
        <BurgerIcon />
      </BurgerMenu>
      <Menu isOpen={isMenuOpen}>
        <MenuItem href="/">Inicio</MenuItem>
        <MenuItem href="/products">Productos</MenuItem>
        <MenuItem href="/contact">Contacto</MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
