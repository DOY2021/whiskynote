import React, { useState } from 'react'
import P from '../P/P'
import Styled from './DropDown.styled'

interface DropDownProp {
  children: React.ReactNode;
  onClick?: (v:any) => void;
}

function DropDown({
  children,
  onClick,
}:DropDownProp) {
  // const [isOpen, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(open => !open)
  // }

  return (
    <Styled.DropDownWrapper >
      {React.Children.map(children, (child) => {
        return (
          <Styled.DropDownItem >
              {child}
          </Styled.DropDownItem>
        )
      })}
    </Styled.DropDownWrapper>
  )
}



export default DropDown
