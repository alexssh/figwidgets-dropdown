/* Core */
const { widget } = figma
const { AutoLayout, Text } = widget

/* Components */
import Icon from 'src/components/Icon'

/* Utils */
import tokens from 'src/utils/tokens'

/* --- */

function ItemAction(props: IItemActionProps) {
  return (
    <AutoLayout
      name="ItemAction"
      padding={tokens.layout.item.action}
      width="fill-parent"
      direction="horizontal"
      verticalAlignItems="center"
      spacing={12}
      hoverStyle={{
        fill: tokens.layer.active.fill
      }}
      onClick={props.onClick}
    >
      {props.glyph && <Icon glyph={props.glyph} size={24} color={tokens.txt.primary.default.color} />}
      <Text
        name="ItemAction__content"
        width="hug-contents"
        horizontalAlignText="left"
        fill={tokens.txt.primary.default.color}
        {...tokens.typo.small}
        fontWeight={400}
      >
        {props.content}
      </Text>
    </AutoLayout>
  )
}

export default ItemAction
