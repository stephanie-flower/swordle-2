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
      <div className='gridRow' key={props.rowId}>{values.map((value) => <Cell value={value}/>)}</div>
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
  return <div key={props.currentKey}>{props.currentKey}</div>
}

function KeyBoard(){
  const keys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '<-',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'
  ];

  return <div className ='keyBoard'>{keys.map((key) => <Key currentKey={key}/>)}</div>
}

function Versus() {
  return <div className="vs">VERSUS<img src="swords.svg"/></div>
}

function Game() {
  return (
    <>
    <div className='playContainer'>
      <div className='player'>
        <Grid />
        <KeyBoard />
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