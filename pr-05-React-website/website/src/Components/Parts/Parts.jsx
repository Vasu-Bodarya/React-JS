
import React from 'react'
import "./Parts.css"

const Parts = () => {
    return (
        <div>
            <section class="part">
                <div class="container">
                    <div class="row ">

                        <div class="col-12 py-10 col-sm-12 col-sm-6 col-lg-6 col-xl-4">
                            <div class="products">
                                <img src="Image/p-b-1.jpg" />

                                <div class="col-5 wsm-6col-sm-6 wlg-5 product-content">
                                    <span>
                                        Healthy
                                    </span>
                                    <h5>
                                        bakery product
                                    </h5>
                                    <span className='off'>30%</span> off
                                    <br />
                                    <a href="#" class="shop">Shop now
                                        <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 py-10 col-sm-12 col-sm-6 col-lg-6 col-xl-4">
                            <div class="products">
                                <img src="Image/p-b-2.jpg" />

                                <div class="col-5 wsm-6col-sm-6 wlg-5 product-content">
                                    <span>
                                        fresh
                                    </span>
                                    <h5>
                                        snakes & sweet
                                    </h5>
                                    <span className='off'>20%</span> off
                                    <br />
                                    <a href="#" class="shop">Shop now
                                        <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 py-10col-sm-12 col-sm-6 col-lg-6 col-xl-4">
                            <div class="products">
                                <img src="Image/p-b-3.jpg" />

                                <div class="col-5 col-sm-6 col-sm-6 wlg-5 product-content">
                                    <span>
                                        fresh
                                    </span>
                                    <h5>
                                        organic fruits
                                    </h5>
                                    <span className='off'>50%</span> off
                                    <br />
                                    <a href="#" class="shop">Shop now
                                        <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>

    )
}

export default Parts



