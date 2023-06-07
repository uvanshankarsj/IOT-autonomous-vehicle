const express=require("express")
var app=express()
// const multer = require('multer');
const {spawn} = require('child_process');
const fetch = require('node-fetch');
var data;
app.set('view engine', 'ejs'); 
const bodyParser = require('body-parser')
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
var aas="";
let url = "https://gi7aakbbjk.execute-api.us-east-1.amazonaws.com/items/"
app.use(express.static("map"));

app.get("/", (req, res) => {
  aas="A.jpg";
  res.render("pages/dashboard");
});
 

app.post("/", async (req, res) => {
    const username = req.body.ppoint;
    const password = req.body.dpoint;
    var lit=await fetch("https://gi7aakbbjk.execute-api.us-east-1.amazonaws.com/items/%22"+username+password+"%22")
    data = await lit.json();
    console.log(data["route"]);
    ass=data["route"]
    res.redirect("/thanks")
});

app.get("/thanks", async (req, res) => {
  res.render('pages/test',{value: aas})
});


// var profilepicture = multer({
//   dest: 'images'
//   })

// app.post("/uvan",profilepicture.array('upload'),(res,req)=>{
//   res.send() multiple file
// })

// app.post("/uvan",profilepicture.single('upload'),(res,req)=>{
//   res.redirect("/thanks")
// })

app.get("/route",(req,res)=>{
  res.send(data["route"])
})

app.post("/get",(req,res)=>{
  console.log(req.body.admin)
})

app.post("/map",async (req,res)=>{
  aas=req.body.location
  aas=aas+".jpg"
  console.log(aas)
})

app.get("/testing",(req,res)=>{
  const python = spawn('python', ['iot.py']);
})

app.listen(4000)
