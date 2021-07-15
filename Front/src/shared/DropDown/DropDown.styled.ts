import styled from "styled-components";

const DropDownWrapper = styled.ul`
    width: 100%;
    height: 10px;
    
  text-align: center;

  background-color: #E7E5DE;

    position: absolute;
    top: 0;
    z-index: 98;

    border: 1px solid black;
`;

const DropDownItem = styled.li`
    width: 100%;
    height: 100px;

    z-index: 99;
    background-color: #E7E5DE;

    
`;

export default {
  DropDownItem,
  DropDownWrapper
}