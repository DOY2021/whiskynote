import React from "react";
import styled from "styled-components";
import Palette from "../../../lib/css/Pallete";
import Typography
 from "../../../lib/css/Typography";

 const HeadLineWrapper = styled.div`
 display:flex;
 flex-direction:row;
 margin-bottom: 12px;
 `
 const HeadLineText = styled.p`
 color: ${Palette.Header};
 ${Typography.headline};
 display:flex;
 `
 const HeadLineMandatory = styled.p`
 color: ${Palette.YB600};
 ${Typography.headline};
 display:flex;
 `
 
function HeadLine(props) {

  return(
    <HeadLineWrapper>
    <HeadLineText>
      {props.inputText}
    </HeadLineText>
    {props.isMandatory && <HeadLineMandatory>*</HeadLineMandatory>}
  </HeadLineWrapper>
  )
}

export default HeadLine;