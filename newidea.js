const express=require("express")
var app=express()
const fetch = require('node-fetch');
var data;
app.set('view engine', 'ejs'); 
var aas="A";
var start="A"
var url = "https://gi7aakbbjk.execute-api.us-east-1.amazonaws.com/items/%22"
const bodyParser = require('body-parser')
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
app.use(express.static('map'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dashboard.html");
  aas="A";
});
 

app.post("/", async (req, res) => {
    const password = req.body.dpoint;
    var lit=await fetch(url+start+password+"%22")
    data = await lit.json();
    console.log(data["route"]);
    ass=data["route"]
    res.redirect("/thanks")
});

app.get("/thanks", async (req, res) => {
  // console.log("sucessful")
  res.render('test',{value: aas})
  //console.log(lit)
});

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

app.listen(4000)
const express=require("express")
var app=express()
const fetch = require('node-fetch');
var data;
app.set('view engine', 'ejs'); 
var aas="";
let url = "https://gi7aakbbjk.execute-api.us-east-1.amazonaws.com/items/"
//var lit=fetch("https://gi7aakbbjk.execute-api.us-east-1.amazonaws.com/items/%22AD%22")
//console.log(lit)
const bodyParser = require('body-parser')
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
app.use(express.static('map'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dashboard.html");
  aas="A";
});
 

app.post("/", async (req, res) => {
    const password = req.body.dpoint;
    var lit=await fetch("https://gi7aakbbjk.execute-api.us-east-1.amazonaws.com/items/%22"+start+password+"%22")
    data = await lit.json();
    console.log(data["route"]);
    ass=data["route"]
    res.redirect("/thanks")
});

app.get("/thanks", async (req, res) => {
  // console.log("sucessful")
  res.render('test',{value: aas})
  //console.log(lit)
});

app.get("/route",(req,res)=>{
  res.send(data["route"])
})

app.post("/get",(req,res)=>{
  console.log(req.body.admin)
})

app.post("/map",async (req,res)=>{
  aas=req.body.location
  aas=aas+".jpg"
  start=ass
  console.log(aas)
})

app.listen(4000)
