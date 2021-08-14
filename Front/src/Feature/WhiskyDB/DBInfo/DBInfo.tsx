import React from 'react'
import Description from './Description/Description'
import ImageSlider from './ImageSlider/ImageSlider'
import S from './DBInfo.styled'

import useWhiskyDB from '../../../hook/swr/useWhiskyDB'

function DBInfo() {


  const {data, error, isLoading} = useWhiskyDB();
  
  if(isLoading) (
    <div>
      Loading
    </div>
  );

  return (
    <S.DBInfoDetailWrapper>
      <ImageSlider />
      {data && <Description {...data}/>}
    </S.DBInfoDetailWrapper>
  )
}

export default DBInfo
