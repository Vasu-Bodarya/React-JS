import React from 'react'
import "./Header.css"
import { FaSearch } from "react-icons/fa";//search:-----
import { MdOutlineSupervisorAccount } from "react-icons/md";//account:-----
import { BiLike } from "react-icons/bi";//like:-------------
import { CiShoppingCart } from "react-icons/ci";//cart:----
import { CgMenuBoxed } from "react-icons/cg"; //toggle:-----------


const Header = () => {
    return (
        <div>
            {/* header start:--------------------------------------- */}
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 align-center justify-center">
                            {/* logo:------------------------ */}
                            <div className="top-header">
                                <a href="#" className="cr-logo m-2" >
                                    <img src="Image/logo.png" alt="logo" />
                                </a>
                                {/* Search-bar :------------------*/}
                                <form className="cr-search">
                                    <div class="form-floating">
                                        <input className="search-input" type="text" placeholder="Search For items..." />
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected>All categories</option>
                                            <option value="1">Mens</option>
                                            <option value="2">Women</option>
                                            <option value="3">Electronics</option>
                                        </select>

                                    </div>
                                    <a href='#' className="search-btn">
                                        <span className='fs-6 text-white '> <FaSearch /></span>
                                    </a>


                                </form>
                                <div className="cr-right-bar ">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle cr-right-bar-item" href='#'>
                                                <span className='fs-4 me-2'><MdOutlineSupervisorAccount /></span>
                                                <span className='fs-6'>Account</span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="register.html">Register</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="checkout.html">Checkout</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="login.html">Login</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <a href="wishlist.html" className="cr-right-bar-item">
                                        <span className='fs-4 me-2'><BiLike /></span>
                                        <span className='fs-6'>Wishlist</span>
                                    </a>
                                    <a href='#' className="cr-right-bar-item Shopping-toggle">

                                        <span data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"  >
                                            <span className='fs-4 me-2'><CiShoppingCart /></span>
                                            <span className='fs-6'>Cart </span></span>

                                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                            <div class="offcanvas-header">
                                                <h5 id="offcanvasRightLabel">Your product List:-  </h5>
                                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div class="offcanvas-body d-flex">
                                               <img src='Image/f1.jpg' width={'80px'} height={'80px'} className='p-2'></img>
                                               <img src='Image/f2.jpg' width={'80px'} height={'80px'} className='p-2'></img>
                                               <img src='Image/f3.jpg' width={'80px'} height={'80px'} className='p-2'></img>
                                               <img src='Image/f4.jpg' width={'80px'} height={'80px'} className='p-2'></img>
                                            </div>
                                        </div>


                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Main Header:---------------------- */}


                <div className="cr-fix" id="cr-main-menu-desk">
                    <div className="container">
                        <div className="cr-menu-list">
                            <div className="cr-category-icon-block">

                                {/* Toggle:---------------------- */}






                                <a class="menu-toggle" data-bs-toggle="offcanvas d-none d-md-block d-lg-none" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"   >
                                    <div className="cr-category-menu">

                                        <div className="cr-category-toggle">
                                            <span className='fs-3 text-dark' ><CgMenuBoxed /></span>
                                        </div>
                                    </div>
                                </a>


                                <div class="offcanvas offcanvas-start " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <div>
                                            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                        </div>
                                        <div class="dropdown mt-3">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                                Dropdown button
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="cr-cat-dropdown">
                                    <div className="cr-cat-block">
                                        <div className="cr-cat-tab">
                                            <div className="cr-tab-list nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                                aria-orientation="vertical">
                                                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-home" type="button" role="tab"
                                                    aria-controls="v-pills-home" aria-selected="true">
                                                    Dairy &amp; Bakery</button>
                                                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-profile" type="button" role="tab"
                                                    aria-controls="v-pills-profile" aria-selected="false" tabindex="-1">
                                                    Fruits &amp; Vegetable</button>
                                                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-messages" type="button" role="tab"
                                                    aria-controls="v-pills-messages" aria-selected="false" tabindex="-1">
                                                    Snack &amp; Spice</button>
                                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-settings" type="button" role="tab"
                                                    aria-controls="v-pills-settings" aria-selected="false" tabindex="-1">
                                                    Juice &amp; Drinks </button>
                                                <a className="nav-link" href="shop-left-sidebar.html">
                                                    View All </a>
                                            </div>
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                                    aria-labelledby="v-pills-home-tab">
                                                    <div className="tab-list row">
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Dairy</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="shop-left-sidebar.html">Milk</a></li>
                                                                <li><a href="shop-left-sidebar.html">Ice cream</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Cheese</a></li>
                                                                <li><a href="shop-left-sidebar.html">Frozen
                                                                    custard</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Frozen
                                                                    yogurt</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Bakery</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="shop-left-sidebar.html">Cake and
                                                                    Pastry</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Rusk Toast</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Bread &amp;
                                                                    Buns</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Chocolate
                                                                    Brownie</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Cream Roll</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                                    aria-labelledby="v-pills-profile-tab">
                                                    <div className="tab-list row">
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Fruits</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="shop-left-sidebar.html">Cauliflower</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Bell
                                                                    Peppers</a></li>
                                                                <li><a href="shop-left-sidebar.html">Broccoli</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Cabbage</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Tomato</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Vegetable</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="shop-left-sidebar.html">Cauliflower</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Bell
                                                                    Peppers</a></li>
                                                                <li><a href="shop-left-sidebar.html">Broccoli</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Cabbage</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Tomato</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                                    aria-labelledby="v-pills-messages-tab">
                                                    <div className="tab-list row">
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Snacks</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="shop-left-sidebar.html">French
                                                                    fries</a></li>
                                                                <li><a href="shop-left-sidebar.html">potato
                                                                    chips</a></li>
                                                                <li><a href="shop-left-sidebar.html">Biscuits &amp;
                                                                    Cookies</a></li>
                                                                <li><a href="shop-left-sidebar.html">Popcorn</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Rice Cakes</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Spice</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="shop-left-sidebar.html">Cinnamon
                                                                    Powder</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Cumin
                                                                    Powder</a></li>
                                                                <li><a href="shop-left-sidebar.html">Fenugreek
                                                                    Powder</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Pepper
                                                                    Powder</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Long Pepper</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                                    aria-labelledby="v-pills-settings-tab">
                                                    <div className="tab-list row">
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Juice</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="shop-left-sidebar.html">Mango Juice</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Coconut
                                                                    Water</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Tetra Pack</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Apple
                                                                    Juices</a></li>
                                                                <li><a href="shop-left-sidebar.html">Lychee
                                                                    Juice</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="cr-col-title">soft drink</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="shop-left-sidebar.html">Breizh Cola</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Green Cola</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Jolt Cola</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Mecca Cola</a>
                                                                </li>
                                                                <li><a href="shop-left-sidebar.html">Topsia Cola</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="navbar navbar-expand-lg">

                                <div className="cr-header-buttons">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href='#'>
                                                <i className="ri-user-3-line"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="register.html">Register</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="checkout.html">Checkout</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="login.html">Login</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <a href="wishlist.html" className="cr-right-bar-item">
                                        <i className="ri-heart-line"></i>
                                    </a>
                                    <a href='#' className="cr-right-bar-item Shopping-toggle">
                                        <i className="ri-shopping-cart-line"></i>
                                    </a>
                                </div>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="index.html">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href='#'>

                                                Category

                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Shop Left
                                                        sidebar</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="shop-right-sidebar.html">Shop
                                                        Right
                                                        sidebar</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="shop-full-width.html">Full
                                                        Width</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href='#'>
                                                Products
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="product-left-sidebar.html">product
                                                        Left
                                                        sidebar </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="product-right-sidebar.html">product
                                                        Right
                                                        sidebar </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="product-full-width.html">Product
                                                        Full
                                                        Width
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href='#'>
                                                Pages
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="about.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="contact-us.html">Contact Us</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="cart.html">Cart</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="checkout.html">Checkout</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="track-order.html">Track Order</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="faq.html">Faq</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="login.html">Login</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="register.html">Register</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="policy.html">Policy</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href='#'>
                                                Blog
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="blog-left-sidebar.html">Left
                                                        Sidebar</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog-right-sidebar.html">Right
                                                        Sidebar</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog-full-width.html">Full
                                                        Width</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog-detail-left-sidebar.html">Detail
                                                        Left
                                                        Sidebar</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog-detail-right-sidebar.html">Detail
                                                        Right
                                                        Sidebar</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="blog-detail-full-width.html">Detail
                                                        Full
                                                        Width</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href='#'>
                                                Elements
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="elements-products.html">Products</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="elements-typography.html">Typography</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="elements-buttons.html">Buttons</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="cr-calling">
                                <i className="ri-phone-line"></i>
                                <a href='#'>+123 ( 456 ) ( 7890 )</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
