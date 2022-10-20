import React from 'react';
function BannerArea() {
    return ( 
        <div className="banner_area mb-60">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="single_banner">
                          <a href="#"><img src="assets\img\banner\banner7.jpg" alt="" /></a>
                          <div className="banner_title">
                            <p>Up to <span> 40%</span> off</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="single_banner">
                          <a href="#"><img src="assets\img\banner\banner8.jpg" alt="" /></a>
                          <div className="banner_title title_2">
                            <p>sale off <span> 30%</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
     );
}

export default BannerArea;