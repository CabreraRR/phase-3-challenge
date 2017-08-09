const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// middleware parses the data within the body of the request
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//ran when server is started

daysOfWeek = { monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7 };

//when the application has a get request that matches the URL pattern the function is run
app.get('/api/days/:day', (req, res) => {
    let day = req.params.day;
    let num = daysOfWeek[day];
    //if the variable num is not undefined the response will responding the status 200(OK) and sending num
    if (num != undefined) {
        res.status(200).send('' + num);
    } else {
        // if num is undefined, the server will respond with status 400(client error) and send the input with a string
        res.status(400).send(day + ' is not a day of the week');
    }
});

//When the application has a post request that matches the URL the function is run
app.post('/api/array/concat', (req, res) => {
    try {
        //get the keys from the request body. map the keys 
        const vals = Object.keys(req.body).map(key => JSON.parse(req.body[key]));
        //applies a function against an accumulator and each element in the array(left to right) 
        //concatinates the elements 
        let ret = vals.reduce(function(a, b) {
            a = a.concat(b);
            return a;
        }, []);
        //the server will respond with status code 200 and send the ret variable which is the concatinated array
        res.status(200).send({response:ret});
    } catch (e) {
        //if the input value is anything but a integer the try block will fail 
        // when the try block fails the server will send the status 400 and respond with an error message
        res.status(400).send('"error": "Input data should be of type Array."')
    }

})

app.listen(3000, () => {
    console.log('app is currently running on localhost:3000');
});