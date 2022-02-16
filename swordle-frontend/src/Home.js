import React from 'react';

function Menu(props) {
    return (
        <>
            <div className='menu'><a href={props.option}> {props.option} </a></div>
        </>
    );
}

function Main() {
    const menus = ['Play Now', 'Create a Room', 'Join a Room', 'How to Play']
  return (
      <>
        <div className='home'>
            <img src="title.svg"/>
            {menus.map((menu) => <Menu option={menu} />)}
        </div>
    </>
  );
}

export default Main;