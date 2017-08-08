const express = require('express');
const app = express();

daysOfWeek = { monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7 };



app.get('/api/days/:day', (req, res) => {
    let day = req.params.day;
    let num = daysOfWeek[day];
    if (num != undefined) {
    	console.log(num)
        res.status(200).send('' + num);
    } else {
    	res.status(400).send(day + ' is not a day of the week');
    }
});

app.listen(3000, () => {
    console.log('app is currently running on localhost:3000');
});