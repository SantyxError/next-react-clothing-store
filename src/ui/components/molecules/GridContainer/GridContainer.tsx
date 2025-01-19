import React, { ReactNode } from "react";
import { Wrapper } from "./GridContainer.styled";

type GridContainerProps = {
  rows: number;
  columns: number;
  children: ReactNode;
};

export const GridContainer: React.FC<GridContainerProps> = ({
  rows,
  columns,
  children,
}) => {
  return (
    <Wrapper $rows={rows} $columns={columns}>
      {children}
    </Wrapper>
  );
};
