
import React from 'react'
import "./Slider2.css"

const Slider2 = () => {
    return (
        <div>
            <section class="section-deal padding-b-100">
                <div class="bg-banner-deal">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="cr-deal-rightside">
                                    <div class="cr-deal-content" data-aos="fade-up" data-aos-duration="2000">
                                        <span><code>35%</code> OFF</span>
                                        <h4 class="cr-deal-title">Great deal on organic food.</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan
                                            lacus
                                            vel facilisis. </p>
                                        <div id="timer" class="cr-counter">
                                            <div class="cr-counter-inner">
                                                <div className='cr-timer'>

                                                    <h4>265</h4> &nbsp;
                                                    <span id="days">Days:</span> &nbsp;
                                                </div>


                                                <div className='cr-timer'>
                                                    <h4>20</h4> &nbsp;
                                                    <span id="hours">Hrs:</span> &nbsp;


                                                </div>


                                                <div className='cr-timer'>
                                                    <h4>10</h4> &nbsp;
                                                    <span id="minutes"> Min:</span> &nbsp;


                                                </div>


                                                <div className='cr-timer'>
                                                    <h4>25</h4> &nbsp;
                                                    <span id="days">Sec:</span> &nbsp;
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

export default Slider2

