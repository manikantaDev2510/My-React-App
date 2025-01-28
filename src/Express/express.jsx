const http = require("http");
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
    let data=[{name:"Manikanta",city:"hyd"}]
  res.send(data);
});
app.post("/hii",(req,res)=>{
    const data=req.body
    console.log(JSON.stringify(data));
    res.send(data)
});
app.put("/update",(req,res)=>{
    console.log("req.body");
});
// app.delete();
// app.patch();

app.listen(3100,()=>{
    console.log("server is running");
})