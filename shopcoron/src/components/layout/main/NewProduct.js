import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function NewProduct() {
    return ( 
        <div className="new_product_area">
                    <div className="block_title">
                      <h3>New Products</h3>
                    </div>
                    <div className="row">
                        <Carousel autoPlay={true} className="product_active" >
                            <div className="col-lg-3">
                              <div className="single_product">
                                <div className="product_thumb">
                                  <a href="single-product.html"><img src="assets\img\product\product1.jpg" alt="" /></a>
                                  <div className="img_icone">
                                    <img src="assets\img\cart\span-new.png" alt="" />
                                  </div>
                                  <div className="product_action">
                                    <a href="#"> <i className="fa fa-shopping-cart" /> Add to cart</a>
                                  </div>
                                </div>
                                <div className="product_content">
                                  <span className="product_price">$50.00</span>
                                  <h3 className="product_title"><a href="single-product.html">Curabitur sodales</a></h3>
                                </div>
                                <div className="product_info">
                                  <ul>
                                    <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="single_product">
                                <div className="product_thumb">
                                  <a href="single-product.html"><img src="assets\img\product\product2.jpg" alt="" /></a>
                                  <div className="hot_img">
                                    <img src="assets\img\cart\span-hot.png" alt="" />
                                  </div>
                                  <div className="product_action">
                                    <a href="#"> <i className="fa fa-shopping-cart" /> Add to cart</a>
                                  </div>
                                </div>
                                <div className="product_content">
                                  <span className="product_price">$40.00</span>
                                  <h3 className="product_title"><a href="single-product.html">Quisque ornare dui</a></h3>
                                </div>
                                <div className="product_info">
                                  <ul>
                                    <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="single_product">
                                <div className="product_thumb">
                                  <a href="single-product.html"><img src="assets\img\product\product3.jpg" alt="" /></a>
                                  <div className="img_icone">
                                    <img src="assets\img\cart\span-new.png" alt="" />
                                  </div>
                                  <div className="product_action">
                                    <a href="#"> <i className="fa fa-shopping-cart" /> Add to cart</a>
                                  </div>
                                </div>
                                <div className="product_content">
                                  <span className="product_price">$60.00</span>
                                  <h3 className="product_title"><a href="single-product.html">Sed non turpiss</a></h3>
                                </div>
                                <div className="product_info">
                                  <ul>
                                    <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="single_product">
                                <div className="product_thumb">
                                  <a href="single-product.html"><img src="assets\img\product\product4.jpg" alt="" /></a>
                                  <div className="hot_img">
                                    <img src="assets\img\cart\span-hot.png" alt="" />
                                  </div>
                                  <div className="product_action">
                                    <a href="#"> <i className="fa fa-shopping-cart" /> Add to cart</a>
                                  </div>
                                </div>
                                <div className="product_content">
                                  <span className="product_price">$65.00</span>
                                  <h3 className="product_title"><a href="single-product.html">Duis convallis</a></h3>
                                </div>
                                <div className="product_info">
                                  <ul>
                                    <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="single_product">
                                <div className="product_thumb">
                                  <a href="single-product.html"><img src="assets\img\product\product6.jpg" alt="" /></a>
                                  <div className="img_icone">
                                    <img src="assets\img\cart\span-new.png" alt="" />
                                  </div>
                                  <div className="product_action">
                                    <a href="#"> <i className="fa fa-shopping-cart" /> Add to cart</a>
                                  </div>
                                </div>
                                <div className="product_content">
                                  <span className="product_price">$50.00</span>
                                  <h3 className="product_title"><a href="single-product.html">Curabitur sodales</a></h3>
                                </div>
                                <div className="product_info">
                                  <ul>
                                    <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            </Carousel>
                    </div>
                  </div>
     );
}

export default NewProduct;