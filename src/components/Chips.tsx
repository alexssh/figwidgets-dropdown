/* Core */
const { widget } = figma
const { AutoLayout, Text } = widget

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function Chips(props: IChipsProps) {
  return (
    <AutoLayout
      name="Chips"
      cornerRadius={tokens.radius.chip.cornerRadius}
      padding={props.size.padding}
      width="fill-parent"
      horizontalAlignItems="center"
      verticalAlignItems="center"
      {...tokens.status[props.variant]}
    >
      <Text
        name="Chips__content"
        width="hug-contents"
        horizontalAlignText="center"
        fill={tokens.status[props.variant].color}
        {...props.size.typo}
        fontWeight={500}
      >
        {props.content}
      </Text>
    </AutoLayout>
  )
}

export default Chips
