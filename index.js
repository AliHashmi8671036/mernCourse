import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("Hello, World!");
})

app.get("/about", (req, res) => {
    res.send("We are on a about Page");
})

app.get("/contact", (req, res) => {
    res.send("We are on a contact page.");
})

app.listen(port, ()=> {
    console.log(`Server ${port} is successfully launched.`);
})
