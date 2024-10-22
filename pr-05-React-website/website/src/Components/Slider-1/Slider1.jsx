import React from 'react'
import "./Slider1.css"



const Slider = () => {
    return (
        <div className='pb-5'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 mt-3'>
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className='banner-01 position-relative'>

                                        <img src="Image/banner-leaf.png" alt="" />
                                        <img src="Image/banner-orange.png" alt="" height={50} width={80}
                                            className='position-absolute m-5 end-50 opacity:-5 swing'
                                        />
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='banner-content mb-4'>
                                                    <span className='detail'>100%</span> &nbsp; organic vagetable
                                                    <h2 className='mb-4 mt-4'>The best Way to <br></br>Stuff Your Wallet</h2>
                                                    <p className='b-con mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Amet reiciendis
                                                        beatae consequuntur.</p>
                                                    <button className="banner-btn mb-4">Shop Now</button>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="Image/banner-down.png" alt="" className='cherry' />

                                        <img src="Image/cherry.png" alt="" className='third' />
                                    </div>
                                </div>




                                <div class="carousel-item">
                                    <div className='banner-02  position-relative'>

                                        <img src="Image/banner-leaf.png" alt="" />
                                        <img src="Image/banner-orange.png" alt="" height={50} width={80}
                                            className='position-absolute m-5 end-50 opacity:-5 swing'
                                        />
                                        <div className='container'>
                                            <div className='row'>

                                                <div className='banner-content mb-4'>
                                                    <span className='detail-1'>100%</span>&nbsp; organic fruits
                                                    <h2 className='mb-4 mt-4'>Explore Fresh &<br></br> juicy Fruits</h2>
                                                    <p className='b-con-1 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Amet reiciendis
                                                        beatae consequuntur.</p>
                                                    <button className="banner-btn mb-4">Shop Now</button>

                                                </div>
                                            </div>
                                        </div>
                                        <img src="Image/banner-down.png" alt="" className='cherry' />

                                        <img src="Image/cherry.png" alt="" className='third' />
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Slider


