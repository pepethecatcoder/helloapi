const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const express = require('express');
const app = express();

app.get('/',  (request, response) => {
    response.json({ message: 'Hello there!' });
});

app.get('/welcome',  (request, response) => {
    response.json({ message: 'Welcome!' });
});

// Serve API
const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
