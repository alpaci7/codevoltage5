import React, { useEffect, useState } from 'react';
import "../styles/ImageSlider.css";

const ImageSlider = ({images}) => {
  // Array of imported images from a local folder


  const totalImages = images.length;
  const imagesToShow = 4; 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(true);



  // Move to the next set of images
  const goToNext = () => {
    setIsCounting(false);
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalImages ? 0 : prevIndex + 1
    );
  };

  // Move to the previous set of images
  const goToPrevious = () => {
    setIsCounting(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages : prevIndex - 1
    );
  };

  // Get the visible images based on the current index
  const visibleImages = images.slice(currentIndex, currentIndex + imagesToShow);

  // If the currentIndex is close to the end, wrap around to the start
  const displayImages =
    visibleImages.length < imagesToShow
      ? [...visibleImages, ...images.slice(0, imagesToShow - visibleImages.length)]
      : visibleImages;


    useEffect(()=>{
        const goToNext = () => {
            setCurrentIndex((prevIndex) =>
              prevIndex >= totalImages ? 0 : prevIndex + 1
            );
          };
        if(isCounting){
            goToNext();
            const timer = setTimeout(()=>{
                setCount((prevCount)=>prevCount + 1);
            },1000);
            return () => clearTimeout(timer);
        }
        else{
            setTimeout(()=>{
                setIsCounting(true)
            },5000)
        }
    },[count, totalImages, isCounting]);

  return (
    <div className="image-slider">
      {/* Button to go to the previous set of images */}
      <button onClick={goToPrevious} className="nav-button left">
        ⬅️
      </button>

      {/* Image container */}
      <div className="image-container">
        {displayImages.map((image, index) => (
          <div
            key={index}
            className="slide"
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      {/* Button to go to the next set of images */}
      <button onClick={goToNext} className="nav-button right">
        ➡️
      </button>
    </div>
  );
};

export default ImageSlider;
