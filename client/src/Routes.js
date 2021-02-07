import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './Styles/reset';
import theme from './Styles/theme';
import CoronaNotice from './Components/Navbar/components/CoronaNotice';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Detail from './Pages/Detail/Detail';
import Footer from './Components/Footer/Footer';


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
