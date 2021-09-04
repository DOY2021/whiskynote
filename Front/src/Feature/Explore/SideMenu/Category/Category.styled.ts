import styled from "styled-components";

const CategoryWrapper = styled.ul`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CategoryItemWrapper = styled.li`
  margin-top: 11px;
  cursor: pointer;
`;

export default{
  CategoryWrapper,
  CategoryItemWrapper,
}