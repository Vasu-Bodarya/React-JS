import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Axios = () => {

  const [product, setPreoduct] = useState([]);

  const getData = async () => {
    let record = await axios.get('https://dummyjson.com/products')
    setPreoduct(record.data.products);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <div>
        <Link to={"/"} ><button className="mt-4 btn btn-warning text-white">Click and Go to Fetch method</button></Link>
      </div>
      <div className="d-flex flex-wrap justify-content-between"  >
        {
          product.map((val) => {
            return (
              <>
                <div className="w-25 p-2 h-100 text-center" >
                  <div className="p-2 border border-1" style={{ backgroundColor: ' #CDDDF7' }}>
                    <div className="card-title text-secondary fs-5 fw-bolder ">
                      {val.id} . {val.title}
                    </div>
                    <div>
                      < img src={val.thumbnail} width={'200px'} />
                    </div>
                    <h3 >{val.brand}</h3>
                    <h3>{val.warrantyInformation}</h3>
                    <p> Rating: {val.rating}/5</p>
                    <div className="card-body text-white pt-2">
                      {val.body}
                    </div>
                    <p className="text-info">Price: {val.price}</p>
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

export default Axios