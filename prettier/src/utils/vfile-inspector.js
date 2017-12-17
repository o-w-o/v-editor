const { VUE_EXT } = require('./vfile-splitter-regx')

module.exports = path => path.indexOf(VUE_EXT) > -1
