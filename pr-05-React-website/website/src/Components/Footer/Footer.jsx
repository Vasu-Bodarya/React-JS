import React from 'react'
import "./Footer.css"
import { IoLocationOutline } from "react-icons/io5";//locationnnn
import { RiMailSendLine } from "react-icons/ri";//mail
import { IoCallSharp } from "react-icons/io5";//phone
import { FaFacebook } from "react-icons/fa";//fb
import { AiFillInstagram } from "react-icons/ai";//insta
import { FaSquareXTwitter } from "react-icons/fa6";//twitter
import { FaSquareWhatsapp } from "react-icons/fa6";//wp
import { FaTelegramPlane } from "react-icons/fa";//tele


const Footer = () => {
    return (
        <div>
            <footer className="footer padding-t-100 bg-off-white">
                <div className="container">
                    <div className="row footer-top padding-b-100">
                        <div className="col-xl-4 col-lg-6 col-sm-12 col-12 cr-footer-border">
                            <div className="cr-footer-logo">
                                <div className="image">
                                    <img src="Image/logo.png" alt="" srcset="" />
                                </div>
                                <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                            </div>
                            <div className="cr-footer">
                                <h4 className="cr-sub-title cr-title-hidden">
                                    Contact us
                                    <span className="cr-heading-res"></span>
                                </h4>
                                <ul className="cr-footer-links cr-footer-dropdown">

                                    <li className="location-icon">

                                        <IoLocationOutline />  51 Green St.Huntington ohaio beach ontario, NY 11746 KY &nbsp;&nbsp;&nbsp;&nbsp; 4783, USA.
                                    </li>
                                    <li className="mail-icon">
                                        <RiMailSendLine /> &nbsp; example@email.com
                                    </li>
                                    <li className="phone-icon">
                                        <IoCallSharp />&nbsp; +91 123 4567890
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-12 col-12 cr-footer-border">
                            <div className="cr-footer">
                                <h4 className="cr-sub-title">
                                    Company
                                    <span className="cr-heading-res"></span>
                                </h4>
                                <ul className="cr-footer-links cr-footer-dropdown">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="track-order.html">Delivery Information</a></li>
                                    <li><a href="policy.html">Privacy Policy</a></li>
                                    <li><a href="terms.html">Terms & Conditions</a></li>
                                    <li><a href="contact-us.html">contact Us</a></li>
                                    <li><a href="faq.html">Support Center</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-12 col-12 cr-footer-border">
                            <div className="cr-footer">
                                <h4 className="cr-sub-title">
                                    Category
                                    <span className="cr-heading-res"></span>
                                </h4>
                                <ul className="cr-footer-links cr-footer-dropdown">
                                    <li><a href="#">Dairy & Bakery</a></li>
                                    <li><a href="#">Fruits & Vegetable</a></li>
                                    <li><a href="#">Snack & Spice</a></li>
                                    <li><a href="#">Juice & Drinks</a></li>
                                    <li><a href="#">Chicken & Meat</a></li>
                                    <li><a href="#">Fast Food</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-sm-12 col-12 cr-footer-border">
                            <div className="cr-footer cr-newsletter">
                                <h4 className="cr-sub-title">
                                    Subscribe Our Newsletter
                                    <span className="cr-heading-res"></span>
                                </h4>
                                <div className="cr-footer-links cr-footer-dropdown">
                                    <form className="cr-search-footer">
                                        <input className="search-input" type="text" placeholder="Search here..." />
                                        <a href="#" className="search-btn">
                                        <FaTelegramPlane />
                                        </a>
                                    </form>
                                </div>



                                <div className="cr-social-media">
                                    <span><a href="#"><FaFacebook /></a></span>
                                    <span><a href="#"><AiFillInstagram /></a></span>
                                    <span><a href="#"><FaSquareXTwitter /></a></span>
                                    <span><a href="#"><FaSquareWhatsapp /></a></span>
                                </div>



                                <div className="cr-payment">
                                    <div className="cr-insta-slider swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <a href="#" className="cr-payment-image">
                                                    <img src='Image/f1.jpg' />
                                                    <div className="payment-overlay"></div>
                                                </a>
                                            </div>
                                            <div className="swiper-slide">
                                                <a href="#" className="cr-payment-image">
                                                    <img src='Image/f2.jpg' />
                                                    <div className="payment-overlay"></div>
                                                </a>
                                            </div>
                                            <div className="swiper-slide">
                                                <a href="#" className="cr-payment-image">
                                                    <img src='Image/f3.jpg' />
                                                    <div className="payment-overlay"></div>
                                                </a>
                                            </div>
                                            <div className="swiper-slide">
                                                <a href="#" className="cr-payment-image">
                                                    <img src='Image/f4.jpg' />
                                                    <div className="payment-overlay"></div>
                                                </a>
                                            </div>
                                       

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cr-last-footer">
                        <p>&copy; <span id="copyright_year"></span> 2024 <a href="index.html">Carrot</a>, All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
