import Palette from '../../../lib/css/Pallete';
const handleColors = text => {
  switch (text) {
    case '곡물':
      return Palette.곡물;
    case '나무':
      return Palette.나무;
    case '꽃':
      return Palette.꽃;
    case '과일':
      return Palette.과일;
    case '와인':
      return Palette.와인;
    case '유황':
      return Palette.유황;
    case '피트':
      return Palette.피트;
    case '후류':
      return Palette.후류;
    default:
      return '#e7e5de';
  }
};

export default handleColors;