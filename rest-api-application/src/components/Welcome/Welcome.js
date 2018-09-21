import React, { Component } from 'react';


class Welcome extends Component {
  render() {
    return (
      <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
        <div className="cell">
          <h3>Project Description</h3>
          <a href='/login' className='button'>Login</a>
          <a href='/signup' className='button success'>SignUp</a>

        </div>

      </div>
    );
  }
}

export default Welcome;
