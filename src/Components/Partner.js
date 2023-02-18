import React from 'react';
import './CSS/Partner.css';
import Slider from 'react-slick';

function Partner() {
  var partner_slider = {
		slidesToShow: 3,
  		slidesToScroll: 3,
  		dots:true,
      arrows: true,
  		autoplay: true,
  		autoplaySpeed: 2000,
  		infinite: true
	  };
  return (
    <div>
        <section className="section section-default mt-none mb-none">
    <div className="container">
        <div className='partner-h1'>
    <h1 className="mb-sm">Our Partners</h1>
    </div>
    <strong>
    <div className="row">
    <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="partner-square-holder">
    <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/solar-communications-200.png" />
    </div>
    </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="partner-square-holder">
    <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/cbf-200.png" />
    </div>
    </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="partner-square-holder">
    <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png" />
    </div>
    </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="partner-square-holder">
    <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png" />
    </div>
    </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="partner-square-holder">
    <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png" />
    </div>
    </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="partner-square-holder">
    <img alt="" src="https://www.pmits.co.uk/Portals/0/img/opera3_logo.png" />
    </div>
    </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="partner-square-holder">
    <img alt="" src="https://www.pmits.co.uk/Portals/0/pegasus-logo.png" />
    </div>
    </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="partner-square-holder">
    <img alt="" src="https://www.pmits.co.uk/Portals/0/sage business partner.jpg" />
    </div>
    </div>
    </div>
    </strong>
    <body className="slider-partner-body">

		<Slider   {...partner_slider}>
			<div className="slider-partner-item"><img className="slider-partner-img" src="https://img.freepik.com/free-psd/luxury-beauty-logo-mockup_4513-551.jpg?size=626&ext=jpg" alt=""/></div>

			<div className="slider-partner-item"><img className="slider-partner-img" src="https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?size=626&ext=jpg&ga=GA1.2.1310802339.1645460433" alt=""/></div>

			<div className="slider-partner-item"><img className="slider-partner-img" src="https://img.freepik.com/free-vector/golden-crown-with-wave-line_1017-33680.jpg?size=626&ext=jpg&ga=GA1.2.1310802339.1645460433" alt=""/></div>

			<div className="slider-partner-item"><img className="slider-partner-img" src="https://img.freepik.com/free-psd/colorful-solid-logo-mockup-carbon-fiber_167120-240.jpg?size=626&ext=jpg&ga=GA1.2.1310802339.1645460433" alt=""/></div>

			<div className="slider-partner-item"><img className="slider-partner-img" src="https://img.freepik.com/free-psd/logo-mockup-brown-leather_35913-2101.jpg?t=st=1645616504~exp=1645617104~hmac=43956aca36fad07fe06ef5d1a73266b3ea91c6b93f754b1a2e0e58c2149a0fcb&w=1800" alt=""/></div>

			<div className="slider-partner-item"><img className="slider-partner-img" src="https://img.freepik.com/free-psd/futuristic-pedestal-logo-mockup_35913-1596.jpg?size=626&ext=jpg&ga=GA1.2.1310802339.1645460433" alt=""/></div>
		</Slider>

	</body>
    </div>
    </section>
    </div>
  )
}

export default Partner