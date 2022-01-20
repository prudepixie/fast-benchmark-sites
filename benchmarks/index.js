import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs'
const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const currentVersion = '1.6.2'

fs.readdir(__dirname, (err, files) => {
    files.forEach(file => {
        const scenariosPath = __dirname + `/${file}/scenarios`
        const isBenchmarkFile = fs.lstatSync(`${__dirname}/${file}`).isDirectory()
        if (isBenchmarkFile) {
            fs.readdir(scenariosPath, (err, scenarioFiles) => {
                scenarioFiles && scenarioFiles.forEach((scenarioFile) => {
                    const scenarioName = scenarioFile.substr(0, scenarioFile.lastIndexOf('.'))
                    const scenariocb = (req, res) => {
                        const version = req.query.releaseversion | currentVersion
                        res.render('index', { version, scenarioName, htmlPath: `${scenariosPath}/${scenarioName}` })
                    }
                    router.get(`/${file}/${scenarioName}`, scenariocb)
                })
            })
        }
    });
});
// add error handling for wrong manual input of path




export default router
