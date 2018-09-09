import React from 'react';
import scoreboard from '../images/scoreboard.png'

const FarkleInstructions = () => (
    <div>
        <h3>How to Play Farkle:</h3>
        <ul>
            <li> Click to roll the dice. You will be playing against the computer. </li>
            <li> Use the scoreboard - notice how certain combinations result in a certain number of points. </li>
            <li> This game automatically updates the scoreboard each time you and the computer roll. </li>
            <li> First player to reach 10,000 points wins! </li>
        </ul>

        <img src={scoreboard} alt="scoreboard denoting how points are assigned"/>
    </div>
);

export default FarkleInstructions;