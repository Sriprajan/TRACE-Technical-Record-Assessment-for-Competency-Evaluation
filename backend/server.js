const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'TRACE API is running successfully' });
});

app.listen(port, () => {
  console.log(`TRACE API is running on port ${port}`);
});
