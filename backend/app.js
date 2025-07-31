const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const internshipRoutes = require('./routes/internshipRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/contact', contactRoutes);

module.exports = app;
