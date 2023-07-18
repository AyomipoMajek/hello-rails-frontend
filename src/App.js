import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greetings from './components/Greeting';

function App() {
  return (
    <Router>
      <Route path="/" component={Greetings} />
    </Router>
  );
}

export default App;
