let express = require("express");
let cors=require("cors");
let body=require("body-parser");
let {router} = require("./Routes/HandleRouter")

let app = express();
app.use(cors());
app.use(body.urlencoded());
app.use(body.json());
app.use(router)
app.listen(3001,()=>{
    console.log("server staring 3001 in port");
})