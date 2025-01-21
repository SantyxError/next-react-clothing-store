import styled from "styled-components";

// Navbar contenedor principal
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[3]} 10px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.background};
  position: relative;
`;

// Logo
export const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.background};
  text-decoration: none;
`;

// Menú
export const Menu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: ${({ theme }) => theme.color.primary};
    width: 100%;
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    padding: 10px;
  }
`;

// Elementos del menú
export const MenuItem = styled.a`
  font-size: ${({ theme }) => theme.fontSize[3]};
  margin-left: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.background};
  text-decoration: none;
  padding: 8px 12px;

  &:hover {
    background-color: ${({ theme }) => theme.color.backgroundSecondary};
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    padding: 10px;
    width: 100%;
  }
`;

// Icono del menú hamburguesa
export const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const BurgerIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.color.background};
  margin: 5px 0;
`;
