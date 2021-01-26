import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './styles/reset';
import theme from './styles/theme';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import List from  './pages/List/List';
import Footer from './components/Footer/Footer';

function Routes() {
  return (
    <Router id="Routes">
      <ThemeProvider theme={theme}>
      <GlobalReset />
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={List} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default Routes;
