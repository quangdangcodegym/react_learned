import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './slide.css'
function SliderTest() {
    return (
        <Carousel autoPlay={true} >
            <div className="single_slider" style={{ backgroundImage: 'url(assets/img/slider/slide_1.png)' }}>
                <div className="slider_content">
                    <div className="slider_content_inner">
                        <h1 className='ha'>Women's Fashion</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        <a href="#">shop now</a>
                    </div>
                </div>
            </div>
            <div className="single_slider" style={{ backgroundImage: 'url(assets/img/slider/slider_2.png)' }}>
                <div className="slider_content">
                    <div className="slider_content_inner">
                        <h1>New Collection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        <a href="#">shop now</a>
                    </div>
                </div>
            </div>
            <div className="single_slider" style={{ backgroundImage: 'url(assets/img/slider/slider_3.png)' }}>
                <div className="slider_content">
                    <div className="slider_content_inner">
                        <h1 className='ha'>Best Collection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        <a href="#">shop now</a>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}

export default SliderTest;