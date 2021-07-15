import React from 'react'
import { TypoGraphyCategory } from '../../lib/css/TempTypo'


import P from '../../shared/P/P'
import S from './RegisterWhisky.styled'

function RegisterWhisky() {
  return (
    <S.RegisterWhiskyWrapper>
      <P size = {TypoGraphyCategory.body}>새로운 위스키 등록</P>
    </S.RegisterWhiskyWrapper>
  )
}

export default RegisterWhisky
