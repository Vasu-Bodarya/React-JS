
import { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { Link } from "react-router-dom";
const Fetch = () => {

    const [post, setPost] = useState([]);

    const getProduct = async () => {
        let all = await fetch('https://dummyjson.com/posts', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let res = await all.json();
        setPost(res.posts);
    }

    useEffect(() => {
        getProduct()
    }, [])


    return (
        <>
            <div>
                <Link to={"/Axios"}><button className="mt-4 btn btn-warning text-white">Click and Go to  axios method</button></Link>
            </div>
            <div className="d-flex flex-wrap justify-content-between"  >
                {
                    post.map((val) => {
                        return (
                            <>
                                <div className="w-50 p-2 " >
                                    <div className="p-2">
                                        <div className="card-title text-secondary fs-5 fw-bolder">
                                            {val.id} . {val.title}
                                        </div>
                                        <div className="card-body  pt-2">
                                            {val.body}
                                        </div>
                                        <div className="icons d-flex mt-3">
                                            <div className='d-flex align-items-center  px-3'>{val.reactions.likes}&nbsp;<AiOutlineLike className="text-info" /></div>
                                            <div className='d-flex align-items-center '>{val.reactions.dislikes}<AiOutlineDislike className="text-danger" /></div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Fetch