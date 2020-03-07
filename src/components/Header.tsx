import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { routes } from '../domain/route';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    }
  })
);

const createPageLink = (): JSX.Element[] => {
  return routes.map(route => (
    <Button key={route.name} color="inherit">
      <Link
        to={route.path}
        style={{
          color: 'white',
          textDecoration: 'none',
          textTransform: 'none'
        }}
      >
        {route.name}
      </Link>
    </Button>
  ));
};

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ marginBottom: '2%' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React Boilerplate
          </Typography>
          {createPageLink()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
