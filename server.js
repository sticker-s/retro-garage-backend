// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const allowedOrigins = [
    'https://retro-garage-frontend.onrender.com',
    'http://localhost:5173'
];
app.use(express.json());
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Blocked by CORS policy'));
        }
    }
}));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to DA mongo'))
    .catch((error) => console.error('DatabaseConenction Error: ', error));
const partRoutes = require('./routes/partRoutes');

app.use('/api/parts', partRoutes);

app.get('/', (req, res) => {
    res.json({ status: "Great Success", message: "Welcome to da Thaba" });
});

app.listen(3000, () => {
    console.log("Server is running da port 3000");
})