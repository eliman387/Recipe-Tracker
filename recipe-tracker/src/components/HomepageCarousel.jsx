import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import chicken from '../caroimages/chick.png';
import fishtaco from '../caroimages/taco.png';
import cake from '../caroimages/cake.png';


function HomepageCarousel(props) {

  
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src={chicken}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Fried Chicken</h3>
      <p>Try It!! You wont regret your choice.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={fishtaco}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Baja Fish Tacos</h3>
      <p>Transports you to a tropical beach</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={cake}
      alt="delicious cake"
    />

    <Carousel.Caption>
      <h3>Southern Red Velvet Cake</h3>
      <p>It's always good to end on a <em>sweet</em> note</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default HomepageCarousel;