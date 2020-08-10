import React from "react";
import { Menu, Image, Container, Dropdown, Button, Icon } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {
  return (

    <Menu fixed="top" size='huge'>
      <Container>
      <Menu.Item>
          <Image src="/assetss/logo.png" size="small" as={NavLink} to='/' style={{opacity: '2'}}/>
        </Menu.Item>
<Menu.Item position='right'>
<Dropdown text='Produkty' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Categories</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='Clothing'>
            <Dropdown.Menu>
              <Dropdown.Header>Mens</Dropdown.Header>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Pants</Dropdown.Item>
              <Dropdown.Item>Jeans</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Womens</Dropdown.Header>
              <Dropdown.Item>Dresses</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Item>Bags</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>Home Goods</Dropdown.Item>
        <Dropdown.Item>Bedroom</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Order</Dropdown.Header>
        <Dropdown.Item>Status</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</Menu.Item>
<Menu.Item>
<Button basic className="ttt">GALERIA</Button>
</Menu.Item>
<Menu.Item>
<Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
</Menu.Item>

      </Container>
 
    </Menu>

  );
};
