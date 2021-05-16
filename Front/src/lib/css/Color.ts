import Palette from "./Pallete";

interface BtnColor {
  default: string;
  hover: string;
  pressed: string;
  disabled: string;
}

const primaryBtnColor: BtnColor = {
  default: Palette.Green500,
  hover: Palette.Green600,
  pressed: Palette.Green400,
  disabled: Palette.Green200,
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
