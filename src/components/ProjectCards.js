import React from "react";
import Slider from "react-slick";

function ProjectCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  

  return (
    <div className="projectcards">
      <Slider {...settings}>
        <div>[card1]</div>

        <div>[card2]</div>

        <div>[card3]</div>
      </Slider>
    </div>
  );
}

export default ProjectCards;
