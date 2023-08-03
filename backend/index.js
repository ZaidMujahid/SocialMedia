const express = require("express")
const app = express()
const cors = require("cors");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/usersRoute")
const authRoute = require("./routes/authRoute")
const postRoute = require("./routes/postRoute")
dotenv.config()

// middleware
//this part was added in order to try to fix the cors error
// app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
//     );
//     res.setHeader(
//         'Access-Control-Allow-Methods',
//         'GET, POST, PUT, DELETE, PATCH, OPTIONS'
//     );
//     next();
// });
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))
app.use(express.json())
app.use("/users", userRoute)
app.use("/auth", authRoute)
app.use("/posts", postRoute)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log("Backend server up and running");
        console.log(process.env.FRONTEND_URL);
    })
})
.catch((error)=>{
    console.log(error);
})
app.get('/', (req, res)=>{
    res.send("Welcome to homepage")
})