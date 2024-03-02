import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { routesConfig } from '../../routes/routesConfig';

const Navbar: React.FC = () => {
  const navbarElements = routesConfig.filter((route) => !!route?.showInNavBar);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">ERP</Typography>
        <div style={{ marginLeft: 'auto' }}>
          {navbarElements.map((route) => (
            <Button key={route.path} component={Link} to={route.path} color="inherit">
              {route.path === '/' ? 'Home' : route.path.slice(1)}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
