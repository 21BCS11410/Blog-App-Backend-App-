const express = require('express')
const app = express();

//connect to the database
const dbConnect = require('./Config/database');
dbConnect();

//start the server
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//add middleware
app.use(express.json());

const blog = require('./Routes/blog');
//mount
app.use("/api/v1", blog);

//starting the server
app.listen(PORT, () => {
    console.log(`server successfully started at port no. ${PORT}`);
});

app.get("/", (req, res) => {
    res.send(`<h1>This is a backend application</h1>`)
})
