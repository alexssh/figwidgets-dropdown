/* Core */
const { widget } = figma
const { Rectangle } = widget

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function Divider() {
  return <Rectangle width="fill-parent" height={1} fill={tokens.border.divider.fill} />
}

export default Divider
