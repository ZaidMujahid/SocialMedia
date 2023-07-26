const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/usersRoute")
const authRoute = require("./routes/authRoute")
const postRoute = require("./routes/postRoute")
dotenv.config()

//middleware
app.use(express.json())
app.use("/users", userRoute)
app.use("/auth", authRoute)
app.use("/posts", postRoute)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log("Backend server up and running");
    })
})
.catch((error)=>{
    console.log(error);
})
app.get('/', (req, res)=>{
    res.send("Welcome to homepage")
})