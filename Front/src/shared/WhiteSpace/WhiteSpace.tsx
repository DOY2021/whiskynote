import React from 'react'
import styled from 'styled-components'

function WhiteSpace({
  height
}:WhiteSpaceWrapperProp) {
  return (
    <WhiteSpaceWrapper height={height}/>
  )
}

export default WhiteSpace

interface WhiteSpaceWrapperProp {
  height: string;
}

const WhiteSpaceWrapper = styled.div<WhiteSpaceWrapperProp>`
    width: 1px;
    height: ${({height}) => height && `${height}px`};
`