
// const root = path.join(__dirname + '/template-compilation')


exports.index = function (req, res) {
    res.send('Fast element index')
}

exports.template_compilation = function (req, res) {
    const root = __dirname + '/template-compilation'
    res.sendFile('index.html', {root})
}