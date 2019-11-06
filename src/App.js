import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import About from './About';
import Others from './Others';
import Home from './Home';
import That from './That';

function App() {
  return (
    <div className="App">
      {/* Hello I'm alive */}
      {/* <Switch> */}
        <Route  path='/' component={Home} />
        <Route exact path='/others' component={Others} />
        <Route  path='/about' component={About} />
        <Route  path='/others/:otherId' component={That} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
