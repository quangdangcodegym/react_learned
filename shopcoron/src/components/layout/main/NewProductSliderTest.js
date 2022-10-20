import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import './featuredproduct.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './featuredproduct.css';
function NewProductSliderTest() {

    return ( 
      <div className="new_product_area">
      <div className="block_title">
        <h3>New Products</h3>
      </div>
      <div className="row">
      <OwlCarousel className='owl-theme product_active' loop margin={10} nav>
            <div class='item'>
                <h4>1</h4>
            </div>
            <div class='item'>
                <h4>2</h4>
            </div>
            <div class='item'>
                <h4>3</h4>
            </div>
            <div class='item'>
                <h4>4</h4>
            </div>
            <div class='item'>
                <h4>5</h4>
            </div>
            <div class='item'>
                <h4>6</h4>
            </div>
            <div class='item'>
                <h4>7</h4>
            </div>
            <div class='item'>
                <h4>8</h4>
            </div>
            <div class='item'>
                <h4>9</h4>
            </div>
            <div class='item'>
                <h4>10</h4>
            </div>
            <div class='item'>
                <h4>11</h4>
            </div>
            <div class='item'>
                <h4>12</h4>
            </div>
</OwlCarousel>
      </div>       
    </div>
     );
}

export default NewProductSliderTest;