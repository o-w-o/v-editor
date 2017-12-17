const injectableReadFile = fs => {
  const vfileReader = path => {
    try {
      return fs.readFileSync(path, 'utf8')
    } catch (err) {
      console.log(err)
    }
  }

  return vfileReader
}

module.exports = injectableReadFile
