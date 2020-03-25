import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({
    a: 'dasdasdf',
    b: 122
  })
})

app.listen(3333)
