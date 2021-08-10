import React from 'react'
import Description from './Description/Description'
import ImageSlider from './ImageSlider/ImageSlider'
import S from './DBInfo.styled'
import useSWR from 'swr'
import { useParams } from 'react-router'
import { whiskyDBAPI } from '../../../api/whiskyDB'

function DBInfo() {

  const whisky_id = useParams()

  const {data, error} = useSWR(['/api/whisky/id', whisky_id],(url, whisky_id) => {
    return whiskyDBAPI.getWhiskyDetail(whisky_id);
  })
  

  return (
    <S.DBInfoDetailWrapper>
      <ImageSlider />
      <Description {...data}/>
    </S.DBInfoDetailWrapper>
  )
}

export default DBInfo
