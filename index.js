const express=require("express")
const app=express();

app.get("/", (req, res)=>{
    res.send({
        1:"ashish",
    })
})

app.listen(3000, (req, res)=>{
    console.log("app is running on port 3000.")
})