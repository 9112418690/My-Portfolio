// import React, { useEffect, useRef } from "react";
// import "./styles.css"; // Your carousel styles
// import AWS from "../../assets/AWS.png"
// const movies = [
//   { name:"AWS certificate", image: AWS },
//   { image: "https://cdn.displate.com/artwork/380x270/2021-09-09/2270c49d0d04d0c5c48403e609c3b267_2483eb45b37795142f8e4bda16fb9833.jpg" },
//   { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS0seFo6Q-IpNHggXlSLrhbVl30AYd4lk8Q&s" },
//   { image: "https://assets-prd.ignimgs.com/2024/07/17/fc25-1721236238801.jpg" },
//   // Add more images if you like
// ];

// const Carousel = () => {
//   const carouselRef = useRef(null);
//   const sliders = useRef([]);
//   const slideIndex = useRef(0);

//   const createSlide = () => {
//     if (slideIndex.current >= movies.length) slideIndex.current = 0;
//     const { image } = movies[slideIndex.current];

//     const slide = document.createElement("div");
//     const img = document.createElement("img");

//     img.src = image;
//     img.className = "slider-img";

//     slide.className = "slider";
//     slide.appendChild(img);

//     carouselRef.current.appendChild(slide);
//     sliders.current.push(slide);

//     // Shift slides to left
//     if (sliders.current.length > 1) {
//       const offset = sliders.current.length - 2;
//       sliders.current[0].style.marginLeft = `calc(-${100 * offset}% - ${30 * offset}px)`;
//     }

//     slideIndex.current++;
//   };

//   useEffect(() => {
//     // Create the first 3 slides
//     for (let i = 0; i < 3; i++) createSlide();

//     const interval = setInterval(createSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="carousel-container">
//       <div className="carousel" ref={carouselRef}></div>
//     </div>
//   );
// };

// export default Carousel;
import React, { useEffect, useRef } from "react";
import "./styles.css"; 
import Accenture from "../../assets/Accenture.png";
import AWS from "../../assets/AWS.png";
import Tata from "../../assets/Tata.png";
const movies = [
  { name: "AWS certificate", image: AWS },
  { name: "Accenture certificate", image: Accenture },
  { name: "Tata certificate", image: Tata },

  // Add more images if you like
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const sliders = useRef([]);
  const slideIndex = useRef(0);

  const createSlide = () => {
    if (slideIndex.current >= movies.length) slideIndex.current = 0;
    const { image } = movies[slideIndex.current];

    const slide = document.createElement("div");
    const img = document.createElement("img");

    img.src = image;
    img.className = "slider-img";

    slide.className = "slider";
    slide.appendChild(img);

    carouselRef.current.appendChild(slide);
    sliders.current.push(slide);

    // Shift slides to left
    if (sliders.current.length > 1) {
      const offset = sliders.current.length - 2;
      sliders.current[0].style.marginLeft = `calc(-${100 * offset}% - ${
        30 * offset
      }px)`;
    }

    slideIndex.current++;
  };

  useEffect(() => {
    // Create the first 3 slides
    for (let i = 0; i < 3; i++) createSlide();

    const interval = setInterval(createSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}></div>
    </div>
  );
};

export default Carousel;

