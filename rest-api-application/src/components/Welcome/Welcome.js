import React, { Component } from 'react';


class Welcome extends Component {
  render() {
    return (
      <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
        <div className="cell">
          <h2>Project Description</h2>
          <a href='/login' class='button'>Login</a>
          <a href='/signup' class='button success'>SignUp</a>

        </div>

      </div>
    );
  }
}

export default Welcome;
