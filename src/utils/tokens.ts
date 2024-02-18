const FONT_FAMILY = 'Inter'

const COLOR_BLACK = '#000'
const COLOR_WHITE = '#FFF'

const COLOR_GREY_100 = '#EBEBEB'
const COLOR_GREY_200 = '#DDDDDD'
const COLOR_GREY_300 = '#B4B4B4'
const COLOR_GREY_400 = '#979797'
const COLOR_GREY_500 = '#777'
const COLOR_GREY_600 = '#636363'
const COLOR_GREY_700 = '#545454'
const COLOR_GREY_800 = '#424242'
const COLOR_GREY_900 = '#252525'

const COLOR_GREEN_600 = '#29B95F'
const COLOR_BLUE_600 = '#277DFF'
const COLOR_BROWN_600 = '#6B3C16'
const COLOR_PURPLE_600 = '#7522C5'
const COLOR_YELLOW_600 = '#FAB020'
const COLOR_ORANGE_600 = '#FF730E'
const COLOR_RED_600 = '#D20000'

/* Color themes */

const tokens: Tokens = {
  typo: {
    small: {
      fontFamily: FONT_FAMILY,
      fontSize: 16,
      lineHeight: 20,
      letterSpacing: 0
    },
    medium: {
      fontFamily: FONT_FAMILY,
      fontSize: 24,
      lineHeight: 30,
      letterSpacing: -1
    },
    large: {
      fontFamily: FONT_FAMILY,
      fontSize: 40,
      lineHeight: 48,
      letterSpacing: -1
    },
    extraLarge: {
      fontFamily: FONT_FAMILY,
      fontSize: 64,
      lineHeight: 80,
      letterSpacing: -2
    },
    huge: {
      fontFamily: FONT_FAMILY,
      fontSize: 96,
      lineHeight: 120,
      letterSpacing: -2
    }
  },
  txt: {
    primary: {
      default: { color: COLOR_BLACK },
      inverted: { color: COLOR_WHITE }
    },
    secondary: {
      default: { color: COLOR_GREY_500 }
    },
    minor: {
      default: { color: COLOR_GREY_300 }
    },
    link: {
      default: { color: COLOR_BLUE_600 }
    }
  },
  border: {
    divider: { fill: COLOR_GREY_200 },
    container: { fill: COLOR_GREY_200 }
  },
  shadow: {
    container: {
      type: 'drop-shadow',
      color: { r: 0, g: 0, b: 0, a: 0.12 },
      offset: { x: 0, y: 2 },
      blur: 12
    }
  },
  status: {
    green: { fill: COLOR_GREEN_600, color: COLOR_WHITE, preview: '🟢' },
    orange: { fill: COLOR_ORANGE_600, color: COLOR_WHITE, preview: '🟠' },
    red: { fill: COLOR_RED_600, color: COLOR_WHITE, preview: '🔴' },
    yellow: { fill: COLOR_YELLOW_600, color: COLOR_WHITE, preview: '🟡' },
    blue: { fill: COLOR_BLUE_600, color: COLOR_WHITE, preview: '🔵' },
    purple: { fill: COLOR_PURPLE_600, color: COLOR_WHITE, preview: '🟣' },
    brown: { fill: COLOR_BROWN_600, color: COLOR_WHITE, preview: '🟤' },
    black: { fill: COLOR_BLACK, color: COLOR_WHITE, preview: '⚫️' },
    grey: { fill: COLOR_GREY_400, color: COLOR_WHITE, preview: '⚪️' }
  },
  radius: {
    container: { cornerRadius: 8 },
    chip: { cornerRadius: 1000 }
  },
  layer: {
    default: { fill: COLOR_WHITE },
    active: { fill: COLOR_GREY_100 }
  },
  layout: {
    item: {
      title: { top: 24, bottom: 12, horizontal: 32 },
      action: { vertical: 12, horizontal: 32 }
    },
    chips: {
      small: { vertical: 8, horizontal: 16 },
      medium: { vertical: 12, horizontal: 24 },
      large: { vertical: 16, horizontal: 32 },
      extraLarge: { vertical: 24, horizontal: 48 },
      huge: { vertical: 32, horizontal: 64 }
    }
  }
}

export default tokens
