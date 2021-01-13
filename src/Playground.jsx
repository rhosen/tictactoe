import React, { useState } from 'react';
import './Playground.css'


function Playground(props) {


    let moves = new Array(9).fill('');
    const cross = "&#10008;";
    const circle = "&#9711;";
    let lastMove = circle;
    
    function movePiece(event) {
        const move = lastMove === circle ? cross : circle; // change move
        event.target.innerHTML = move;
        lastMove = move; // reset move

        const index = event.target.id;
        move === cross ? moves[index] = 1 : moves[index] = 0;

        displayResult();
    }

    function displayResult() {

        let sum1 = moves[0] + moves[1] + moves[2];
        let sum2 = moves[0] + moves[3] + moves[6];
        let sum3 = moves[0] + moves[4] + moves[8];
        let sum4 = moves[1] + moves[4] + moves[7];
        let sum5 = moves[2] + moves[4] + moves[6];
        let sum6 = moves[2] + moves[5] + moves[8];
        let sum7 = moves[3] + moves[4] + moves[5];
        let sum8 = moves[6] + moves[7] + moves[8];

        if (sum1 === 0 || sum2 === 0 || sum3 === 0 || sum4 === 0 || sum5 === 0 || sum6 === 0 || sum7 === 0 || sum8 === 0) {
            alert(props.player2 + " Win!")
        } else if (sum1 === 3 || sum2 === 3 || sum3 === 3 || sum4 === 3 || sum5 === 3 || sum6 === 3 || sum7 === 3 || sum8 === 3) {
            alert(props.player1 + " Win!")
        }
    }

    return (
        <div className="ground">
            <h1>
                {props.player1} <span>&#10008;</span>
            </h1>
            <h1>
                {props.player2} <span>&#9711;</span>
            </h1>

            <div id="0" className="rec" onClick={movePiece}></div>
            <div id="1" className="rec" onClick={movePiece}></div>
            <div id="2" className="rec" onClick={movePiece}></div>
            <div id="3" className="rec" onClick={movePiece}></div>
            <div id="4" className="rec" onClick={movePiece}></div>
            <div id="5" className="rec" onClick={movePiece}></div>
            <div id="6" className="rec" onClick={movePiece}></div>
            <div id="7" className="rec" onClick={movePiece}></div>
            <div id="8" className="rec" onClick={movePiece}></div>
        </div>
    )
}

export default Playground;