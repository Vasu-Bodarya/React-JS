import React from 'react'
import "./Blog.css"
const Blog = () => {
    return (
        <div>
            <section class="section-blog padding-b-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="mb-30" data-aos="fade-up" data-aos-duration="2000">
                                <div class="cr-banner">
                                    <h2>Latest News</h2>
                                </div>
                                <div class="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cr-blog-slider swiper-container">
                                <div class="swiper-wrapper d-flex m-3">

                                    <div class="swiper-slide m-3" data-aos="fade-up" data-aos-duration="2000">
                                        <div class="cr-blog">
                                            <div class="cr-blog-content">
                                                <span><code>By Admin</code> | <a href="blog-left-sidebar.html">Snacks</a></span>
                                                <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                                <a class="read" href="#">Read More</a>
                                            </div>
                                            <div class="cr-blog-image">
                                                <img src="Image/blog-1.jpg" alt="blog-2" />
                                                <div class="cr-blog-date">
                                                    <span>
                                                        10
                                                        <code>oct</code>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                   <div class="swiper-slide m-3" data-aos="fade-up" data-aos-duration="2000">
                                        <div class="cr-blog">
                                            <div class="cr-blog-content">
                                                <span><code>By Admin</code> | <a href="blog-left-sidebar.html">Snacks</a></span>
                                                <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                                <a class="read" href="#">Read More</a>
                                            </div>
                                            <div class="cr-blog-image">
                                                <img src="Image/blog-2.jpg" alt="blog-2" />
                                                <div class="cr-blog-date">
                                                    <span>
                                                        10
                                                        <code>oct</code>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="swiper-slide m-3" data-aos="fade-up" data-aos-duration="2000">
                                        <div class="cr-blog">
                                            <div class="cr-blog-content">
                                                <span><code>By Admin</code> | <a href="blog-left-sidebar.html">Snacks</a></span>
                                                <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                                <a class="read" href="#">Read More</a>
                                            </div>
                                            <div class="cr-blog-image">
                                                <img src="Image/blog-3.jpg" alt="blog-2" />
                                                <div class="cr-blog-date">
                                                    <span>
                                                        12
                                                        <code>oct</code>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="swiper-slide m-3" data-aos="fade-up" data-aos-duration="2000">
                                        <div class="cr-blog">
                                            <div class="cr-blog-content">
                                                <span><code>By Admin</code> | <a
                                                    href="blog-left-sidebar.html">Vegetable</a></span>
                                                <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>
                                                <a class="read" href="#">Read More</a>
                                            </div>
                                            <div class="cr-blog-image">
                                                <img src="Image/blog-4.jpg" alt="blog-3" />
                                                <div class="cr-blog-date">
                                                    <span>
                                                        22
                                                        <code>jan</code>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
