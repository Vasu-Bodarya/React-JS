import React from 'react'
import './Product.css'

// star
import {
    IoMdStar
}

    from "react-icons/io";

// beg
import {
    MdOutlineShoppingBag
}

    from "react-icons/md";

// heart
import {
    FaRegHeart
}

    from "react-icons/fa";

// eye
import {
    IoMdEye
}

    from "react-icons/io";

const Product = () => {
    return (<> <section className='py-5' >
        <div className="container" >
            <div className="row" >
                <div className="col-12 d-flex flex-wrap" >
                    <div className=" col-12 col-lg-6 " >
                        <div className="col-12 d-flex flex-wrap" >

                            <div className="col-12 col-sm-6 ps-2 pe-2" >
                                <div class="p-card card w-100" >
                                    <div className="pc-img" >
                                        <img src="./Image/b.jpg" class="card-img-top img-fluid" alt="..." />
                                        <div className="view" >
                                            <div className="view-btn m-1" >
                                                <FaRegHeart />
                                            </div>
                                            <div className="view-btn m-1"
                                            > <IoMdEye />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="beg" >
                                        <MdOutlineShoppingBag />
                                    </div>
                                    <div class="p-body card-body text-center p-0" >
                                        <a href="#" >vegetable</a>
                                        <div className="star pb-2" >
                                            <span className='fs-5' ><IoMdStar /></span>
                                            <span className='fs-5' ><IoMdStar /></span>
                                            <span className='fs-5' ><IoMdStar /></span>
                                            <span className='fs-5' ><IoMdStar /></span>
                                            <span className='fs-5' ><IoMdStar /></span>
                                            <small>(4.5)</small>
                                        </div>
                                        <h6><a href="#" >Best snakes with hazel nut mix pack 200gm</a> </h6>
                                        <p> <span>112</span> <span>12333</span> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 ps-2 pe-2" >
                                <div class="p-card card w-100" >
                                    <div className="pc-img" >
                                        <img src="./Image/c.jpg" class="card-img-top img-fluid" alt="..." />
                                        <div className="view" >
                                            <div className="view-btn m-1" >
                                                <FaRegHeart />
                                            </div>
                                            <div className="view-btn m-1" >
                                                <IoMdEye />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="beg" >
                                        <MdOutlineShoppingBag />
                                    </div>
                                    <div class="p-body card-body text-center p-0" >
                                        <a href="#" >vegetable</a>
                                        <div className="star pb-2" >
                                            <span className='fs-5' >
                                                <IoMdStar />
                                            </span>
                                            <span className='fs-5' >
                                                <IoMdStar />
                                            </span>
                                            <span className='fs-5' >
                                                <IoMdStar />
                                            </span>
                                            <span className='fs-5' >
                                                <IoMdStar />
                                            </span>
                                            <span className='fs-5' ><IoMdStar /></span>
                                            <small>(4.5)</small>
                                        </div>
                                        <h6><a href="#" >Sweet snakes crunchy nut mix 250gm pack</a> </h6>
                                        <p> <span>112</span>
                                            <span>12333</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className=" col-12 col-lg-6 " >
                        <div class="pd card" > <img src="Image/products-rightview.jpg" class="card-img-top img-fluid" style={
                            {
                                objectFit: "contain"
                            }
                        }

                            alt="..." />
                            <div class="col-5 text-end pd-body card-body " >
                                <h2>Organic & HealthyVegetables</h2>
                                <p><span className='fs-4 sp pe-1 ' >25%</span>OFF </p>
                                <div className="ShopBtn d-flex justify-content-end" >
                                    <a href="#" class="btn fs-6" >shop Now</a>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default Product



