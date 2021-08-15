import React from 'react'
import S from './Check.styled'

interface CheckProps {
  checked: boolean;
  onChange: () => void
  id:string
}

function Check({
  checked,
  onChange,
  id
}: CheckProps) {
  return (
    <>
      <S.CheckBox
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <S.CheckBoxLabel htmlFor={id}></S.CheckBoxLabel>
    </>
  )
}

export default Check
