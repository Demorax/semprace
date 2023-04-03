const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const data = require('./data.json');
const cors = require('cors');
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/addosoba', (req, res) => {
  const { jmeno, prijmeni, adresaID, studentID } = req.body;

  const id = data.osoby.length + 1;
  const newOsoba = { id, jmeno, prijmeni, adresaID, studentID };

  data.osoby.push(newOsoba);

  fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'Data created successfully' });
    }
  });
});

app.put('/updateosoba/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { jmeno, prijmeni, adresaId, studentId } = req.body;
    const osoba = data.osoby.find(os => os.id === id);
    
    if (osoba) {
      osoba.jmeno = jmeno;
      osoba.prijmeni = prijmeni;
      osoba.adresaID = adresaId;
      osoba.studentID = studentId;
      
      fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: 'Internal server error' });
        } else {
          res.status(200).json({ message: 'Data updated successfully' });
        }
      });
    } else {
      res.status(404).json({ message: 'Object not found' });
    }
});

app.listen(4000, () => {
  console.log('Epxress server is running');
});

