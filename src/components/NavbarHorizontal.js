import React from 'react';
import { Navbar, Container, Text, Group, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Flex } from '@mantine/core';

function NavbarHorizontal() {

  return (
    <Flex
      mih={50}
      bg="#E9ECEF"
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Button color="indigo" radius="md" size="md">
        <Link to="/" style={{"text-decoration": "none"}}>
            <Text color='white'>Domů</Text>
          </Link>
      </Button>
      <Button color="indigo" radius="md" size="md">
      <Link to="/createosoba" style={{"text-decoration": "none"}}>
                <Text  color='white'>Vytvoř osobu</Text>
              </Link>
      </Button>
      <Button color="indigo" radius="md" size="md" >
              <Link to="/updateosoba" style={{"text-decoration": "none"}}>
                <Text  color='white'>Contact</Text>
              </Link>
      </Button>
    </Flex>
  )
};
  

export default NavbarHorizontal;
