const express = require('express');
const conn = require("./db");
const env = require('dotenv');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const adminRoutes = require('./Routes/Admin/auth')

const Faq = require('./Routes/FAQ')
const Course = require('./Routes/CourseRoute')
const Contact = require('./Routes/Contact')

conn.connectDB()


app.use(cors());
env.config();
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));


app.use('/api', Faq)
app.use('/api', Course)
app.use('/api', Contact)
app.use('/api', adminRoutes)


app.get("/", (req, res) => {
    res.status(200).json("Hello World")
})
app.get("/api/getkey", (req, res) => {
    res.status(200).json({ key: 'rzp_test_KtizL33tLNoct4' })
})
app.listen(process.env.PORT, () => {
    console.log(`server running successfully on port ${process.env.PORT}`);
})