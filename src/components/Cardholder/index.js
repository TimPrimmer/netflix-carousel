import React from 'react';
import Card from '../Card';

function Cardholder(props) {

  function testMove(event) {
    console.log(event);
    console.log(event.target.previousElementSibling);
  }

  return (
    <div className="card-holder">
      <div className="left-arrow"><p>LEFT</p></div>
      <div className="carousel" data-id={Math.floor(Math.random() * 1000)}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="right-arrow"><p>RIGHT</p></div>
      {/* <button onClick={testMove}>Click me</button> */}
    </div>
  );
}

export default Cardholder;

