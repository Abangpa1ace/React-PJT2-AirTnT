import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './styles/reset';
import theme from './styles/theme';
import CoronaNotice from './pages/Home/components/CoronaNotice';
import Navbar from './GlobalComponents/Navbar/Navbar';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import Footer from './GlobalComponents/Footer/Footer';

function Routes() {
  return (
    <Router id="Routes">
      <ThemeProvider theme={theme}>
      <GlobalReset />
        <CoronaNotice />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/detail" component={Detail} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default Routes;
