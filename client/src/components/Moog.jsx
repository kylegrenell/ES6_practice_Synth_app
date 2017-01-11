import React from 'react';

class Moog extends React.Component{
  
  render(){
    return(
      <div>
        <h2> Moog Synths</h2>
        <p>Moog Opus</p><img src="http://www.wavemeister.net/wp-content/uploads/2012/04/opus3.jpg" />
        <br />
        <p>Listen to Puremagnetik's digital version</p>
        <br />
        <iframe width="50%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/11027023&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
      </div>
    )
  }
  
}

export default Moog;

