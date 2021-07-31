import styled, { css } from "styled-components";

interface DropDownWrapperProp {
  isOpen: boolean;
}

const DropDownWrapper = styled.ul<DropDownWrapperProp>`
    width: 100%;
    min-height: 40px;
    
  text-align: center;

  visibility: none;

    position: absolute;
    bottom: 0;
    z-index: 98;
  ${({isOpen}) => isOpen && css`
    visibility: visible;
    border: 1px solid black;
  `}

`;

const DropDownItem = styled.li`
    width: 100%;
    height: 100px;

    z-index: 99;
    background-color: #E7E5DE;

    border-bottom: 1px solid rgba(0,0,0,0.1)
`;

export default {
  DropDownItem,
  DropDownWrapper
}