import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    jmeno: '',
    prijmeni: '',
    adresaID: null,
    studentID: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/addosoba', formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      jmeno:
        <input type="text" name="jmeno" value={formData.jmeno} onChange={handleChange} />
      </label>
      <label>
        prijmeni:
        <input type="text" name="prijmeni" value={formData.prijmeni} onChange={handleChange} />
      </label>
      <label>
      adresaID:
        <input type="number" name="adresaID" value={formData.adresaID} onChange={handleChange} />
      </label>
      <label>
        studentID:
        <input type="number" name="studentID" value={formData.studentID} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
