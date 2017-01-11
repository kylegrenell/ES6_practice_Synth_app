import React from 'react';

class Korg extends React.Component {
  render(){
    return(
      <div>
        <h2> Korg Synths </h2>
        <p> MiniKorg 700 </p><img src="http://www.synthfind.com/wp-content/uploads/2010/08/minikorg700.jpg" width="50%"/>
        <br />
        <p>Listen to Puremagnetik's digital version</p>
        <br />
        <iframe width="50%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/37882801&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
      </div>
    )
  }
}

export default Korg;
