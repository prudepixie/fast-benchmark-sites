import express from 'express'
const app = express();
const port = 8080;
import router from "./api/routes.js"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', '/benchmarks')
app.set('view engine', 'ejs')
// app.use(express.static(__dirname + '/benchmarks'))
app.use('/', router)

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}!`)
});
