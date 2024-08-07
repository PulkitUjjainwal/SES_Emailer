const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const emailRoutes = require('./routes/emailRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', emailRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
