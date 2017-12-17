const regexIndexOf = require('./regex-index-of')
const separateTags = require('./separate-tags')

module.exports = (str, startTag, endTag, type) => {
  const sub = str.substring(
    regexIndexOf(str, startTag),
    regexIndexOf(str, endTag, true)
  )
  return { content: type === 'template' ? sub : separateTags(sub) }
}
