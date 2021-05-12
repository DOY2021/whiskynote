import Palette from './Palette';

interface BtnColor {
  default: string;
  hover: string;
  pressed: string;
  disabled: string;
}

const primaryBtnColor: BtnColor = {
  default: Palette.YB500,
  hover: Palette.YB600,
  pressed: Palette.YB400,
  disabled: Palette.YB200,
};

const secondaryBtnColor: BtnColor = {
  default: Palette.Violet500,
  hover: Palette.Violet600,
  pressed: Palette.Violet400,
  disabled: Palette.Violet200,
};

const grayBtnColor: BtnColor = {
  default: Palette.Gray500,
  hover: Palette.Gray600,
  pressed: Palette.Gray400,
  disabled: Palette.Gray200,
};

export default {
  primaryBtnColor,
  secondaryBtnColor,
  grayBtnColor,
};
