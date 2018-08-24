import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Home from './components/Home';
import Note from './components/Note';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<HashRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/notes/:id" component={Note} />
  </Switch>
</HashRouter>
, document.getElementById('root'));
registerServiceWorker();
