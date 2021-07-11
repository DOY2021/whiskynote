import React, { useState } from 'react'
import Styled from './DropDown.styled'

interface DropDownProp {
  children: React.ReactNode;
}

function DropDown({
  children
}:DropDownProp) {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(open => !open)
  }

  return (
    <Styled.DropDownWrapper onClick={handleOpen}>
      {isOpen && React.Children.map(children, (child) => {
        return (
          <Styled.DropDownItem>
            {child}
          </Styled.DropDownItem>
        )
      })}
    </Styled.DropDownWrapper>
  )
}



export default DropDown
