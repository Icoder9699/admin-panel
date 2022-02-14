const express = require('express');
const app = express();

// * главный роутер

app.get('/', (req, res) => {
   res.send('Hello World!')
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
   console.log('server is running on port:', PORT);
});