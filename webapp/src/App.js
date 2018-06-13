import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './main/view/Header';
import Footer from './main/view/Footer';
import MainView from './main/view/MainView';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <MainView />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
