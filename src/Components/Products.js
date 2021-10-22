import React from "react";
import { FaShoppingCart, FaHeart, FaEye, FaStar, FaStarHalfAlt } from "react-icons/fa";

function Products(){
  return( <div>
    <div className="products" id="products">

        <h1 className="heading"> our <span>products</span> </h1>

        <div className="box-container">

            <div className="box">
                <div className="icons">
                    <a href="#" ><FaShoppingCart /></a>
                    <a href="#" ><FaHeart/></a>
                    <a href="#" ><FaEye/></a>
                </div>
                <div className="image">
                  <i className="fas fa-star"></i>
                    <img src="https://www.bowerswilkins.com/sites/default/files/2019-09/Low--PX7%20Front%20-%20Space%20Grey.jpg" alt="" width="55%"/>
                </div>
                <div className="content">
                    <h3>fresh coffee</h3>
                    <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStarHalfAlt/></i>
                    </div>
                    <div className="price">₹15.99 <span>₹20.99</span></div>
                </div>
            </div>

            <div className="box">
                <div className="icons">
                    <a href="#" ><FaShoppingCart /></a>
                    <a href="#" ><FaHeart/></a>
                    <a href="#" ><FaEye/></a>
                </div>
                <div className="image">
                    <img src="https://m.media-amazon.com/images/I/51z376z5iBL._SL1200_.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>fresh coffee</h3>
                    <div className="stars">
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStarHalfAlt/></i>
                    </div>
                    <div className="price">₹15.99 <span>₹20.99</span></div>
                </div>
            </div>

            <div className="box">
                <div className="icons">
                    <a href="#" ><FaShoppingCart /></a>
                    <a href="#" ><FaHeart/></a>
                    <a href="#" ><FaEye/></a>
                </div>
                <div className="image">
                    <img src="https://m.media-amazon.com/images/I/71s9FMKzr+L._SL1500_.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>fresh coffee</h3>
                    <div className="stars">
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStar/></i>
                    <i><FaStarHalfAlt/></i>
                    </div>
                    <div className="price">₹15.99 <span>₹20.99</span></div>
                </div>
            </div>

        </div>

    </div>
    </div>
  )
};

export default Products;
