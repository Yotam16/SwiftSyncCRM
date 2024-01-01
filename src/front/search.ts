  import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/search', (req, res) => {
  const field = req.body.field;
  const value = req.body.value;

  console.log(`Performing search for ${field} with value ${value}`);

  // Add your search logic here

  res.send('Search performed successfully'); // Send a response to the client
});

app.post('/searchAll', (req, res) => {
  console.log('Showing all records');

  // Add logic to search all records

  res.send('All records shown successfully'); // Send a response to the client
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



