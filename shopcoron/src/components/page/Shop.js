import React from 'react';
import './App.css';
import './style.css';

function Shop() {
  return (
    <div>
    {/*breadcrumbs area start*/}
    <div className="breadcrumbs_area">
      <div className="row">
        <div className="col-12">
          <div className="breadcrumb_content">
            <ul>
              <li><a href="index.html">home</a></li>
              <li><i className="fa fa-angle-right" /></li>
              <li>shop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/*breadcrumbs area end*/}
    {/*pos home section*/}
    <div className=" pos_home_section">
      <div className="row pos_home">
        <div className="col-lg-3 col-md-12">
          {/*layere categorie"*/}
          <div className="sidebar_widget shop_c">
            <div className="categorie__titile">
              <h4>Categories</h4>
            </div>
            <div className="layere_categorie">
              <ul>
                <li>
                  <input id="acces" type="checkbox" />
                  <label htmlFor="acces">Accessories<span>(1)</span></label>
                </li>
                <li>
                  <input id="dress" type="checkbox" />
                  <label htmlFor="dress">Dresses <span>(2)</span></label>
                </li>
                <li>
                  <input id="tops" type="checkbox" />
                  <label htmlFor="tops">Tops<span>(3)</span></label>
                </li>
                <li>
                  <input id="bag" type="checkbox" />
                  <label htmlFor="bag">HandBags<span>(4)</span></label>
                </li>
              </ul>
            </div>
          </div>
          {/*layere categorie end*/}
          {/*color area start*/}  
          <div className="sidebar_widget color">
            <h2>Color</h2>
            <div className="widget_color">
              <ul>
                <li><a href="#">Black <span>(10)</span></a></li>
                <li><a href="#">Orange <span>(12)</span></a></li>
                <li> <a href="#">Blue <span>(14)</span></a></li>
                <li><a href="#">Yellow <span>(15)</span></a></li>
                <li><a href="#">pink <span>(16)</span></a></li>
                <li><a href="#">green <span>(11)</span></a></li>
              </ul>
            </div>
          </div>                 
          {/*color area end*/} 
          {/*price slider start*/}                                     
          <div className="sidebar_widget price">
            <h2>Price</h2>
            <div className="ca_search_filters">
              <input type="text" name="text" id="amount" />  
              <div id="slider-range" /> 
            </div>
          </div>                                                       
          {/*price slider end*/}
          {/*wishlist block start*/}
          <div className="sidebar_widget wishlist mb-30">
            <div className="block_title">
              <h3><a href="#">Wishlist</a></h3>
            </div>
            <div className="cart_item">
              <div className="cart_img">
                <a href="#"><img src="assets\img\cart\cart.jpg" alt="" /></a>
              </div>
              <div className="cart_info">
                <a href="#">lorem ipsum dolor</a>
                <span className="cart_price">$115.00</span>
                <span className="quantity">Qty: 1</span>
              </div>
              <div className="cart_remove">
                <a title="Remove this item" href="#"><i className="fa fa-times-circle" /></a>
              </div>
            </div>
            <div className="cart_item">
              <div className="cart_img">
                <a href="#"><img src="assets\img\cart\cart2.jpg" alt="" /></a>
              </div>
              <div className="cart_info">
                <a href="#">Quisque ornare dui</a>
                <span className="cart_price">$105.00</span>
                <span className="quantity">Qty: 1</span>
              </div>
              <div className="cart_remove">
                <a title="Remove this item" href="#"><i className="fa fa-times-circle" /></a>
              </div>
            </div>
            <div className="block_content">
              <p>2  products</p>
              <a href="#">» My wishlists</a>
            </div>
          </div>
          {/*wishlist block end*/}
          {/*popular tags area*/}
          <div className="sidebar_widget tags  mb-30">
            <div className="block_title">
              <h3>popular tags</h3>
            </div>
            <div className="block_tags">
              <a href="#">ipod</a>
              <a href="#">sam sung</a>
              <a href="#">apple</a>
              <a href="#">iphone 5s</a>
              <a href="#">superdrive</a>
              <a href="#">shuffle</a>
              <a href="#">nano</a>
              <a href="#">iphone 4s</a>
              <a href="#">canon</a>
            </div>
          </div>
          {/*popular tags end*/}
          {/*newsletter block start*/}
          <div className="sidebar_widget newsletter mb-30">
            <div className="block_title">
              <h3>newsletter</h3>
            </div> 
            <form action="#">
              <p>Sign up for your newsletter</p>
              <input placeholder="Your email address" type="text" />
              <button type="submit">Subscribe</button>
            </form>   
          </div>
          {/*newsletter block end*/} 
          {/*special product start*/}
          <div className="sidebar_widget special">
            <div className="block_title">
              <h3>Special Products</h3>
            </div>
            <div className="special_product_inner mb-20">
              <div className="special_p_thumb">
                <a href="single-product.html"><img src="assets\img\cart\cart3.jpg" alt="" /></a>
              </div>
              <div className="small_p_desc">
                <div className="product_ratting">
                  <ul>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                  </ul>
                </div>
                <h3><a href="single-product.html">Lorem ipsum dolor</a></h3>
                <div className="special_product_proce">
                  <span className="old_price">$124.58</span>
                  <span className="new_price">$118.35</span>
                </div>
              </div>
            </div>
            <div className="special_product_inner">
              <div className="special_p_thumb">
                <a href="single-product.html"><img src="assets\img\cart\cart18.jpg" alt="" /></a>
              </div>
              <div className="small_p_desc">
                <div className="product_ratting">
                  <ul>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                  </ul>
                </div>
                <h3><a href="single-product.html">Printed Summer</a></h3>
                <div className="special_product_proce">
                  <span className="old_price">$124.58</span>
                  <span className="new_price">$118.35</span>
                </div>
              </div>
            </div>
          </div>
          {/*special product end*/}
        </div>
        <div className="col-lg-9 col-md-12">
          {/*banner slider start*/}
          <div className="banner_slider mb-35">
            <img src="assets\img\banner\bannner10.jpg" alt="" />
          </div> 
          {/*banner slider start*/}
          {/*shop toolbar start*/}
          <div className="shop_toolbar mb-35">
            <div className="list_button">
              <ul className="nav" role="tablist">
                <li>
                  <a className="active" data-toggle="tab" href="#large" role="tab" aria-controls="large" aria-selected="true"><i className="fa fa-th-large" /></a>
                </li>
                <li>
                  <a data-toggle="tab" href="#list" role="tab" aria-controls="list" aria-selected="false"><i className="fa fa-th-list" /></a>
                </li>
              </ul>
            </div>
            <div className="page_amount">
              <p>Showing 1–9 of 21 results</p>
            </div>
            <div className="select_option">
              <form action="#">
                <label>Sort By</label>
                <select name="orderby" id="short">
                  <option selected value={1}>Position</option>
                  <option value={1}>Price: Lowest</option>
                  <option value={1}>Price: Highest</option>
                  <option value={1}>Product Name:Z</option>
                  <option value={1}>Sort by price:low</option>
                  <option value={1}>Product Name: Z</option>
                  <option value={1}>In stock</option>
                  <option value={1}>Product Name: A</option>
                  <option value={1}>In stock</option>
                </select>
              </form>
            </div>
          </div>
          {/*shop toolbar end*/}
          {/*shop tab product*/}
          <div className="shop_tab_product">   
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="large" role="tabpanel">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
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
                  <div className="col-lg-4 col-md-6">
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
                  <div className="col-lg-4 col-md-6">
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
                  <div className="col-lg-4 col-md-6">
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
                  <div className="col-lg-4 col-md-6">
                    <div className="single_product">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product5.jpg" alt="" /></a> 
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
                  <div className="col-lg-4 col-md-6">
                    <div className="single_product">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product6.jpg" alt="" /></a> 
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
                  <div className="col-lg-4 col-md-6">
                    <div className="single_product">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product7.jpg" alt="" /></a> 
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
                  <div className="col-lg-4 col-md-6">
                    <div className="single_product">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product8.jpg" alt="" /></a> 
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
                  <div className="col-lg-4 col-md-6">
                    <div className="single_product">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product9.jpg" alt="" /></a> 
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
                </div>  
              </div>
              <div className="tab-pane fade" id="list" role="tabpanel">
                <div className="product_list_item mb-35">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product2.jpg" alt="" /></a> 
                        <div className="hot_img">
                          <img src="assets\img\cart\span-hot.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                      <div className="list_product_content">
                        <div className="product_ratting">
                          <ul>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                          </ul>
                        </div>
                        <div className="list_title">
                          <h3><a href="single-product.html">Lorem ipsum dolor</a></h3>
                        </div>
                        <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>
                        <p className="compare">
                          <input id="select" type="checkbox" />
                          <label htmlFor="select">Select to compare</label>
                        </p>
                        <div className="content_price">
                          <span>$118.00</span>
                          <span className="old-price">$130.00</span>
                        </div>
                        <div className="add_links">
                          <ul>
                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                <div className="product_list_item mb-35">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product3.jpg" alt="" /></a> 
                        <div className="img_icone">
                          <img src="assets\img\cart\span-new.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                      <div className="list_product_content">
                        <div className="product_ratting">
                          <ul>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                          </ul>
                        </div>
                        <div className="list_title">
                          <h3><a href="single-product.html">Quisque ornare dui</a></h3>
                        </div>
                        <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>
                        <p className="compare">
                          <input id="select1" type="checkbox" />
                          <label htmlFor="select1">Select to compare</label>
                        </p>
                        <div className="content_price">
                          <span>$118.00</span>
                          <span className="old-price">$130.00</span>
                        </div>
                        <div className="add_links">
                          <ul>
                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                <div className="product_list_item mb-35">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product4.jpg" alt="" /></a> 
                        <div className="img_icone">
                          <img src="assets\img\cart\span-new.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                      <div className="list_product_content">
                        <div className="product_ratting">
                          <ul>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                          </ul>
                        </div>
                        <div className="list_title">
                          <h3><a href="single-product.html">Maecenas sit amet</a></h3>
                        </div>
                        <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>
                        <p className="compare">
                          <input id="select2" type="checkbox" />
                          <label htmlFor="select2">Select to compare</label>
                        </p>
                        <div className="content_price">
                          <span>$118.00</span>
                          <span className="old-price">$130.00</span>
                        </div>
                        <div className="add_links">
                          <ul>
                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div> 
                <div className="product_list_item mb-35">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product5.jpg" alt="" /></a> 
                        <div className="img_icone">
                          <img src="assets\img\cart\span-new.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                      <div className="list_product_content">
                        <div className="product_ratting">
                          <ul>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                          </ul>
                        </div>
                        <div className="list_title">
                          <h3><a href="single-product.html">Sed non luctus turpis</a></h3>
                        </div>
                        <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>
                        <p className="compare">
                          <input id="select3" type="checkbox" />
                          <label htmlFor="select3">Select to compare</label>
                        </p>
                        <div className="content_price">
                          <span>$118.00</span>
                          <span className="old-price">$130.00</span>
                        </div>
                        <div className="add_links">
                          <ul>
                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div> 
                <div className="product_list_item mb-35">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product6.jpg" alt="" /></a> 
                        <div className="hot_img">
                          <img src="assets\img\cart\span-hot.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                      <div className="list_product_content">
                        <div className="product_ratting">
                          <ul>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                          </ul>
                        </div>
                        <div className="list_title">
                          <h3><a href="single-product.html">Donec dignissim eget</a></h3>
                        </div>
                        <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>
                        <p className="compare">
                          <input id="select4" type="checkbox" />
                          <label htmlFor="select4">Select to compare</label>
                        </p>
                        <div className="content_price">
                          <span>$118.00</span>
                          <span className="old-price">$130.00</span>
                        </div>
                        <div className="add_links">
                          <ul>
                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div> 
                <div className="product_list_item mb-35">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product7.jpg" alt="" /></a> 
                        <div className="img_icone">
                          <img src="assets\img\cart\span-new.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                      <div className="list_product_content">
                        <div className="product_ratting">
                          <ul>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                          </ul>
                        </div>
                        <div className="list_title">
                          <h3><a href="single-product.html">Lorem ipsum dolor</a></h3>
                        </div>
                        <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>
                        <p className="compare">
                          <input id="select5" type="checkbox" />
                          <label htmlFor="select5">Select to compare</label>
                        </p>
                        <div className="content_price">
                          <span>$118.00</span>
                          <span className="old-price">$130.00</span>
                        </div>
                        <div className="add_links">
                          <ul>
                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div> 
                <div className="product_list_item mb-35">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product8.jpg" alt="" /></a> 
                        <div className="img_icone">
                          <img src="assets\img\cart\span-new.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                      <div className="list_product_content">
                        <div className="product_ratting">
                          <ul>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                          </ul>
                        </div>
                        <div className="list_title">
                          <h3><a href="single-product.html">Donec ac congue</a></h3>
                        </div>
                        <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>
                        <p className="compare">
                          <input id="select6" type="checkbox" />
                          <label htmlFor="select6">Select to compare</label>
                        </p>
                        <div className="content_price">
                          <span>$118.00</span>
                          <span className="old-price">$130.00</span>
                        </div>
                        <div className="add_links">
                          <ul>
                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div> 
                <div className="product_list_item mb-35">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product9.jpg" alt="" /></a> 
                        <div className="hot_img">
                          <img src="assets\img\cart\span-hot.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                      <div className="list_product_content">
                        <div className="product_ratting">
                          <ul>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                          </ul>
                        </div>
                        <div className="list_title">
                          <h3><a href="single-product.html">Curabitur sodales</a></h3>
                        </div>
                        <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>
                        <p className="compare">
                          <input id="select7" type="checkbox" />
                          <label htmlFor="select7">Select to compare</label>
                        </p>
                        <div className="content_price">
                          <span>$118.00</span>
                          <span className="old-price">$130.00</span>
                        </div>
                        <div className="add_links">
                          <ul>
                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div> 
                <div className="product_list_item mb-35">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product_thumb">
                        <a href="single-product.html"><img src="assets\img\product\product1.jpg" alt="" /></a> 
                        <div className="img_icone">
                          <img src="assets\img\cart\span-new.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                      <div className="list_product_content">
                        <div className="product_ratting">
                          <ul>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                            <li><a href="#"><i className="fa fa-star" /></a></li>
                          </ul>
                        </div>
                        <div className="list_title">
                          <h3><a href="single-product.html">Lorem ipsum dolor</a></h3>
                        </div>
                        <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>
                        <p className="compare">
                          <input id="select8" type="checkbox" />
                          <label htmlFor="select8">Select to compare</label>
                        </p>
                        <div className="content_price">
                          <span>$118.00</span>
                          <span className="old-price">$130.00</span>
                        </div>
                        <div className="add_links">
                          <ul>
                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></a></li>
                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>                        
              </div>
            </div>
          </div>    
          {/*shop tab product end*/}
          {/*pagination style start*/} 
          <div className="pagination_style">
            <div className="item_page">
              <form action="#">
                <label htmlFor="page_select">show</label>
                <select id="page_select">
                  <option value={1}>9</option>
                  <option value={2}>10</option>
                  <option value={3}>11</option>
                </select>
                <span>Products by page</span>
              </form>
            </div>
            <div className="page_number">
              <span>Pages: </span>
              <ul>
                <li>«</li>
                <li className="current_number">1</li>
                <li><a href="#">2</a></li>
                <li>»</li>
              </ul>
            </div>
          </div>
          {/*pagination style end*/} 
        </div>
      </div>  
    </div>
    {/*pos home section end*/}
  </div>
  );
}

export default Shop;