
const express = require('express')
const app = express()
const port=3000

app.get('/', function (req, res) {
  res.send('<a href="https://github.com/duddms3473">깃허브로 이동!</a>')
})

app.get('/user/:id', function (req, res) {
  // const q=req.params
  // console.log(q.id)
  
  const q=req.query
  console.log(q)
  console.log(q.name)

  res.json({'userid':q.age})
})

app.get('/cat', function (req, res) {
  res.json({'sound':'멍멍'})
})

app.listen(port,()=>{
  console.log(`Im Listening... ${port}`)
})
