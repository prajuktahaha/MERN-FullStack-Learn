require ('dotenv').config()
const express = require ('express')
//to express app
const app = express()

//middleware
app.use((req , res , next) => {
  console.log(req.path , req.method)
  next()
})
//routes
app.get('/' , (req , res) => {
  res.json({mssg: "Welcome to app prajukta"})
})
app.get('/hello' , (req , res) =>{
  res.json ({ mssg : "i hope u had a good day doing programming using"})
})
//listen for rquest
app.listen(process.env.PORT , ()=>{
  console.log("Hi can u plz listen to port 4000")
})

