const express = require('express');
const cors = require('cors');
const app = express(); 
const PORT = 8000;
const DB_NAME = "examDB"

//----MIDDLEWARE-----
app.use(express.json(), express.urlencoded({extended:true}));
app.use(cors());

const exportedDBFunction = require("./config/mongoose.config")
exportedDBFunction(DB_NAME);

//import the routes here
const routesFunction = require("./routers/Car.routes") 
routesFunction(app);                            

//START THE SERVER ALWAYS AT THE BOTTOM

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}!!!!`))