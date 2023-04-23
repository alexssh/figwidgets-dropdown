/* Core */
const { widget } = figma
const { AutoLayout, Text } = widget

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function ItemTitle(props: IItemTitleProps) {
  return (
    <AutoLayout name="ItemTitle" padding={tokens.layout.item.title} width="fill-parent">
      <Text
        name="ItemTitle__content"
        width="hug-contents"
        horizontalAlignText="left"
        fill={tokens.txt.primary.default.color}
        {...tokens.typo.small}
        fontWeight={600}
      >
        {props.content}
      </Text>
    </AutoLayout>
  )
}

export default ItemTitle
