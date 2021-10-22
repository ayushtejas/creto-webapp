import React from "react";

function Blog(){
  return (<div>
    <div className="blogs" id="blogs">

        <h1 className="heading"> our <span>blogs</span> </h1>

        <div className="box-container">

            <div className="box">
                <div className="image">
                    <img src="https://wallpapercave.com/wp/wp2015710.jpg" alt=""/>
                </div>
                <div className="content">
                    <a href="#" className="title">Top 10 Best Headphones</a>
                    <span>by admin / 21st may, 2021</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                    <a href="#" className="btn">read more</a>
                </div>
            </div>

            <div className="box">
                <div className="image">
                    <img src="https://c4.wallpaperflare.com/wallpaper/502/220/937/headset-headphone-wall-earphone-wallpaper-preview.jpg" alt=""/>
                </div>
                <div className="content">
                    <a href="#" className="title">Noise Cancelation Headphones</a>
                    <span>by admin / 21st may, 2021</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                    <a href="#" className="btn">read more</a>
                </div>
            </div>

            <div className="box">
                <div className="image">
                    <img src="https://wallpaperaccess.com/full/2068794.jpg" alt=""/>
                </div>
                <div className="content">
                    <a href="#" className="title">Advancement in Wireless Connectivity</a>
                    <span>by admin / 21st may, 2021</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                    <a href="#" className="btn">read more</a>
                </div>
            </div>

        </div>

    </div>
    </div>
  )
};

export default Blog;
