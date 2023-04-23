declare global {
  interface IChipsProps {
    variant: string
    content: string
    size: {
      typo: TextProps
      padding: TokenPadding
    }
  }
}

export {}
