import React from 'react';

function Card(props) {

  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  randomColor = '#' + randomColor;
  return (
    <div className="card" style={{backgroundColor: randomColor}}><p>test</p></div>
  );
}

export default Card;

