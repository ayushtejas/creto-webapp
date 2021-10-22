import React from "react";
import "../Css/index.css";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../Banner";
import Products from "../Products";
import About from "../About";
import Blog from "../Blog";


function Home(){
  return(
    <div>
    < Header />
    < Banner />
    < About />
    < Products />
    < Blog />
    < Footer />
    </div>
  )
};


export default Home;
