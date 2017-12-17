const fs = require('fs')
const findit = require('findit')
const prettier = require('prettier')
const pretty = require('pretty')

const vfilePrettierUtils = require('./utils')

const {
  vfileInspector,
  vfileReader,
  vfileWriter,
  vfileCompontent,
  vfileSplitterRegx
} = vfilePrettierUtils(fs)

console.info(vfileCompontent)
class VfilePrettier {
  constructor(opts) {
    this.noisy = opts.noisy || false
    this.baseDir = opts.baseDir || process.cwd()
    this.configPath = opts.configPath || `${this.baseDir}/.pretierrc`
    this.rootDir = opts.rootDir || `${this.baseDir}/src`
    this.modified = {}
    this.prettierOpts = {}
    this.cssLang = opts.cssLang || 'css'

    prettier.resolveConfig(this.configPath).then(options => {
      this.prettierOpts = options

      if (opts._ && !!opts._.length) {
        const path = `${this.baseDir}/${opts._[0]}`

        if (!vfileInspector(path)) {
          return
        }

        this.prettifyVfile(path)
        this.write()
        return
      }

      this.searchVfiles()
    })
  }

  prettify(data, type) {
    const opt = { ...this.prettierOpts }

    if (type) {
      opt.parser = type
    }

    return prettier.format(data, opt).trim()
  }

  vfileHasBeenMotified(lang) {
    return lang.content !== lang.formatted
  }
  write() {
    const paths = Object.keys(this.modified)

    paths.forEach(path => {
      const m = this.modified[path]

      if (!m) return

      if (this.noisy) {
        console.log('Fixing: ', path)
      }

      let result = m.strFile

      if (
        m.template &&
        m.template.formatted &&
        this.vfileHasBeenMotified(m.template)
      ) {
        result = result.replace(m.template.content, m.template.formatted)
      }

      if (m.js && m.js.formatted && this.vfileHasBeenMotified(m.js)) {
        result = result.replace(m.js.content, m.js.formatted)
      }

      if (m.css && m.css.formatted && this.vfileHasBeenMotified(m.css)) {
        result = result.replace(m.css.content, m.css.formatted)
      }

      vfileWriter(m.path, result.trim())
    })
  }

  searchVfiles() {
    const finder = findit(this.rootDir)

    finder.on('file', filePath => {
      if (!vfileInspector(filePath)) {
        return
      }

      console.info('path -> %s', filePath)
      this.prettifyVfile(filePath)
    })

    finder.on('end', () => {
      this.write()
    })
  }

  prettifyVfile(path) {
    const strFile = vfileReader(path, 'utf8')
    const { template, css, js } = vfileCompontent(strFile)

    this.modified[path] = { template, js, css, path, strFile }

    // template
    if (template && template.content) {
      this.modified[path].template.formatted = pretty(template.content)
    }

    // js
    if (js && js.content) {
      this.modified[path].js.formatted = this.prettify(js.content)
    }

    // css
    if (css && css.content) {
      this.modified[path].css.formatted = this.prettify(css.content, 'css')
    }
  }
}

module.exports = VfilePrettier
