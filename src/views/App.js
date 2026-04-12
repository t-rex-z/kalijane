import React, { Component } from 'react';
import { Route, BrowserRouter, Routes, HashRouter } from 'react-router-dom';
import MainPage from './MainPage';

class App extends Component {
  constructor(){
    super();

    this.state = {
    };
  }

  render(){
    const basePath = "";

    return (
        <HashRouter>
            <div id="app">
                <main id="main">
                <Routes>
                    <Route exact path={basePath + "/"} element={<MainPage />} />
                </Routes>
                </main>
            </div>
        </HashRouter>
    )
  }
}

export default App;