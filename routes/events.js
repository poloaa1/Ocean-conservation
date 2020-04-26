const router = require("express").Router();
let Event = require("../models/events.model.js");

router.route("/").get((req, res)=>{
    Event.find()
    .then(Event=> res.json(Event))
    .catch(err=> res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res)=>{
    console.log(req.body);
    const title = req.body.title;
    const description = req.body.description;
    const date = req.body.date;
    console.log("im here",date)
    const newEvent = new Event({
        title, description, date});

newEvent.save()
.then(()=> res.json("event added!"))
.catch(err=> res.status(400).json("Error:" + err));

});

module.exports = router;