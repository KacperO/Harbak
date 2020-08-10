import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter
} from "react-router-dom";
import HomePage from './features/home/home';
import { NavBar } from './features/toolbar/NavBar';


const App: React.FC<RouteComponentProps> = ({location}) => {
  return (
  <Fragment>
    <NavBar/>
    <HomePage/>
  </Fragment>
  );
}

export default withRouter(App);
