const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const session = require("express-session");


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(session({
    secret:"asdf",
    resave: false,
    saveUninitialized:true,
    cookie:{
        secure:false,
        maxAge: 60 * (60000) // 1 hour
    }
}));
if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}

//server conations
const config = require("./config");
//connect to db
mongoose.connect(config.dbUrl);
mongoose.connection.on("connected", ()=>{
    console.log("connection success");
});
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

//const connection = mongoose.Collection;
// connection.once("open",()=>{
//     console.log("mongodb connection succssesful");
// });
const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");
const userSession = require("./routes/login");
const eventAdd = require("./routes/events");

app.use("/events", eventsRouter);
app.use("/users", usersRouter);
app.use("/login", userSession);
app.use("/add", eventAdd);
app.listen(port, ()=>{
    console.log(`server runing on port: ${port}`);
});

