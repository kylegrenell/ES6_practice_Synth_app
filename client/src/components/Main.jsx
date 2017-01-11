import React from 'react';
import Korg from './Korg.jsx';
import Home from './Home.jsx';
import Moog from './Moog.jsx';
import {Link} from 'react-router';

class Main extends React.Component {

  render(){
    return(
      <div>
        <h4>Synthy McSynths Synthorium</h4>

          <p id="link"><Link to='/home'>Return to base</Link></p>
          <p id="link"><Link to='/korg'>Korg</Link></p>
          <p id="link"><Link to='/moog'>Moog</Link></p>
        
        {this.props.children}
      </div>
      )
  }

}

export default Main;
