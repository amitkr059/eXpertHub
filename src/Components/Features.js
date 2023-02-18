import React from "react";
import './CSS/Features.css';

function Features(){
    return(
        <body className="features-body">
    <section className="features_section">
        <div className="features_top">
            <h1>Our Amazing Features</h1>
            <p className="com">Communicate with flexible tools that where your business goes </p>
        </div>

        <div className="features_container">
            <div className="features_item">
                <i className="fas fa-gem"></i>
                <div className="featuresItem_info">
                    <h3>Premium Features</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex neque optio tempore inventore dolor illo fugiat fugit saepe!
                    </p>
                </div>
            </div>
            <div className="features_item">
                <i className="fas fa-medal"></i>
                <div className="featuresItem_info">
                    <h3>Awarded Features</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex neque optio tempore inventore dolor illo fugiat fugit saepe!
                    </p>
                </div>
            </div>
            <div className="features_item">
                <i className="fas fa-umbrella"></i>
                <div className="featuresItem_info">
                    <h3>User Friendly</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex neque optio tempore inventore dolor illo fugiat fugit saepe!
                    </p>
                </div>
            </div>
            <div className="features_item">
                <i className="fas fa-comments"></i>
                <div className="featuresItem_info">
                    <h3>24/7 Support</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex neque optio tempore inventore dolor illo fugiat fugit saepe!
                    </p>
                </div>
            </div>
        </div>
    </section>

</body>



    )
}
export default Features;