import { isArray } from "lodash";
import styled from "styled-components";

const hasCustomDisplay = (display) => {
  return isArray(display);
};

const getColumns = (columns) => {
  const array = new Array(columns);
  return hasCustomDisplay(columns)
    ? columns.join(" ")
    : array.fill("1fr").join(" ");
};

export const StyledGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: ${(props) => getColumns(props.columns)};

  @media (max-width: 500px) {
    grid-template-columns: unset;
  }
`;
