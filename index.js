const express = require('express');
//creating an instance of express
const app = express();

//load config from .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parese json request body
app.use(express.json());

//import routes for todo API
const todoRoutes = require("./routes/todos");
// mount the todo API routes
app.use("/api/v1", todoRoutes);

//start the server
app.listen(PORT, () => {
    console.log(`server started successfully at ${PORT}`);
});

//connect to the database
const dbConnect = require("./config/database"); 
dbConnect();

//default route
app.get("/", (req, res) => {
    res.send(`<h1> Radha Rani ki kripa se This is HOME page </h1>`)
})


