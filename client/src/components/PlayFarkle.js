import React from 'react'

import diceOne from '../images/playerDice/diceOne.png'
import diceTwo from '../images/playerDice/diceTwo.png'
import diceThree from '../images/playerDice/diceThree.png'
import diceFour from '../images/playerDice/diceFour.png'
import diceFive from '../images/playerDice/diceFive.png'
import diceSix from '../images/playerDice/diceSix.png'

import compDiceOne from '../images/computerDice/compDiceOne.png'
import compDiceTwo from '../images/computerDice/compDiceTwo.png'
import compDiceThree from '../images/computerDice/compDiceThree.png'
import compDiceFour from '../images/computerDice/compDiceFour.png'
import compDiceFive from '../images/computerDice/compDiceFive.png'
import compDiceSix from '../images/computerDice/compDiceSix.png'

class PlayFarkle extends React.Component {
  constructor(props) {
    super(props);
    this.handleRoll = this.handleRoll.bind(this);
    this.state = {
      playersResults: 0,
      compsResults: 0,
      compScore: 0,
      playerScore: 0
    }
  }

  handleRoll() {
    let playersDice = [1, 2, 3, 4, 5, 6];
    let playersResults = [];
    let playerScoreboard = [];
    let playerScoreSum = 0;
    let compsDice = [1, 2, 3, 4, 5, 6];
    let compsResults = [];
    let compScoreboard = [];
    let compScoreSum = 0;
    
    const playerDiceOneResults = playersDice[Math.floor(Math.random() * playersDice.length)];
    const playerDiceTwoResults = playersDice[Math.floor(Math.random() * playersDice.length)];
    const playerDiceThreeResults = playersDice[Math.floor(Math.random() * playersDice.length)];
    const playerDiceFourResults = playersDice[Math.floor(Math.random() * playersDice.length)];
    const playerDiceFiveResults = playersDice[Math.floor(Math.random() * playersDice.length)];
    const playerDiceSixResults = playersDice[Math.floor(Math.random() * playersDice.length)];

    const compDiceOneResults = compsDice[Math.floor(Math.random() * compsDice.length)];
    const compDiceTwoResults = compsDice[Math.floor(Math.random() * compsDice.length)];
    const compDiceThreeResults = compsDice[Math.floor(Math.random() * compsDice.length)];
    const compDiceFourResults = compsDice[Math.floor(Math.random() * compsDice.length)];
    const compDiceFiveResults = compsDice[Math.floor(Math.random() * compsDice.length)];
    const compDiceSixResults = compsDice[Math.floor(Math.random() * compsDice.length)];

    playersResults.push(playerDiceOneResults, playerDiceTwoResults, playerDiceThreeResults, playerDiceFourResults, playerDiceFiveResults, playerDiceSixResults);
    compsResults.push(compDiceOneResults, compDiceTwoResults, compDiceThreeResults, compDiceFourResults, compDiceFiveResults, compDiceSixResults);


      playersResults.sort().forEach(function(dice) {
        let index = playersResults.indexOf(dice);

        if (dice === 1 && dice === playersResults[index + 1] && dice === playersResults[index + 2]) {
          playerScoreboard.push(33.33)
        } else if (dice === 2 && dice === playersResults[index + 1] && dice === playersResults[index + 2]) {
          playerScoreboard.push(66.667)
        } else if (dice === 3 && dice === playersResults[index + 1] && dice === playersResults[index + 2]) {
          playerScoreboard.push(100)
        } else if (dice === 4 && dice === playersResults[index + 1] && dice === playersResults[index + 2]) {
          playerScoreboard.push(133.33)
        } else if (dice === 5 && dice === playersResults[index + 1] && dice === playersResults[index + 2]) {
          playerScoreboard.push(166.667)
        } else if (dice === 6 && dice === playersResults[index + 1] && dice === playersResults[index + 2]) {
          playerScoreboard.push(200)
        }
      });

      for (var i = 0; i < playerScoreboard.length; i++) {
          playerScoreSum += Math.ceil(playerScoreboard[i]);
      }

      compsResults.sort().forEach(function(dice) {
        let index = compsResults.indexOf(dice);

        if (dice === 1 && dice === compsResults[index + 1] && dice === compsResults[index + 2]) {
          compScoreboard.push(33.333)
        } else if (dice === 2 && dice === compsResults[index + 1] && dice === compsResults[index + 2]) {
          compScoreboard.push(66.667)
        } else if (dice === 3 && dice === compsResults[index + 1] && dice === compsResults[index + 2]) {
          compScoreboard.push(100)
        } else if (dice === 4 && dice === compsResults[index + 1] && dice === compsResults[index + 2]) {
          compScoreboard.push(133.333)
        } else if (dice === 5 && dice === compsResults[index + 1] && dice === compsResults[index + 2]) {
          compScoreboard.push(166.667)
        } else if (dice === 6 && dice === compsResults[index + 1] && dice === compsResults[index + 2]) {
          compScoreboard.push(200)
        }

        for (var i = 0; i < compScoreboard.length; i++) {
            compScoreSum += Math.ceil(compScoreboard[i]);
        }

      });
    
    // console.log(`The user rolled: ${playersResults}`);
    // console.log(`The user's scoreboard is ${playerScoreboard}. As a result, they've scored: ${playerScoreSum}`);

    // console.log(`The computer rolled: ${compsResults}`);
    // console.log(`The computer's scoreboard is ${compScoreboard}. As a result, they've  scored: ${compScoreSum}`);


    this.setState((prevState) => {
      return {
        playersResults: playersResults.join("-"),
        compsResults: compsResults.join("-"),
        playerScore: prevState.playerScore += playerScoreSum, 
        compScore: prevState.compScore += compScoreSum
      };
    });
  }

  render() {
      return (
        <div>
          <h2>Welcome! Ready to Play Farkle? </h2>
          <h3>Computer's Dice</h3>
          <h4>Score: {this.state.compScore}</h4>

          <img src={compDiceOne} alt="dice of one"/>
          <img src={compDiceTwo} alt="dice of two"/>
          <img src={compDiceThree} alt="dice of three"/>
          <img src={compDiceFour} alt="dice of four"/>
          <img src={compDiceFive} alt="dice of five"/>
          <img src={compDiceSix} alt="dice of six"/>
          <br></br>
          <br></br> 
          <p>The computer rolled: {this.state.compsResults}</p>
          <br></br>
          <br></br> 


          <h3>Your dice:</h3>
          <h4>Score: {this.state.playerScore}</h4>
          <img src={diceOne} alt="dice of one"/>
          <img src={diceTwo} alt="dice of two"/>
          <img src={diceThree} alt="dice of three"/>
          <img src={diceFour} alt="dice of four"/>
          <img src={diceFive} alt="dice of five"/>
          <img src={diceSix} alt="dice of six"/>
          <br></br>
          <br></br>
          <p>You rolled: {this.state.playersResults}</p>
          <br></br>

          <button
            onClick={this.handleRoll}
          >
            Roll
          </button>
          <br></br>
          <br></br>
        </div>
      )
    }
  }

export default PlayFarkle;