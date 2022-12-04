const express = require("express");
const app = express()
const mongoose= require("mongoose")


const DB_CONNECT = require("./db/configDB")
const userRoutes = require("./model/User")

const User = require("./model/User")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(userRoutes)


mongoose.connect(DB_CONNECT)
.then( () => {
app.listen(3000, () => {
    console.log("Conectado com mongodb...")
    })
})
.catch( (err)=>{
    console.log(err)
})

//mongodb+srv://thiagovasconcelos:<password>@clusteraulapet.xcgpxj8.mongodb.net/?retryWrites=true&w=majority