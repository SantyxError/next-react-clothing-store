import React from "react";
import { Wrapper } from "./GridContainer.styled";

type GridContainerProps = {
  rows: number;
  columns: number;
};

export const GridContainer: React.FC<GridContainerProps> = ({
  rows,
  columns,
}) => {
  return (
    <Wrapper rows={rows} columns={columns}>
      GridContainer
    </Wrapper>
  );
};
