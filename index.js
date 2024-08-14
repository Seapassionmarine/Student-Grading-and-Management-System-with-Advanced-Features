const express = require('express')
const cors = require(`cors`)
// const router = require('./router/')
require('./config/dbconfig')

const app = express()

app.use(express.json())
app.use(cors({origin:"*"}))
// app.use('/api/v1/user',router)
app.use("/api/v1/", router)
app.use("/api/v1/", studentrouter)


const PORT = process.env.PORT || 4499

app.listen(PORT,()=>{
    console.log(`Server connected successfully on port: ${PORT}`);
})
app.get("/", (req,res)=>{
    res.status(200).json({message:"Homepage"})
})   