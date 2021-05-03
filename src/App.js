import React from "react";
import PropTypes from "prop-types";

const foodIlike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://m.jnmall.kr/web/product/big/201904/609ee5a2a4bea63000745b65a63f064a.png",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Kimbab",
    image: "http://www.nongsaro.go.kr/ps/img/interabang/num207/headerImg.jpg",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Samgiopsal",
    image: "https://www.mycity24.com.au/mycityko/pad_img/71204_1.jpg",
    rating: 5,
  },
];

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodIlike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
