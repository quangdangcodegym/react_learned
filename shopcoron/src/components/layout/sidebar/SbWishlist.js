import React from 'react';
function SbWishlist() {
    return ( 
        <div className="sidebar_widget wishlist mb-35">
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
     );
}

export default SbWishlist;