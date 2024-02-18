declare global {
  type Tokens = {
    typo: {
      [t: string]: TextProps
    }
    txt: {
      [t: string]: {
        [variant: string]: TokenTxt
      }
    }
    border: {
      [t: string]: TokenBackground
    }
    shadow: {
      [t: string]: TokenShadow
    }
    status: {
      [t: string]: TokenBackground & TokenTxt & TokenPreview
    }
    radius: {
      [t: string]: TokenRadius
    }
    layer: {
      [t: string]: TokenBackground
    }
    layout: {
      [t: string]: { [variant: string]: TokenPadding }
    }
  }

  type TokenSize = number

  type TokenPreview = {
    preview: string
  }

  type TokenTxt = {
    color: HexCode | RGBA
  }

  type TokenBackground = {
    fill: HexCode | RGBA
  }

  type TokenBorder = {
    stroke: HexCode | RGBA
    strokeWidth: number
    strokeAlign: WidgetJSX.StrokeAlign
  }

  type TokenPadding = WidgetJSX.Padding

  type TokenRadius = {
    cornerRadius: number
  }

  type TokenShadow = {
    type: 'drop-shadow'
    color: RGBA
    offset: Vector
    blur: number
  }
}

export {}
