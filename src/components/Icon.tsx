/* Core */
const { widget } = figma
const { SVG } = widget

/* --- */

export const glyphs: IIconGlyph = {
  plus: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 11V16.5H10.5V11H16V10H10.5V4.5H9.5V10H4V11H9.5Z" fill="${color}"/></svg>`,
  settings: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H14V5.05001C15.1411 5.28164 16 6.29052 16 7.5C16 8.70948 15.1411 9.71836 14 9.94999V17H13V9.94999C11.8589 9.71836 11 8.70948 11 7.5C11 6.29052 11.8589 5.28164 13 5.05001V3ZM12 7.5C12 6.67157 12.6716 6 13.5 6C14.3284 6 15 6.67157 15 7.5C15 8.32843 14.3284 9 13.5 9C12.6716 9 12 8.32843 12 7.5ZM5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5C8 13.3284 7.32843 14 6.5 14C5.67157 14 5 13.3284 5 12.5ZM7 14.95C8.14112 14.7184 9 13.7095 9 12.5C9 11.2905 8.14112 10.2816 7 10.05V3H6V10.05C4.85888 10.2816 4 11.2905 4 12.5C4 13.7095 4.85888 14.7184 6 14.95V17H7V14.95Z" fill="${color}"/></svg>`,
  dropdown: (color) =>
    `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4H13C14.6569 4 16 5.34315 16 7V13C16 14.6569 14.6569 16 13 16H7C5.34315 16 4 14.6569 4 13V7C4 5.34315 5.34315 4 7 4ZM3 7C3 4.79086 4.79086 3 7 3H13C15.2091 3 17 4.79086 17 7V13C17 15.2091 15.2091 17 13 17H7C4.79086 17 3 15.2091 3 13V7ZM13 8.5L10 12.5L7 8.5H13Z" fill="${color}"/></svg>`
}

function Icon(props: ITconProps) {
  return (
    <SVG
      name="Icon"
      height={props.size ?? 20}
      width={props.size ?? 20}
      src={glyphs[props.glyph as string](props.color as string)}
    />
  )
}

export default Icon
