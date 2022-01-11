import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const index = function (req, res) {
    res.send('Fast element index')
}

const template_compilation_162 = function (req, res) {
    const root = __dirname + '/template-compilation'
    res.sendFile('1.6.2.html', { root })
}

const template_compilation_160 = function (req, res) {
    const root = __dirname + '/template-compilation'
    res.sendFile('1.6.0.html', { root })
}

const template_compilation_150 = function (req, res) {
    const root = __dirname + '/template-compilation'
    res.sendFile('1.5.0.html', { root })
}

const template_compilation_140 = function (req, res) {
    const root = __dirname + '/template-compilation'
    res.sendFile('1.4.0.html', { root })
}

const template_compilation_130 = function (req, res) {
    const root = __dirname + '/template-compilation'
    res.sendFile('1.3.0.html', { root })
}

export { index, template_compilation_162, template_compilation_160, template_compilation_150, template_compilation_140, template_compilation_130 }