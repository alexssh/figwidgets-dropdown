declare global {
  export type DropdownEntry = {
    uuid: string
    position: number
    label: string
    variant: string
  }

  export type DropdownEntryPreset = {
    label: string
    entries: DropdownEntry[]
  }
}

export {}
