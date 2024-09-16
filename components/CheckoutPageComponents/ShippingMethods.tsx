import React from 'react'
import { Form } from 'react-bootstrap'
import style from "../../styles/components/orderCheckout.module.scss"

const ShippingMethods = ({transportersList,handleUserAddressChange}:any) => {
  return (
    <>
        <h5 className=" fw-bolder">Shipping Methods</h5>
        <div className="row">
         <div className="col-md-6">        
            <Form.Group className="mb-3" controlId="state">
          <Form.Label>Preferred Transport</Form.Label>
          <Form.Select aria-label="transporter" name="transporter" onChange={(e) => handleUserAddressChange(e)}>
            <option>Select Transporter</option>    
            {transportersList.length>0 && transportersList?.map((val:any)=><option>{val}</option>)}    
          </Form.Select>
          <p className={` ${style.p_tag}`}>Transport will be subject to availability</p>
        </Form.Group></div>   
         <div className="col-md-6">            
         <Form.Group className="mb-3" controlId="remark">
        <Form.Label>Special remark (if any)</Form.Label>
        <Form.Control as="textarea" rows={1} name='remarks' onChange={(e) => handleUserAddressChange(e)}/>
      </Form.Group></div>   
        </div>

    </>
  )
}

export default ShippingMethods