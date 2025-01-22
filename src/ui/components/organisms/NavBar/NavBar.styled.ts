import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.color.linkHover};
  color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.boxShadow[2]};
  position: relative;
  transition: background-color 0.3s ease;
  z-index: 10;

  /* Agregar una sombra sutil al desplazarse */
  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;

export const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSize[5]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: white; /* El color blanco para el logo */
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: white; /* Asegurando que el color siga siendo blanco al pasar el mouse */
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 100;

  ${({ theme }) => theme.mediaQueries.mobile} {
    display: flex;
  }
`;

export const BurgerIcon = styled.span`
  width: 30px;
  height: 3px;
  background-color: ${({ theme }) => theme.color.background};
  margin: 5px 0;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  transition: transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.warning};
  }
`;

export const Menu = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;

  ${({ theme }) => theme.mediaQueries.mobile} {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: column;
    width: 100%;
    background-color: ${({ theme }) => theme.color.linkHover};
    box-shadow: ${({ theme }) => theme.boxShadow[3]};
    padding: ${({ theme }) => theme.spacing[4]};
    z-index: 50;
  }
`;

export const MenuItem = styled.a`
  font-size: ${({ theme }) => theme.fontSize[4]};
  color: ${({ theme }) => theme.color.background};
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.color.warning};
    transform: scale(1.05);
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ theme }) => theme.fontSize[3]};
  }
`;

export const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  cursor: pointer;
  padding: 5px;
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    margin-left: 20px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 24px;
  color: ${({ theme }) => theme.color.background};
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.color.warning};
    transform: scale(1.2);
  }
`;
