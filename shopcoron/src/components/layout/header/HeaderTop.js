import React from 'react';
function HeaderTop() {
    return ( 
        <div className="header_top">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="switcher">
                      <ul>
                        <li className="languages"><a href="#"><img src="assets\img\logo\fontlogo.jpg" alt="" /> English <i className="fa fa-angle-down" /></a>
                          <ul className="dropdown_languages">
                            <li><a href="#"><img src="assets\img\logo\fontlogo.jpg" alt="" /> English</a></li>
                            <li><a href="#"><img src="assets\img\logo\fontlogo2.jpg" alt="" /> French </a></li>
                          </ul>
                        </li>
                        <li className="currency"><a href="#"> Currency : $ <i className="fa fa-angle-down" /></a>
                          <ul className="dropdown_currency">
                            <li><a href="#"> Dollar (USD)</a></li>
                            <li><a href="#"> Euro (EUR)</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="header_links">
                      <ul>
                        <li><a href="contact.html" title="Contact">Contact</a></li>
                        <li><a href="wishlist.html" title="wishlist">My wishlist</a></li>
                        <li><a href="my-account.html" title="My account">My account</a></li>
                        <li><a href="cart.html" title="My cart">My cart</a></li>
                        <li><a href="login.html" title="Login">Login</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
     );
}

export default HeaderTop;