import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './Styles/reset';
import theme from './Styles/theme';
import CoronaNotice from './Components/Global/CoronaNotice';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Footer from './Components/Footer/Footer';
import SignModal from './Components/SignModal/SignModal';
import { useGlobalContext } from './Context';


function Routes() {
  const { signModalMode, setSignModalMode } = useGlobalContext();

  return (
    <Router id="Routes">
      <ThemeProvider theme={theme}>
      <GlobalReset />
        <CoronaNotice />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={List} />
        </Switch>
        <Footer />
        {!!signModalMode && <SignModal />}
      </ThemeProvider>
    </Router>
  );
}

export default Routes;
