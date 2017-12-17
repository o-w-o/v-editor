const { help: helpMessage } = require('./help')

module.exports = (opts, runnable) => {
  if (opts.help || opts.h) {
    return helpMessage
  }

  runnable(opts)
}
