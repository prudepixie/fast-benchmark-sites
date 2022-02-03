import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';
const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const currentVersion = '1.6.2'
import mockData from "../public/data.js"

router.get('/:benchmark/:scenario/:type', (req, res) => {
    const { benchmark, scenario, type } = req.params
    const { prop, releaseversion, preload } = req.query
    const data = type.includes('data') && mockData
    const version = releaseversion || currentVersion
    const htmlPath = `${__dirname}/${benchmark}/scenarios/${scenario}/${type}/${prop}`

    res.render('index', { version, data, htmlPath, preload })
})


// add error handling for wrong manual input of path

export default router
