const express = require('express')
const app = express();
const port = 3000;
const routes = require('./routes')


app.use(express.static(__dirname + '/benchmarks'))
app.use('/', routes)

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`)
});
