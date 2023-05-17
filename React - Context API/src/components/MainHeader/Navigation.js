import React from 'react';
import { useContext } from 'react';
import Auth_Context from '../Auth-context/Auth-Context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const ctx=useContext(Auth_Context)
  console.log(ctx)
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLogged && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLogged && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLogged && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
