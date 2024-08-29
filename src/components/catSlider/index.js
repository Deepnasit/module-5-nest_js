import React from "react";
import "./style.css";
import Slider from "react-slick";

function CatSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };
  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Featured Categories</h2>
          <Slider {...settings} className="cat_slider_Main">
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                <h6>Cake $ Milk</h6>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" />
                <h6>Organic Kiwi</h6>
                <p>28 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png" />
                <h6>Peach</h6>
                <p>14 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                <h6>Red Apple</h6>
                <p>54 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png" />
                <h6>Snack</h6>
                <p>56 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png" />
                <h6>Vegetables</h6>
                <p>72 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" />
                <h6>Strawberry</h6>
                <p>36 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png" />
                <h6>Black Plum</h6>
                <p>123 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" />
                <h6>Custerd Apple</h6>
                <p>34 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                <h6>Coffee $ Tea</h6>
                <p>89 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-15.png" />
                <h6>Headphone</h6>
                <p>87 items</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default CatSlider;
