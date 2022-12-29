const express=require("express")
const fs=require("fs")

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8");
    const parse=JSON.parse(data)
    res.send(parse)
})
app.post("/",(req,res)=>{
    // to post data read file frist
    const data=fs.readFileSync("./db.json","utf-8");
    // parse the data that is already stryfied
    const parse=JSON.parse(data)
    // push the data in the array
     parse.Todo.push(req.body)

    //  till now data is not reflected
    
    // overwrite the data with updated  parse data with stringfy data
    fs.writeFileSync("./db.json",JSON.stringify(parse))
    res.send("data updated")
})
app.patch("/",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8");
    const parse=JSON.parse(data)
    const ide=req.body.id
    let l=parse.Todo.filter((e)=>e.id==ide)
    let {id,name}=l
    name=req.body
    console.log(name);
    fs.writeFileSync("./db.json",JSON.stringify(parse))
    res.send("data updated")
    res.send(parse)
})
app.delete("/",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8");
    const parse=JSON.parse(data)
    // console.log(req.body)
    const id=req.body.id
    //console.log(id);
    const l= parse.Todo.findIndex((e)=>e.id==id)
     parse.Todo.splice(l,1)

     fs.writeFileSync("./db.json",JSON.stringify(parse))
    res.send("data updated")
   
})

app.listen(8080,()=>{
    console.log("Listining at port 8080");
})