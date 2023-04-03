import React, { useState, useEffect } from 'react';
import { Button, Table, Space, Text } from '@mantine/core';
import data from './data.json';
import { Link } from 'react-router-dom';

function TableOsoba() {
  const [osoby, setOsoby] = useState([]);

  useEffect(() => {
    setOsoby(data.osoby);
  }, []);

  const rows = osoby.map((element) => (
    <tr key={element.id}>
      <td style={{ textAlign: 'center' }}>{element.id}</td>
      <td style={{ textAlign: 'center' }}>{element.jmeno}</td>
      <td style={{ textAlign: 'center' }}>{element.prijmeni}</td>
      <td style={{ textAlign: 'center' }}>{element.adresaID}</td>
      <td style={{ textAlign: 'center' }}>{element.studentID}</td>
      <td>
        <div style={{ display: 'flex', justifyContent: "center"}}>
          <Button color="lime" radius="md" size="md">
              <Link to={`/updateosoba/${element.id}`} style={{"text-decoration": "none"}}>
                <Text color='white'>Edit</Text>
              </Link>
          </Button>
          <Space w="xs" />
          <Button color="red" radius="md" size="md">Delete</Button>
        </div>
      </td>
    </tr>
  ));

  return (
    <Table horizontalSpacing="lg" verticalSpacing="sm" fontSize="md">
      <thead>
        <tr>
          <th style={{ textAlign: 'center' }}>ID</th>
          <th style={{ textAlign: 'center' }}>Jméno</th>
          <th style={{ textAlign: 'center' }}>Přijmení</th>
          <th style={{ textAlign: 'center' }}>Adresa ID</th>
          <th style={{ textAlign: 'center' }}>Student ID</th>
          <th style={{ textAlign: 'center' }}>Funkce</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}

export default TableOsoba;
