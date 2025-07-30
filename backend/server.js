const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
const connection_url = `mongodb+srv://dhakshana2103:HCCaFxN8CCILXf8A@cluster0.nwkft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(connection_url)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
