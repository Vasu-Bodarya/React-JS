import React, { useState } from 'react'
import './Popular.css'
import { popularList, PopularData } from './Popular-data';
// arow
import { FaArrowRight } from "react-icons/fa6";
// star
import { IoMdStar } from "react-icons/io";
// beg
import { MdOutlineShoppingBag } from "react-icons/md";
// heart
import { FaRegHeart } from "react-icons/fa";
// eye
import { IoMdEye } from "react-icons/io";


const Popular = () => {
    const [Plist, setPlist] = useState(popularList)
    const [PData, setPdata] = useState(PopularData)

    const FilterBtn = (data) => {
        if (data === "All") {
            setPdata(PopularData)
        } else {
            const filterData = PopularData.filter((item) => item.cat === data)
            setPdata(filterData)

        }
    }
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pb-5 ">
                            <div className="title text-center">
                                <h1>Popular Products</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-12 d-flex flex-wrap">
                            <div className="col-12 col-lg-3 p-1 d-flex flex-wrap">

                                <div className="col-12 col-sm-6 col-lg-12 ">
                                    <div className="p-list">
                                        <ul>
                                            <li>
                                                <button className='text-start' onClick={() => FilterBtn("All")}>All</button>
                                            </li>
                                        </ul>
                                        {
                                            Plist.map((item) => {
                                                return (
                                                    <ul>
                                                        <li>
                                                            <button className='text-start' onClick={() => FilterBtn(item.name)}>
                                                                {item.name}</button>

                                                        </li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div className="d-none d-sm-flex col-sm-6 col-lg-12 ">
                                    <div className="p-img rounded">
                                        <img src="Image/product-banner.jpg" className='img-fluid' alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-9">
                                <div className="col-12 d-flex flex-wrap">
                                    {
                                        PData.map((p) => {
                                            return (
                                                <div className="col-12 col-md-6 col-lg-4 p-2">
                                                    <div class="p-card card ">
                                                        <div className="pc-img">
                                                            <img src={p.img} class="card-img-top img-fluid " alt="..." />
                                                            <div className="view">
                                                                <div className="view-btn m-1">
                                                                    <FaRegHeart />
                                                                </div>
                                                                <div className="view-btn m-1">
                                                                    <IoMdEye />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="beg">
                                                            <MdOutlineShoppingBag />
                                                        </div>
                                                        <div class="p-body card-body text-center p-0">

                                                            <a href="#" className='cat'>{p.cat}</a>
                                                            <div className="star pb-2">
                                                                <span className='fs-5'><IoMdStar /></span>
                                                                <span className='fs-5'><IoMdStar /></span>
                                                                <span className='fs-5'><IoMdStar /></span>
                                                                <span className='fs-5'><IoMdStar /></span>
                                                                <span className='fs-5'><IoMdStar /></span>
                                                                <small>(4.5)</small>

                                                            </div>
                                                            <h6><a href="#">{p.disc}</a>
                                                            </h6>
                                                            <p>
                                                                <span>{p.price1}</span>
                                                                <span>{p.price2}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Popular



