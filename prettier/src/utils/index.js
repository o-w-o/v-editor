const vfileInspector = require('./vfile-inspector')
const vfileReader = require('./vfile-reader')
const vfileWriter = require('./vfile-writer')
const vfileSplitter = require('./vfile-splitter')
const vfileSplitterRegx = require('./vfile-splitter-regx')
const vfileCompontent = require('./vfile-compontent')

const separateTags = require('./separate-tags')
const regexIndexOf = require('./regex-index-of')

const utils = fs => ({
  vfileInspector,
  vfileSplitter,
  vfileSplitterRegx,
  vfileCompontent,
  vfileWriter: vfileWriter(fs),
  vfileReader: vfileReader(fs),
  regexIndexOf,
  separateTags
})

module.exports = utils
