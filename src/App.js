import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

var shuffle = require('shuffle-array')

let score = 0
let highScore = 0
let text = "CLICK AN IMAGE TO BEGIN!"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score,
    clicked: [],
  };

  shuffleFriends = id => {
    text = "Keep clicking, but don't click the same one twice!"
    let currentClicked = this.state.clicked;
    if (this.state.clicked.indexOf(id) === -1) {
      currentClicked.push(id);
      score += 1;
      shuffle(friends);
    }
    else {
      score = 0;
      text = "YOU LOSE! Click an image to start over."
      currentClicked = []
    }
       
    if (score > highScore) {
      highScore = score
    }

    if (score === 10) {
      text = "CONGRATULATIONS, YOU WON! Click an image to start over.";
      currentClicked = [];
      score = 0;
    }

    this.setState({clicked: currentClicked}) 
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.friends);
    console.log(this.state.clicked);
    return (
      <Wrapper>
        <Title>
          <nav className="navbar navbar-light bg-light">
            <h1 id="unique">{text}</h1>
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
