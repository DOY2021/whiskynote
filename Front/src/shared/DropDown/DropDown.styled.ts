import styled, { css } from "styled-components";
import { absoluteCenter } from "../../lib/css/Mixin";

const DropDownWrapper = styled.ul`
    width: 100%;
    

    backround-color: #736C64;
    
  text-align: center;

  visibility: none;

  border: 1px solid #736C64;

    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    z-index: 98;


    

`;

const DropDownItem = styled.li`
  

    z-index: 99;
    background-color: #736C64;

    border-bottom: 1px solid rgba(0,0,0,0.1)


`;

export default {
  DropDownItem,
  DropDownWrapper
}