Figma + FigJam widget development environment with UI components and utils.

Demo: [Dropdown](https://www.figma.com/community/)

---

## Development

1. Clone the repo and install NPM dependencies.
2. Open Figma desktop app and create a new file.
3. Open `Menu → Widgets → Development → Import widget from manifest` and select `manifest.json` in the `~/dist` folder.
4. Open your code editor and run `$ npm run watch`

### Scripts

- `$ npm run build`
- `$ npm run watch`

### Publication

1. Run `$ npm run build`
2. Publish the `~/dist/<WidgetName>` folder in Figma 
