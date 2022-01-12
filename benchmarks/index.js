import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs'
const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


fs.readdir(__dirname, (err, files) => {
    files.pop()
    files.forEach(benchmark => {
        const scenariosPath = __dirname + `/${benchmark}/scenarios`
        fs.readdir(scenariosPath, (err, scenarioFiles) => {
            if (scenarioFiles) {
                scenarioFiles.forEach((scenarioFile) => {
                    const scenarioName = scenarioFile.substr(0, scenarioFile.lastIndexOf('.'))
                    const scenariocb = (req, res) => {
                        const version = req.query.releaseversion
                        res.render(scenariosPath + `/${scenarioName}`, { version, scenarioName })
                    }
                    router.get(`/${benchmark}/${scenarioName}`, scenariocb)
                })
            }
        })
    });
});

export default router
