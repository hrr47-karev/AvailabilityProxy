const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());

app.use('/hostels/:hostel_id', express.static(path.join(__dirname, '../public')));

app.listen(5000);

















