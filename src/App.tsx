import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import s from './App.module.css';
import { Profile } from './components/Profile/Profile';
import { Intro } from './components/Intro/Intro';
import { NavBar } from './components/NavBar/NavBar';

export const PATH = {
  PROFILE: "/profile",
}

const App = () => {
  return (
    <div className={s.app}>
      <NavBar />
      <HashRouter>
        <Switch>
          <Route exact path={'/'}
            render={() => <Intro />} />
          <Route path={PATH.PROFILE}
            render={() => <Profile />} />
        </Switch>
      </HashRouter>


    </div>
  );
}

export default App;
