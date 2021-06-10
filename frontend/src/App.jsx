import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import TaskSite from './componentes/TaskSite';
import HeaderToDo from './componentes/Header';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1 className="titleTo">TO-DO List</h1>
        <HeaderToDo />
        <Switch>
          <Route path="/" exact component={TaskSite} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
