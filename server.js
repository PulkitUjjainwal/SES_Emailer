const express = require("express") 
const app = express() 
const PORT = 3000;
  
// Handling GET / request 
app.use("/", (req, res, next) => { 
    res.send("This is the express server") 
}) 
  
// Handling GET /hello request 
app.get("/hello", (req, res, next) => { 
    res.send("This is the hello response"); 
}) 

// Server setup 
app.listen(PORT, () => { 
    console.log(`Server is Running on port - ${PORT}`) 
}) 