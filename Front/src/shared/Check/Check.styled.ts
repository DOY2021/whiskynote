import styled from "styled-components";
import Palette from "../../lib/css/Pallete";

const CheckBox = styled.input`
  display:none;

  &:checked + label{
    
    background-color: ${Palette.Orange600};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, .1) inset;
    text-align:center;

    &:after{
      content:"✓";
      color:white;
    }
  }
`

const CheckBoxLabel = styled.label`
display: block;
width: 1em;
height: 1em;

border: 1px solid black;
`;

const CheckBoxText = styled.div`
  font-size: 13px;
  margin-top:8px;
  margin-left:5px`

export default {
  CheckBox,
  CheckBoxLabel,
  CheckBoxText,
}