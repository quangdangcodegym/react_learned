import React from 'react';
import './App.css';
import './style.css';

import SbCategory from '../layout/sidebar/SbCategory';
import SbWishlist from '../layout/sidebar/SbWishlist';
import SbTag from '../layout/sidebar/SbTag';
import SbNewsletter from '../layout/sidebar/SbNewsletter';
import SbBottom from '../layout/sidebar/SbBottom';

import NewProduct from '../layout/main/NewProduct';
import FeaturedProduct from '../layout/main/FeaturedProduct';
import BannerArea from '../layout/main/BannerArea';
import BrandLogo from '../layout/main/BrandLogo';
import SliderTest from '../layout/main/SliderTest';
// import ProductSlider from './components/main/ProductSlider';
import CustomArrows from '../layout/main/CustomArrows';
import NewProductSlider from '../layout/main/NewProductSlider';
import NewProductSliderTest from '../layout/main/NewProductSliderTest';
function Home() {
    return ( 
        <div className=" pos_home_section">
        <div className="row pos_home">
          <div className="col-lg-3 col-md-8 col-12">
            {/*sidebar banner*/}
            <SbCategory />
            {/*sidebar banner end*/}
            {/*categorie menu start*/}
            <SbCategory />
            {/*categorie menu end*/}
            {/*wishlist block start*/}
            <SbWishlist />
            {/*wishlist block end*/}
            {/*popular tags area*/}
            <SbTag />
            {/*popular tags end*/}
            {/*newsletter block start*/}
            <SbNewsletter />
            {/*newsletter block end*/}
            {/*sidebar banner*/}
            <SbBottom />
            {/*sidebar banner end*/}
          </div>
          <div className="col-lg-9 col-md-12">
            {/*banner slider start*/}
            <SliderTest />
            {/*banner slider start*/}
            {/*new product area start*/}
            <NewProductSliderTest />
            <NewProductSlider />
            {/*new product area start*/}
            {/*featured product start*/}
            <FeaturedProduct />
            {/*featured product end*/}
            {/*banner area start*/}
            <BannerArea />
            {/*banner area end*/}
            {/*brand logo strat*/}
            <BrandLogo />
            {/*brand logo end*/}
          </div>
        </div>
      </div>
     );
}

export default Home;