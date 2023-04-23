/* Core */
const { widget } = figma
const {
  // Components
  AutoLayout,
  Frame,
  Text,
  Input,
  Rectangle,
  Image,
  SVG,
  Ellipse,
  Line,
  Fragment,

  // Hooks
  useSyncedState,
  useSyncedMap,
  usePropertyMenu,
  useEffect,
  useStickable,
  useStickableHost,
  useWidgetId,

  // Functions
  register,
  waitForTask
} = widget

import { EntryPresets } from './config'

/* Components */
import Chips from 'src/components/Chips'
import ItemTitle from 'src/components/ItemTitle'
import ItemAction from 'src/components/ItemAction'
import Divider from 'src/components/Divider'
import { glyphs } from 'src/components/Icon'

/* Utils */
import tokens from 'src/utils/tokens'
import uuid from 'src/utils/uuid'

/* --- */

function Widget() {
  const [data, setData] = useSyncedState('data', {
    isDropdown: false,
    size: 'medium'
  })

  const [currentEntry, setCurrentEntry] = useSyncedState('currentEntry', EntryPresets[0].entries[0].uuid)

  const entries = useSyncedMap('entries')

  usePropertyMenu(
    [
      ...(data.isDropdown
        ? ([
            {
              itemType: 'action',
              tooltip: 'Settings',
              propertyName: 'openSettings',
              icon: glyphs.settings(tokens.txt.minor.default.color as string)
            },

            {
              itemType: 'separator'
            },
            {
              itemType: 'dropdown',
              tooltip: 'Type of new entry',
              propertyName: 'currentEntry',
              options: entries
                .values()
                .sort((a, b) => a.position - b.position)
                .map((s) => ({ option: s.uuid, label: s.label })),
              selectedOption: currentEntry
            }
          ] as WidgetPropertyMenuItem[])
        : [])
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === 'openSettings') {
        return new Promise((resolve) => {
          openUI('settings', { data })
        })
      }
      if (propertyName === 'currentEntry') {
        setCurrentEntry(propertyValue as string)
      }
    }
  )

  useEffect(() => {
    figma.clientStorage.getAsync('isUIopen').then((isUIopen) => {
      if (isUIopen === undefined) {
        figma.clientStorage.setAsync('isUIopen', false)
      } else {
        if (isUIopen) {
          updateUI()
        }
      }
    })

    figma.on('close', () => {
      figma.clientStorage.setAsync('isUIopen', false)
    })

    figma.ui.onmessage = (message) => {
      if (message.action === 'size') {
        setSize(message.value)
      }

      if (message.action === 'color') {
        setColor(message.uuid, message.value)
      }

      if (message.action === 'delete') {
        deleteEntry(message.uuid)
      }

      if (message.action === 'label') {
        setLabel(message.uuid, message.value)
      }

      if (message.action === 'position') {
        setPosition(message.uuid, message.value)
      }

      if (message.action === 'add') {
        addEntry()
      }
    }
  })

  /* UI */

  const updateUI = () => {
    figma.ui.postMessage({ data, entries: entries.values().sort((a, b) => a.position - b.position), currentEntry })
  }

  const openUI = (view: string, options: any) => {
    if (view === 'settings') {
      return new Promise((resolve) => {
        figma.showUI(__uiFiles__.settings, { themeColors: true, title: 'Settings', width: 300, height: 513 })
        setData({ ...data })
        figma.clientStorage.setAsync('isUIopen', true)
      })
    }
  }

  /* General */

  const setPreset = (index: number) => {
    EntryPresets[index].entries.forEach((value, i, array) =>
      entries.set(value.uuid, { ...value, color: tokens.status[value.variant].fill })
    )
    setCurrentEntry(EntryPresets[index].entries[0].uuid)
    setData({
      ...data,
      isDropdown: true
    })
  }

  const setSize = (value: string) => {
    setData({
      ...data,
      size: value
    })
  }

  const setColor = (uuid: string, color: string) => {
    entries.set(uuid, {
      ...entries.get(uuid),
      variant: color,
      color: tokens.status[color].fill
    })
  }

  const deleteEntry = (uuid: string) => {
    entries.delete(uuid)
  }

  const addEntry = () => {
    const id = uuid()

    entries.set(id, {
      uuid: id,
      position: entries.values().length,
      label: 'Option',
      variant: 'grey',
      color: tokens.status['grey'].fill
    })
  }

  const setLabel = (uuid: string, label: string) => {
    entries.set(uuid, {
      ...entries.get(uuid),
      label
    })
  }

  const setPosition = (uuid: string, position: number) => {
    entries.set(uuid, {
      ...entries.get(uuid),
      position: position
    })
    sortPositions()
  }

  const sortPositions = () => {
    entries
      .values()
      .sort((a, b) => a.position - b.position)
      .forEach((_entry, i) => {
        entries.set(_entry.uuid, {
          ..._entry,
          position: i
        })
      })
  }

  /* Render */

  return (
    <AutoLayout
      name="Widget"
      verticalAlignItems="center"
      direction="vertical"
      spacing={0}
      padding={0}
      overflow="visible"
    >
      {data.isDropdown && (
        <Chips
          variant={entries.get(currentEntry).variant}
          content={entries.get(currentEntry).label.length ? entries.get(currentEntry).label : '...'}
          size={{
            typo: tokens.typo[data.size],
            padding: tokens.layout.chips[data.size]
          }}
        />
      )}
      {!data.isDropdown && (
        <AutoLayout
          name="Presets"
          verticalAlignItems="center"
          direction="vertical"
          spacing={0}
          padding={0}
          fill={tokens.layer.default.fill}
          cornerRadius={tokens.radius.container.cornerRadius}
          effect={tokens.shadow.container}
          width={280}
        >
          <ItemTitle content={'Presets'} />
          <AutoLayout
            key="Presets__list"
            name="Presets__list"
            verticalAlignItems="center"
            direction="vertical"
            spacing={0}
            width={'fill-parent'}
            padding={{ vertical: 8 }}
          >
            {EntryPresets.map((preset, i) =>
              i === 0 ? (
                <Fragment key={i}></Fragment>
              ) : (
                <ItemAction key={i} glyph={'dropdown'} content={preset.label} onClick={() => setPreset(i)} />
              )
            )}
          </AutoLayout>
          <Divider />
          <AutoLayout
            key="Presets__new"
            name="Presets__new"
            verticalAlignItems="center"
            direction="vertical"
            spacing={0}
            width={'fill-parent'}
            padding={{ vertical: 8 }}
          >
            <ItemAction content={EntryPresets[0].label} glyph={'plus'} onClick={() => setPreset(0)} />
          </AutoLayout>
        </AutoLayout>
      )}
    </AutoLayout>
  )
}

widget.register(Widget)
