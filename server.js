const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hei, velkommen til min Node.js-hjemmeside!');
});

app.listen(port, () => {
  console.log(`Serveren kjører på http://localhost:${port}`);
});
