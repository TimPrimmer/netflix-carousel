import React from 'react';
import Card from '../Card';

function Cardholder(props) {

  function testMove(event) {
    console.log(event);
    console.log(event.target.previousElementSibling);
    console.log(event.target.parentNode.parentNode);
    console.log(event.target.parentNode.parentNode.scrollLeft);
    console.log(event.target.parentNode.parentNode.scrollLeftMax);
    console.log(event.target.clientWidth);
    console.log(event.target.parentNode.parentNode.scrollLeft - window.innerWidth);
    event.target.parentNode.parentNode.scrollLeft += window.innerWidth;
  }

  function moveLeft(event) {
    event.target.parentNode.parentNode.scrollLeft -= window.innerWidth;
  }

  function moveRight(event) {
    event.target.parentNode.parentNode.scrollLeft += window.innerWidth;
  }

  return (
    <div className="card-holder">
      <div className="left-arrow"><button onClick={moveLeft}>LEFT</button></div>
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
      <div className="right-arrow"><button onClick={moveRight}>RIGHT</button></div>
    </div>
  );
}

export default Cardholder;

