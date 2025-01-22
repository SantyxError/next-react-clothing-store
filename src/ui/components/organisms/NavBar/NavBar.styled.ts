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
`;

export const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSize[5]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.color.background};
  text-decoration: none;
`;

export const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.mobile} {
    display: flex;
  }
`;

export const BurgerIcon = styled.span`
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.color.background};
  margin: 3px 0;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
`;

export const Menu = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};

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
  }
`;

export const MenuItem = styled.a`
  font-size: ${({ theme }) => theme.fontSize[4]};
  color: ${({ theme }) => theme.color.background};
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.color.warning};
    transform: scale(1.1);
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
