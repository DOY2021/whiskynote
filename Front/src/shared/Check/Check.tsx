import React from 'react'
import S from './Check.styled'

interface CheckProps {
  checked: boolean;
  onChange: () => void
}

function Check({
  checked,
  onChange,
}: CheckProps) {
  return (
    <>
      <S.CheckBox
        id='chk'
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <S.CheckBoxLabel htmlFor='chk'></S.CheckBoxLabel>
    </>
  )
}

export default Check
