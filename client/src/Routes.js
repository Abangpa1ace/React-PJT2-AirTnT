import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './Styles/reset';
import theme from './Styles/theme';
import CoronaNotice from './Pages/Home/CoronaNotice';
import Navbar from './GlobalComponents/Navbar/Navbar';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Detail from './Pages/Detail/Detail';
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
