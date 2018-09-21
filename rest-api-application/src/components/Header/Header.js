import React, { Component } from 'react';

class Header extends Component {

  
  render() {
    return (
      <div>
        <div className="callout primary">
          <article className="grid-container">
            <div className="">
              <h1>{this.props.header} Application</h1>
            </div>
          </article>
        </div></div>
    );
  }
}

export default Header;
