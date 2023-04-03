import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import data from './data.json';
import { useParams } from 'react-router-dom';
import { Input } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';


function Form() {
  const { id } = useParams();
  const [osoby, setOsoby] = useState([]);
  const [osoba, setOsoba] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    jmeno: '',
    prijmeni: '',
    adresaID: null,
    studentID: null
  });

  useEffect(() => {
    setOsoby(data.osoby);
  }, [id]);

  useEffect(() => {
    setOsobaId(osoby);
  }, [osoby]);

  const setOsobaId = (array) => {
    const filteredOsoba = array.filter((o) => o.id == id);
    setOsoba(filteredOsoba);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:4000/updateosoba/${formData.id}`, formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(osoba[0]);
  return (
    
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="number" name="id" value={osoba[0].id} onChange={handleChange}></input>
      </label>
      <label>
        jmeno:
        <input type="text" name="jmeno" value={osoba[0].jmeno} onChange={handleChange} />
      </label>
      <label>
        prijmeni:
        <input type="text" name="prijmeni" value={osoba[0].prijmeni} onChange={handleChange} />
      </label>
      <label>
        adresaId:
        <input type="number" name="adresaId" value={osoba[0].adresaID} onChange={handleChange} />
      </label>
      <label>
        studentId:
        <input type="number" name="studentId" value={osoba[0].studentID} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
