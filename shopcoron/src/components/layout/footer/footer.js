import React from 'react';
function Footer() {
    return ( 
        <div className="footer_area">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3>About us</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="footer_widget_contect">
                    <p><i className="fa fa-map-marker" aria-hidden="true" />  19 Interpro Road Madison, AL 35758, USA</p>
                    <p><i className="fa fa-mobile" aria-hidden="true" /> (012) 234 432 3568</p>
                    <a href="#"><i className="fa fa-envelope-o" aria-hidden="true" /> Contact@plazathemes.com </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3>My Account</h3>
                  <ul>
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">My orders</a></li>
                    <li><a href="#">My credit slips</a></li>
                    <li><a href="#">My addresses</a></li>
                    <li><a href="#">Login</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3>Informations</h3>
                  <ul>
                    <li><a href="#">Specials</a></li>
                    <li><a href="#">Our store(s)!</a></li>
                    <li><a href="#">My credit slips</a></li>
                    <li><a href="#">Terms and conditions</a></li>
                    <li><a href="#">About us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3>extras</h3>
                  <ul>
                    <li><a href="#"> Brands</a></li>
                    <li><a href="#"> Gift Vouchers </a></li>
                    <li><a href="#"> Affiliates </a></li>
                    <li><a href="#"> Specials </a></li>
                    <li><a href="#"> Privacy policy </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="copyright_area">
                  <ul>
                    <li><a href="#"> about us </a></li>
                    <li><a href="#">  Customer Service</a></li>
                    <li><a href="#">  Privacy Policy</a></li>
                  </ul>
                  <p>Copyright © 2018 <a href="#">Pos Coron</a>. All rights reserved. </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="footer_social text-right">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                    <li><a className="pinterest" href="#"><i className="fa fa-pinterest-p" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-wifi" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}

export default Footer;