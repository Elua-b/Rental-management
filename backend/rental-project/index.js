const express =require("express")
const cors=require('cors')
const bodyParser= require("body-parser")
const  dotenv =require("dotenv")
const connection=require("./db")
const user = require("./Routes/users");
const auth = require("./Routes/auth");
const manage=require('./Routes/RentalRoute')
const app=express();
app.use(bodyParser.json())
app.use(cors())
app.use("/api/users", user);
app.use("/api/auth", auth);
app.use("/api/manage", manage);
dotenv.config()
const port=process.env.PORT || 5000;
connection()
app.listen(port,()=> console.log(`app is listening at ${port}`))