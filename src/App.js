import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

import '@fontsource/heebo/400.css';
import '@fontsource/heebo/500.css';
import '@fontsource/heebo/700.css';
import '@fontsource/work-sans/600.css';
import customizedTheme from 'theme/theme';

import Home from 'pages/Home';
import Events from 'pages/event/Events';
import Event from 'pages/event/Event';
import News from 'pages/News';
import Members from 'pages/Members';
import PageNotImplemented from 'pages/PageNotImplemented';
import NotFound from 'pages/NotFound';

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

function App() {
  return (
    <Router>
      <Switch>
        <ChakraProvider theme={customizedTheme}>
          <Global styles={GlobalStyles} />
          <Route path="/" component={Home} exact />

          <Route path="/about-ieee" component={PageNotImplemented} exact />
          <Route
            path="/about-ku-student-branch"
            component={PageNotImplemented}
            exact
          />

          <Route path="/events" component={Events} exact />
          <Route path="/events/:id" component={Event} exact />
          <Route path="/news" component={News} exact />

          <Route path="/members" component={Members} exact />
          <Route path="/member-benefits" component={PageNotImplemented} exact />

          <Route path="/contact" component={PageNotImplemented} exact />

          <Route component={NotFound} />
        </ChakraProvider>
      </Switch>
    </Router>
  );
}

export default App;
