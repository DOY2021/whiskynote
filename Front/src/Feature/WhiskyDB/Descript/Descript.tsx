import React from 'react'
import useWhiskyDB from '../../../hook/swr/useWhiskyDB'
import { TypoGraphyCategory } from '../../../lib/css/TempTypo'
import P from '../../../shared/P/P'
import S from './Descript.styled'

function Descript() {
  const {data, isLoading} = useWhiskyDB();

  if(isLoading) (
    <div>
      Loading
    </div>
  )
    
  return (
    <S.DescriptWrapper>
      <P size={TypoGraphyCategory.title}>정보</P>
      <S.DescriptText>
        {data?.whisky_detail}
      </S.DescriptText>
    </S.DescriptWrapper>
  )
}

export default Descript
