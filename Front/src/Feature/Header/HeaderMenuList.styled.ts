import styled, { css, keyframes }  from 'styled-components';
import { Link } from 'react-router-dom';
import Palette from '../../css/Palette';

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
  position: absolute;
  top: 50px;
  width: 176px;
  height: 176px;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
  border-radius: 8px;
  background-color: white;
  right: 0px;
  visibility: hidden;
  animation: ${slideIn} 0.4s ease, ${trans} 0.4s ease, visibility 0.4s;

  ${props =>
    props.isActive &&
    `
        visibility: visible;
  `}
`;

const MenuFont = styled.div`
  font-size: 16px;
  color: ${Palette.Gray900};
  margin-left: 10px;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;
  &:hover {
    background-color: ${Palette.Gray000};
  }
`;

const PositionMenuList = styled.div`
  position: relative;
`;

const UserIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-top: 10px;
  float: right;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
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
  ProfileImg
}