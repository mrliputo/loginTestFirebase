const express = require('express');
const app = express();
const path = require('path');
const port = 4000;

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res) => {
  res.sendStatus(404);
});
