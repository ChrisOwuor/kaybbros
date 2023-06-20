


import React, { useState, useEffect } from "react";
import "./embla.css";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(images.length - 1);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      transitionToNextImage();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  });

  const transitionToNextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setPrevImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 400);
    }
  };

  const transitionToPrevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setPrevImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setNextImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsTransitioning(false);
      }, 1000);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__slide">
        <img
          className={`carousel__image ${
            isTransitioning ? "carousel__image--transition" : ""
          }`}
          src={images[prevImageIndex]}
          alt="Previous Slide"
        />
      </div>
      <div className="carousel__slide">
        <img
          className={`carousel__image ${
            isTransitioning ? "carousel__image--transition" : ""
          }`}
          src={images[currentImageIndex]}
          alt="Current Slide"
        />
      </div>
      <div className="carousel__slide">
        <img
          className={`carousel__image ${
            isTransitioning ? "carousel__image--transition" : ""
          }`}
          src={images[nextImageIndex]}
          alt="Next Slide"
        />
      </div>
      <div className=" carousel__text">
        
        <p>Long Live Kaybros</p>
      </div>
      <button
        className="carousel__button carousel__button--prev"
        onClick={transitionToPrevImage}
      >
      </button>
      <button
        className="carousel__button carousel__button--next"
        onClick={transitionToNextImage}
      >
        
      </button>
    </div>
  );
};

export default Carousel;
