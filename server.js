import express from 'express'
const app = express();
const port = 8080;
import router from './benchmarks/index.js'

app.set('views', '/benchmarks')
app.set('view engine', 'ejs')
app.use('/', router)

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}!`)
});
