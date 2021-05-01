import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import '@fontsource/heebo/400.css';
import '@fontsource/heebo/500.css';
import '@fontsource/heebo/700.css';
import '@fontsource/work-sans/600.css';
import customizedTheme from 'theme/theme';

import Home from 'pages/Home';
import About from 'pages/About';
import Events from 'pages/Events';
import News from 'pages/News';

function App() {
  return (
    <Router>
      <Switch>
        <ChakraProvider theme={customizedTheme}>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/events" component={Events} exact />
          <Route path="/events/:id" />
          <Route path="/news" component={News} exact />
          <Route path="/news/:id" />
        </ChakraProvider>
      </Switch>
    </Router>
  );
}

export default App;
