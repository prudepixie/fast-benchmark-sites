import express from 'express'
import router from './benchmarks/index.js'
const app = express();
const port = 8080;

app.set('views', './benchmarks')
app.set('view engine', 'ejs')
app.use('/', router)

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}!`)
});
