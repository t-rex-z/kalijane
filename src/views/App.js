import React, { Component } from 'react';
import { Route, BrowserRouter, Routes, HashRouter } from 'react-router-dom';
import  MainPage from './MainPage';
import MobilePage from './MobilePage';

  const isMobile = () => {
    // Check if the new API is supported
    if (navigator.userAgentData) {
      return navigator.userAgentData.mobile;
    }
    
    // Fallback for Safari/Firefox (see Solution 3)
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

class App extends Component {
  constructor(){
    super();

  }

  async lockToPortrait() {
    try {
      // Lock to all portrait modes (primary + secondary)
      await screen.orientation.lock('portrait'); 
      console.log('Orientation locked to portrait');
    } catch (err) {
      console.error('Failed to lock orientation:', err);
      // Fallback: Handle unsupported browsers or permission issues
    }
  }

  componentDidMount(){
    if(isMobile()){
      this.lockToPortrait();
    }
  }

  render(){
    const basePath = "";
    const onMobile = isMobile();
    console.log("IS MOBILE ?", onMobile);
    if(onMobile){
      
    }

    return (
        <HashRouter>
            <div id="app">
                <main id="main">
                <Routes>
                    <Route exact path={basePath + "/"} element={onMobile ? <MobilePage/> : <MainPage />} />
                </Routes>
                </main>
            </div>
        </HashRouter>
    )
  }
}

export default App;