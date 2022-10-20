import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './style.css';
import HeaderTop from '../layout/header/HeaderTop';
import HeaderMiddle from '../layout/header/HeaderMiddle';
import HeaderBottom from '../layout/header/HeaderBottom';



import Footer from '../layout/footer/footer'



import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  return (
    <div>
      {/* Add your site or application content here */}
      {/*pos page start*/}
      <div className="pos_page">
        <div className="container">
          {/*pos page inner*/}
          <div className="pos_page_inner">
            {/*header area */}
            <div className="header_area">
              {/*header top*/}
              <HeaderTop />
              {/*header top end*/}
              {/*header middel*/}
              <HeaderMiddle />
              {/*header middel end*/}
              <HeaderBottom />
            </div>
            {/*header end */}
            <BrowserRouter>
              <Routes>
                <Route path="" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
          </div>
          {/*pos page inner end*/}
        </div>
      </div>
      {/*pos page end*/}
      {/*footer area start*/}
      <Footer />
      {/*footer area end*/}
      {/* modal area start */}
      <div className="modal fade" id="modal_box" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal_body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-12">
                    <div className="modal_tab">
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="tab1" role="tabpanel">
                          <div className="modal_tab_img">
                            <a href="#"><img src="assets\img\product\product13.jpg" alt="" /></a>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="tab2" role="tabpanel">
                          <div className="modal_tab_img">
                            <a href="#"><img src="assets\img\product\product14.jpg" alt="" /></a>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="tab3" role="tabpanel">
                          <div className="modal_tab_img">
                            <a href="#"><img src="assets\img\product\product15.jpg" alt="" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="modal_tab_button">
                        <ul className="nav product_navactive" role="tablist">
                          <li>
                            <a className="nav-link active" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="false"><img src="assets\img\cart\cart17.jpg" alt="" /></a>
                          </li>
                          <li>
                            <a className="nav-link" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false"><img src="assets\img\cart\cart18.jpg" alt="" /></a>
                          </li>
                          <li>
                            <a className="nav-link button_three" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false"><img src="assets\img\cart\cart19.jpg" alt="" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-12">
                    <div className="modal_right">
                      <div className="modal_title mb-10">
                        <h2>Handbag feugiat</h2>
                      </div>
                      <div className="modal_price mb-10">
                        <span className="new_price">$64.99</span>
                        <span className="old_price">$78.99</span>
                      </div>
                      <div className="modal_content mb-10">
                        <p>Short-sleeved blouse with feminine draped sleeve detail.</p>
                      </div>
                      <div className="modal_size mb-15">
                        <h2>size</h2>
                        <ul>
                          <li><a href="#">s</a></li>
                          <li><a href="#">m</a></li>
                          <li><a href="#">l</a></li>
                          <li><a href="#">xl</a></li>
                          <li><a href="#">xxl</a></li>
                        </ul>
                      </div>
                      <div className="modal_add_to_cart mb-15">
                        <form action="#">
                          <input min={0} max={100} step={2} defaultValue={1} type="number" />
                          <button type="submit">add to cart</button>
                        </form>
                      </div>
                      <div className="modal_description mb-15">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                      </div>
                      <div className="modal_social">
                        <h2>Share this product</h2>
                        <ul>
                          <li><a href="#"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                          <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal area end */}
    </div>
  );
}

export default App;
