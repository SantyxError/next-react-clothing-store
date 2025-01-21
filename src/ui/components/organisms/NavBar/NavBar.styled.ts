import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

// Contenedor principal del Navbar
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.linkHover};
  position: relative;
`;

// Logo a la izquierda
export const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSize[5]};
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.color.background};
`;

// Menú hamburguesa (para móviles)
export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const BurgerIcon = styled.div`
  width: 24px;
  height: 2px;
  background-color: ${({ theme }) => theme.color.text};
  margin: 4px 0;
`;

// Menú desplegable
export const Menu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0;
  color: ${({ theme }) => theme.color.background};
  width: 200px;
  border-radius: 8px;
  z-index: 10;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    box-shadow: none;
    width: auto;
  }
`;

// Estilo de los elementos del menú
export const MenuItem = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.text};
  padding: 10px 15px;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;
  / &:hover {
    color: ${({ theme }) => theme.color.warning};
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
    text-align: left;
  }
`;

// Contenedor para el ícono de la cesta
export const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  cursor: pointer;
  padding: 5px;

  @media (min-width: 768px) {
    margin-left: 20px;
  }

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

// Ícono de la cesta
export const CartIcon = styled(FaShoppingCart)`
  font-size: 24px;
  color: ${({ theme }) => theme.color.background};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.color.warning};
  }
`;
