const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    // res.send("Hello World");
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    // console.log(req.body)
    res.send("The result of the calculation is " + result);
})

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res) {
    // comes from name in input from html file
    // parseFloat decimal place
    var weight = parseFloat(req.body.weight); 
    var height = parseFloat(req.body.height);

    var bmi = weight/(height**2);

    res.send("Your BMI is " + bmi);
})

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});