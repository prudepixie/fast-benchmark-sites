import express from "express"
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import fs from 'fs'

const scenariosPath = __dirname + '/scenarios'

fs.readdir(scenariosPath, (err, files) => {
    files.forEach(file => {
        const scenarioName = file.substr(0, file.lastIndexOf('.'))
        // console.log(scenarioName);

        const scenariocb = (req, res) => {
            const version = req.query.releaseversion
            res.render(scenariosPath + `/${scenarioName}`, { version, scenarioName })
        }

        router.get(`/fast-element/${scenarioName}`, scenariocb)


    });
});


// console.log('filename', __filename, __dirname, path.basename())
// const template_compilation = (req, res) => {
//     const version = req.query.releaseversion
//     res.render(__dirname + '/scenarios/template-compilation', { version })
// }


export default router

// export { template_compilation }
