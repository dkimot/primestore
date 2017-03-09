const express = require('express');

const app = express();
const PORT = (process.env.PROD) ? 80 : 3030;

app.use((req, res, next) => {
  console.log('Request received');
});
app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log('listening on %s', PORT);
});
