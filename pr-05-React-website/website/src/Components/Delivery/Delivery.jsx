





















import React from 'react'
import "./Delivery.css"
import { RiRedPacketLine } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { MdAttachMoney } from "react-icons/md";
const Delivery = () => {
 return (
 <div>


 <div className='container'>

 <div className='row'>
 <div className='col-12 d-flex cr-provide '>

 <div className='col-3 cr-box'>
 <div className='cr-icon'>
 <span><RiRedPacketLine /></span>
 <h5>Prduct Packing</h5>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
 </div>

 </div>

 <div className='col-3 cr-box '>
 <div className='cr-icon'>
 <span><RiCustomerService2Fill /></span>
 <h5>24*7 support</h5>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
 </div>

 </div>

 <div className='col-3 cr-box '>
 <div className='cr-icon'>
 <span><LiaTruckMovingSolid /></span>
 <h5>Delivery in 5 day</h5>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
 </div>

 </div>

 <div className='col-3 cr-box '>
 <div className='cr-icon'>
 <span> <MdAttachMoney /></span>
 <h5>Payment Secure</h5>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
 </div>

 </div>

 </div>


 </div>

 </div>
 <img src='Image/shape-4.png' className='ball' />
 </div>

 )
}

export default Delivery








