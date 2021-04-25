import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Switch>
        <ChakraProvider theme={theme}>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
        </ChakraProvider>
      </Switch>
    </Router>
  );
}

export default App;
