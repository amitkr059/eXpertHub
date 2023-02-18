import React from 'react';
import Slider from 'react-slick';
import './CSS/Slidermain.css';

function Slidermain() {
    var main_slider = {
		infinite: true,
            autoplay: true,
            dots: true,
            arrows: true,
            autoplaySpeed: 2000,
            
	  };

  return (
        <section className="Slidermain-section">
        <div className="column is-10 is-offset-1">
            <Slider {...main_slider} className="Slidermain-slideshow">
                <div className="Slidermain-slide">
                    <img src="https://media.istockphoto.com/photos/night-sky-landscape-picture-id809971888?b=1&k=20&m=809971888&s=170667a&w=0&h=ui6NEbee8aVHKvD8g6_fmU4nCPMf5AowQVhw7-vacFc=" alt="" />
                </div>
                <div className="Slidermain-slide">
                    <img src="https://media.istockphoto.com/photos/alps-mountain-landscape-with-night-sky-and-mliky-way-dolomites-picture-id617565930?k=20&m=617565930&s=612x612&w=0&h=TgYalCLudr9o-yOZT-9uoSvR3hPlIXP68SxFnf1c97c=" alt="" />
                </div>
                <div className="Slidermain-slide">
                    <img src="https://media.istockphoto.com/photos/leiden-from-the-sky-at-night-night-picture-id1131102682?k=20&m=1131102682&s=612x612&w=0&h=ROc6Ifq_AKFHso1yNdZjuHu5peudw24PMWLvTGs97vQ=" alt="" />
                </div>
                <div className="Slidermain-slide">
                    <img src="https://media.istockphoto.com/photos/man-sitting-under-the-milky-way-galaxy-picture-id530185374?k=20&m=530185374&s=612x612&w=0&h=aQle4mfNBViairjVTukvqxWsEwHSONExMr-l32Hcdu8=" alt="" />
                </div>
            </Slider>
        </div>
</section>
  )
}

export default Slidermain