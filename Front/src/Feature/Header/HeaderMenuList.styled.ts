import styled, { css, keyframes }  from 'styled-components';
import { Link } from 'react-router-dom';
import Palette from '../../lib/css/Pallete';


type activeProp = {
  isActive: boolean;
};

const trans = keyframes`
  from {
    transForm: translateY(-10px);
  }
  to {
    transForm: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const MenuNav = styled.nav<activeProp>`
  z-index: 100;
  position: absolute;
  top: 50px;
  width: 160px;
  height: 196px;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
  background-color: #EDECE6;
  right: 0px;
  visibility: hidden;
  border: 1px solid #736C64;
  animation: ${slideIn} 0.4s ease, ${trans} 0.4s ease, visibility 0.4s;


  ${props =>
    props.isActive &&
    `
        visibility: visible;
  `}
`;

const MenuFont = styled.div`
  font-size: 16px;
  color: #201F1E;
  margin-top:5px;
`;

const Line = styled.div`
  width:100%;
  height: 1px;
  background-color: #736C64
`

const MenuItem = styled.div`
  margin:auto;
  padding: 12px;
  height:48px;
  text-align: center;
  
  &:hover {
    background-color: #E5E5DF;
    
  }
`;

const PositionMenuList = styled.div`
  position: relative;
`;

const UserIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-top: 10px;
  float: right;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  float: right;
  cursor: pointer;
`;

export default {
  MenuNav,
  MenuFont,
  MenuItem,
  PositionMenuList,
  UserIcon,
  ProfileImg,
  Line
}