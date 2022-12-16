const express = require("express");

const app = express();


app.get("/", function(req, res) {
    res.send("<h1>hello, world!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: nozomi@gmail.com");
})

app.get("/about", function(req, res) {
    res.send("My name is Nozomi and I love dogs");
})


app.listen(3000, function() {
    console.log("server started on port 3000");
});