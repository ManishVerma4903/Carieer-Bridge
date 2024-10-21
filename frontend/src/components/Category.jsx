import React from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Category() {
  const categories = [
    "Frontend Developer",
    "Data Science",
    "Backend Developer",
    "Graphic Designer",
    "FullStack Developer",
  ];

//   slider settings
  var settings = {

    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  
  return (
      <div className="py-5 "> 
        <div className="w-[55%] mx-auto px-5">
        <Slider {...settings}>
            {categories.map((item,index)=>(
                <button key={index} className="border-[#999999] gap-5 border rounded-full m-5 py-1 ">{item}</button>
            ))}
        </Slider>    
        </div>
    </div> 
  );
}

export default Category;
