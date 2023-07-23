require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const infoRoutes = require('./routes/infoRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const User = require('./models/user');
const ModReview = require('./models/modReview');
const cors = require('cors');

// express app
const app = express();

const corsOptions = {
    origin:'https://iridescent-cactus-6a0f4d.netlify.app/'
};

//connect to mongodb
const dbURI = "mongodb+srv://plswork:QG7FAErooggHlbOF@orbital.tnuqfkm.mongodb.net/techbros?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then((result) => app.listen(process.env.PORT))
    .catch((err) => console.log(err));


//middleware & static files
app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//view engines
app.set('view engine', 'ejs');


//Success login, to be individualised
app.get('/success-login', (req, res) => {
    res.render('success');
});

//mannually add user
app.get('/add-user', (req, res) => {
    const user = new User({
        email: "e0123456@u.nus.edu",
        password: "12345678",
        name: "Andrew Nguyen",
        semester: "Y4S1",
        currentModules: ["DSA3101", "CS3244", "HSI1000", "GEA1000"]
    });

    user.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/add-review', (req, res) => {
    const review = new ModReview({
        module: "HSS1000",
        grade: "C+",
        yearTaken: "Y1S2",
        description: "5 tutorials in total. There are no exams but just CAs which are reflection essays.",
        review: "I did not learn anything from this module. I reflective essays weightage was 20% but you can only get 10% OR 20%.",
        user: "64969e0e225c0c009dc934eb"
    });

    review.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

//routes
app.use('/api/auth', authRoutes);
app.use('/api/info', infoRoutes);
app.use('/api/review', reviewRoutes);

