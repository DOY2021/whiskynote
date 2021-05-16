import { css } from 'styled-components';

export const absoluteCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type ResponsiveSizeProp = {
  PCwidth: string;
  PCheight: string;
  mobileWidth: string;
  mobileHeight: string;
  tabletWidth: string;
  tabletHeight: string;
};
//TODO 반응형 설정
export const responsiveSize = (
  PCwidth: string,
  PCheight: string,
  mobileWidth: string,
  mobileHeight: string,
  tabletWidth: string = PCwidth,
  tabletHeight: string = PCheight,
) => css`
  /* PC (해상도 1024px)*/
  @media all and (min-width: 1024px) {
    width: ${PCwidth};
    height: ${PCheight};
  }

  /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 10px) {
    width: ${tabletWidth};
    height: ${tabletHeight};
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 10px) {
    width: ${mobileWidth};
    height: ${mobileHeight};
  }
`;
