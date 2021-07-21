import React from 'react'
import { TypoGraphyCategory } from '../../../lib/css/TempTypo'
import P from '../../../shared/P/P'
import S from './Descript.styled'

function Descript() {
    
  return (
    <S.DescriptWrapper>
      <P size={TypoGraphyCategory.title}>정보</P>
      <S.DescriptText>
        글렌모렌지 시그넷(Glenmorangie Signet)은 글렌모렌지 증류소가 창조한 가장 훌륭한 위스키 중 하나입니다. 시그넷은 독특하고 진귀한 2가지 타입의 맥아로 만들어진 두 종류의 위스키 조합으로 만들어졌습니다. 글렌모렌지 증류소는 30년 이상의 숙성 원액 중 특별한 2가지의 원액을 선발하였습니다. 이들을 세계 최정상급 품질의 캐스크에서 숙성시켜 풍부한 풍미를 지닌 위스키로 재탄생시켰습니다.

시그넷의 두가지 위스키의 원료인 Single estate Cadboll과 Malted Chocolate Barley는 시그넷의 풍미를 좌우하는 재료입니다. 캐드볼 보리는 글렌모렌지 위스키의 크리미한 느낌을 내는 원료로, 독창적 로스팅 기법을 통해 탄생한 Chocolate Barley는 시그넷의 녹아내리는 듯한 달콤함에 지대한 영향력을 발휘합니다. 시그넷은 2번의 증류와 비냉각여과 공정을 거쳐 탄생한 위스키입니다. 첫번째로, 글렌모렌지가 심혈을 기울여 제작한 미국산 화이트 오크 캐스크에서 폭발적인 스파이시함을 갖추었습니다. 둘째로, 테인의 남자로 불리우는 16명의 위스키 장인들은 이 훌륭한 원액을 매끄럽고 아름답게 조각해냈습니다.

글렌모렌지 시그넷의 주요 수상 내역으로는 ISC 2019 금상, Travel Retail Spirits Masters 2018 금상, IWSC 2018 금메달, ISC 2018 금메달, SFWSC 2018 금메달, WWA2018 금메달 등 2013년부터 2019년까지 다양한 대회의 수상 경력을 자랑하고 있습니다.


      </S.DescriptText>
    </S.DescriptWrapper>
  )
}

export default Descript
