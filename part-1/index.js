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
let ret = []
    const vals = Object.keys(req.body).map(key => req.body[key]);
    let ar = vals[0]
    ar.forEach(function(item) {
        ret.push(item.slice(1, -1));
    })
    let stuff = ret.join(', ').split(", ")
    console.log(stuff)
    res.status(200).send(stuff);
})

app.listen(3000, () => {
    console.log('app is currently running on localhost:3000');
});