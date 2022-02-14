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
  var rows = ['0', '1', '2', '3', '4', '5'];
  return (
    <>
      <div className='grid'>{rows.map((row) => <Row rowId={row}/>)}</div>
    </>
  )
}

function EnemyGrid() {
  var rows = ['0', '1', '2', '3', '4', '5'];
  return (
    <>
      <div className='enemyGrid'>{rows.map((row) => <Row rowId={row}/>)}</div>
    </>
  )
}

function Key(props) {
  return <div className="key" key={props.key}>{props.key}</div>
}

function KeyBoard(){
  const keys = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm'
  ];

  return <div className ='keyBoard'>{keys.map((key) => <Key key={key}/>)}</div>
}

function Game(props) {
  return (
    <>
    <Grid />
    <KeyBoard />
    <div className="vs">VERSUS<img src="swords.svg"/></div>
    <EnemyGrid />
    </>
  );
}

export default Game;