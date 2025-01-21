import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[5]};
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  margin-bottom: 20px;
  padding: ${({ theme }) => theme.spacing[6]};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
`;
