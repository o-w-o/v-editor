const split = require('./vfile-splitter')

const {
  TEMPLATE_START,
  TEMPLATE_END,
  STYLE_START,
  STYLE_END,
  SCRIPT_START,
  SCRIPT_END
} = require('./vfile-splitter-regx')

module.exports = str => {
  const template = split(str, TEMPLATE_START, TEMPLATE_END, 'template')
  const css = split(str, STYLE_START, STYLE_END, 'css')
  const js = split(str, SCRIPT_START, SCRIPT_END, 'js')

  return { template, css, js }
}
