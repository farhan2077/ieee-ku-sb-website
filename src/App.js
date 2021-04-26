import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import '@fontsource/heebo/400.css';
import '@fontsource/heebo/500.css';
import '@fontsource/heebo/700.css';
import customizedTheme from 'theme/theme';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Switch>
        <ChakraProvider theme={customizedTheme}>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
        </ChakraProvider>
      </Switch>
    </Router>
  );
}

export default App;
