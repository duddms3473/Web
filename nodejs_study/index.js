var cors = require('cors')
const express = require('express')
const app = express()
const port=3000

app.use(cors())

app.get('/', function (req, res) {
  res.send('<a href="https://github.com/duddms3473">깃허브로 이동!</a>')
})

app.get('/sound/:name', function (req, res) {
  const { name }=req.params
  console.log(name)

  if(name=="dog"){
    res.json({'sound':'멍멍'})
  }
  else if(name=="cat"){
    res.json({'sound':'야옹'})
  }
  else if(name=="cat"){
    res.json({'sound':'꿀꿀'})
  }
  else {
    res.json({'sound':'알 수 없음'})
  }

})

app.listen(port,()=>{
  console.log(`Im Listening... ${port}`)
})
