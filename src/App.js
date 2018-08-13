import React, { Component } from 'react';
import './styles/App.css';
import Top from './components/Top';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Burger from './components/Burger'

class App extends Component {
  render() {
    return(
      <div>
        <Burger pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Top/>
        <div className="main-container">
          <div className="nav">
            <Header/>
          </div>
          <div className="content">
            <Main/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
