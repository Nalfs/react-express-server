const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

//string GET route
app.get('/api/express_backend', (req, res) => {
  res.send({ express: 'THIS IS A STRING FROM EXPRESS-YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

//api endpoint
app.get('/api/getList', (req,res) => {
  let list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});