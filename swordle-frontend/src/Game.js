import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function Cell(props) {
  return <div className='cell' key={props.value}></div>
}

function Row(props) {
  const [inactive, setActive] = useState("");
  var values = ['0', '1', '2', '3', '4', '5'];
  return (
    <>
      <div className='gridRow' key={props.rowId} id={props.rowId}>{values.map((value) => <Cell value={value}/>)}</div>
    </>
  )
}

function Grid() {
  var playerName = "Player 1";
  var rows = ['0', '1', '2', '3', '4', '5'];
  return (
    <> 
      {playerName}
      <div className='grid'>{rows.map((row) => <Row rowId={row}/>)}</div>
    </>
  )
}

function EnemyGrid() {
  var enemyName = "Player 2";
  var rows = ['0', '1', '2', '3', '4', '5'];
  return (
    <>
      {enemyName}
      <div className='enemyGrid'>{rows.map((row) => <Row rowId={row}/>)}</div>
    </>
  )
}

function Key(props) {
  return <div key={props.currentKey} onClick={() => props.populateCell(props.currentKey)}>{props.currentKey}</div>
}

function KeyBoard(props){
  const keys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '<-',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'
  ];

  return <div className ='keyBoard'>{keys.map((key) => <Key currentKey={key} populateCell={props.populateCell} />)}</div>
}

function Versus() {
  return <div className="vs">VERSUS<img src="swords.svg"/></div>
}

function Game() {
  var currentRow = 0;
  var currentCell = 0;

  const populateCell = (letter) => {
    var row = document.getElementById(currentRow.toString())
    row.childNodes[currentCell].innerHTML = letter;
    if (currentCell == 5){
      currentRow += 1;
      currentCell = 0;
    } else {
      currentCell += 1;
    }
  }

  const deleteCell = () => {
    console.log('go back');
  }

  return (
    <>
    <div className='playContainer'>
      <div className='player'>
        <Grid />
        <KeyBoard populateCell={populateCell} />
      </div>
      <Versus />
      <div className='player'>
        <EnemyGrid />
      </div>
    </div>
    </>
  );
}

export default Game;