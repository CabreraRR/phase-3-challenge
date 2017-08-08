const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

daysOfWeek = { monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7 };

app.get('/api/days/:day', (req, res) => {
    let day = req.params.day;
    let num = daysOfWeek[day];
    if (num != undefined) {
        res.status(200).send('' + num);
    } else {
        res.status(400).send(day + ' is not a day of the week');
    }
});

app.post('/api/array/concat', (req, res) => {
    let arr = [];

    const vals = Object.keys(req.body).map(key => req.body[key]);
console.log(vals)
    for (let i = 0; i < vals.length; i++) {
    	arr.push(vals)
    }
    res.status(200).send(arr)
})

app.listen(3000, () => {
    console.log('app is currently running on localhost:3000');
});