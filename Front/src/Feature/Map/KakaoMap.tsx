import React, { useState } from 'react';
import S from './KakaoMap.styled';

const { Kakao } = window; //for TypeScript
declare global {
  interface Window {
    Kakao: any;
  }
}

function KakaoMap() {
  React.useEffect(() => {
    // Runs after the first render() lifecycle
    const script = document.createElement('script');
    script.async = true;
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=f6230ce288380f4604713c303d50bfb3";
    document.head.appendChild(script);

    script.onload = () => {
      Kakao.maps.load(() => {
        let container = document.getElementById('map');
        let options = {
          center: new Kakao.maps.LatLng(37.506502, 127.053617),
          level: 5
        };
        const map = new Kakao.maps.Map(container, options);

      })
    }
  }, []);




  return (
    <S.MapWrapper id="map">
    </S.MapWrapper>
  );
}

export default KakaoMap;