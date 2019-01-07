import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

var shuffle = require('shuffle-array')

let score = 0
let highScore = 0

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score,
  };

  shuffleFriends = id => {
    if (this.state.friends.clicked === 1) {
      alert("yo")
    }
    else {
      score += 1;
      const friends = this.state.friends;
      let clicked = this.friends.clicked;
      
      shuffle(friends);
      
      this.setState({ friends });
    }    
    if (score > highScore) {
      highScore = score
    }
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>
          <nav className="navbar navbar-light bg-light">
            <h1 id="unique">CLICK AN IMAGE TO BEGIN!</h1>
            <h1>Score: <span id="currentScore">{score}</span></h1>
            <h1>High Score: <span id="highScore">{highScore}</span></h1>
          </nav>
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriends={this.shuffleFriends}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
