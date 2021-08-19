import styled, { css } from "styled-components";
import { absoluteCenter } from "../../lib/css/Mixin";

const DropDownWrapper = styled.ul`
    width: 100%;
    

    backround-color: #EDECE6;
    
  text-align: center;

  visibility: none;

    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    z-index: 98;


    

`;

const DropDownItem = styled.li`
    ${absoluteCenter}
    width: 100%;
    height: 70px;

    z-index: 99;
    background-color: #E7E5DE;

    border-bottom: 1px solid rgba(0,0,0,0.1)
`;

export default {
  DropDownItem,
  DropDownWrapper
}