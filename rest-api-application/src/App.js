import React, { Component } from 'react';
import Header from '././components/Header/Header'
import MobileHeader from '././components/MobileHeader/MobileHeader'
import Footer from '././components/Footer/Footer'
import Welcome from '././components/Welcome/Welcome'
import Routes from './Routes'
import './styles/foundation.min.css'
import './styles/custom.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      appName: 'Rest API '
    }
  }
  render() {
    return (
      <div>
        <div className="off-canvas-content" data-off-canvas-content>
          <MobileHeader header={this.state.appName}></MobileHeader>
          <Header header={this.state.appName}></Header>
          <article className="grid-container">
            <Routes />
            <hr />
            <Footer></Footer>
          </article>
        </div>
      </div>
    );
  }
}

export default App;
