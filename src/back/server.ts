import express, { Express } from 'express';


import * as http from 'http';
import * as qs from 'querystring';
import path from 'path';
import * as fs from 'fs';

const app = express();
const server = http.createServer(app);
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'data')));


app.get('/searchAll', (req, res) => {
    const filePath = path.join(__dirname, '..', '..', 'data', 'userlist.json');

  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading userlist.json');
      }
        const customers = JSON.parse(data);
        res.json(customers);
    });
  });



app.post('/', (req, res) => {
  const formData: { [key: string]: string } = req.body;
  console.log('Form Data:', formData);
  res.send('Received form data!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
