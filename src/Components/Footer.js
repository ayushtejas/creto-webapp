import React from "react";
import $ from "jquery";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


const getCurrentYear = () => {
    return new Date().getFullYear();
  };

function Scroll(){
  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
};

function Footer (){
  return(
    <div>
    <div class="footer">
       <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Track Your Order</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Warranty Support</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#">watch</a></li>
              <li><a href="#">bag</a></li>
              <li><a href="#">shoes</a></li>
              <li><a href="#">dress</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#"> <FaFacebook/> </a>
              <a href="#"> <FaInstagram/> </a>
              <a href="#"> <FaTwitter/> </a>
              <a href="#"> <FaLinkedin/> </a>
            </div>
          </div>
        </div>
       </div>
       <div className="copyrights">
       <p>&copy; Creto.in {getCurrentYear()}</p>
       </div>
    </div>
    </div>
  )
};

export default Footer;
