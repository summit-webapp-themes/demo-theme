import React from 'react'
import styles from '../../styles/components/productDetail.module.scss';


const CheckStockAvailabilityBtn = ({ handleStockAvailabilityData, quantity }: any) => {
    console.log(quantity, 'item')
    return (
        <button onClick={() => handleStockAvailabilityData(quantity)} className={`border-0 px-5 mx-3 py-2 rounded-1 my-3 ${styles.buttonBackGround}`}>
            Check Availability
        </button>
    )
}

export default CheckStockAvailabilityBtn