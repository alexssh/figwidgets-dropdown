const esbuild = require('esbuild')
const copyStaticFiles = require('esbuild-copy-static-files')
const fs = require('fs')
const path = require('path')

const appendUIStyles = (options) => ({
  name: 'append-ui-styles',
  setup(build) {
    build.onEnd(() =>
      fs.readFile('src/ui/ui.css', 'utf8', (err, css) => {
        if (err) throw err

        fs.readdir(options.src, (err, files) => {
          if (err) throw err
          const htmlFiles = files.filter((el) => path.extname(el) === '.html')

          htmlFiles.forEach((html) => {
            fs.appendFile(`${options.src}/${html}`, `\n\n<style>\n${css}\n</style>`, (err) => {
              if (err) throw err
            })
          })

          console.log('Build - Done', `${process.hrtime()[1] / 100000000}ms`)
        })
      })
    )
  }
})

esbuild
  .build({
    entryPoints: [`src/Widget.tsx`],
    assetNames: 'assets/[name]',
    bundle: true,
    minify: true,
    watch: process.env.npm_lifecycle_event ? true : false,
    outfile: `dist/widget.js`,
    plugins: [
      copyStaticFiles({
        src: `src/ui`,
        dest: `dist/`,
        dereference: true,
        errorOnExist: false,
        preserveTimestamps: true,
        recursive: true
      }),
      appendUIStyles({
        src: `dist/`
      })
    ]
  })
  .catch(() => process.exit(1))
