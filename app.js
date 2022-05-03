const express = require('express')

const app = express()

const PORT = 3034

app.use(express.static(`${__dirname}/dist`))
function serveIndev(req, res) {
  res.redirect('/')
}

app.get('*', serveIndev)
app.listen(PORT, () => {
  console.log(`Running on  http://localhost:${PORT}`)
})
