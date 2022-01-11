import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const template_compilation = (req, res) => {
    const version = req.query.releaseversion
    res.render(__dirname + '/scenarios/template-compilation', { version })
}


export { template_compilation }
