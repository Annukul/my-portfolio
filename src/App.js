import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Create from './pages/create/Create';
import ViewProject from './pages/projects/ViewProject';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/create" render={() => <Create />} />
        <Route path="/view/:id" render={() => <ViewProject />} />
      </div>
    </Router>
  )
}

export default App
