const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/user.js');

// express app
const app = express();


//connect to mongodb
const dbURI = "mongodb+srv://plswork:Idk1234@orbital.tnuqfkm.mongodb.net/techbros?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Request handler for "/"
app.get('/', (req, res) => {
    res.sendFile('./public/login.html', {root: __dirname});
});

//Success login, to be individualised
app.get('/success-login', (req, res) => {
    res.sendFile('./public/success.html', {root: __dirname});
});

//mannually add user
app.get('/add-user', (req, res) => {
    const user = new User({
        username: "Techbros",
        email: "techbros@gmail.com",
        password: "12345678"
    });

    user.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.post('/', (req, res) => {
    const input = req.body;
    User.find({email: input.email, password: input.password})
        .exec()
        .then((wtv) => {
            res.json({result: wtv, redirect: '/success-login'})
            
        })
        .catch((err) => {
            console.log(err);
        });
});
