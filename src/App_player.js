import React, { Component } from "react";
import "./App.css";
import "video-react/dist/video-react.css"; // import css
import { Player, ControlBar, PlaybackRateMenuButton } from "video-react";

class App extends Component {
  componentDidMount() {
    this.player.playbackRate = 1;
    this.forceUpdate();
  }
  render() {
    return (
      <Player
        ref={(c) => {
          this.player = c;
        }}
        playsInline
      >
        <ControlBar>
          <PlaybackRateMenuButton order={7} rates={[2, 1.5, 1.0, 0.5]} />
        </ControlBar>
        <source
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          type="video/mp4"
        />
      </Player>
    );
  }
}

export default App;
