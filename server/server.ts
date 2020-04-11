const express  = require('express');
const bodyParser = require('body-parser');
const app = express();

let { departments, employees } = require('./data.ts');

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/departments', (req, res) => {
  res.send(departments);
});

app.delete('/api/departments/:id', (req, res) => {
  const id = +req.params.id;
  departments = departments.filter((d) => d.id !== id);

  res.sendStatus(200);
});

app.post('/api/departments', (req, res) => {
  console.log(req.body);
  departments.push(req.body);
  res.sendStatus(200);
});

app.put('/api/departments/:id', (req, res) => {
  console.log(req.body);
  const id = +req.params.id;
  const ix = departments.findIndex((d) => d.id === id);

  if (ix > -1) {
    departments[ix].name = req.body.name;
    departments[ix].description = req.body.description;
  }

  res.sendStatus(200);
});

app.get('/api/departments/:id', (req, res) => {
  const id = +req.params.id;
  const ix = departments.findIndex((d) => d.id === id);

  if (ix > -1) {
    res.send(departments[ix]);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server is stared on port: ${port}`);
});
