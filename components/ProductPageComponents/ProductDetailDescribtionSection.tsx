import React from 'react';
import styles from '../../styles/components/productDetail.module.scss';
import Link from 'next/link';
import { FaWhatsapp, FaShareAlt, FaRegCheckCircle, FaWindowClose } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import StarRating from './StarRating';
import { object } from 'yup';

const ProductDetailDescribtionSection = ({ productDetailData, quantity, pinCode, setQuantity }: any) => {
  const handleChange = (value: any) => {
    setQuantity(value.target.value);
  };

  const handleAddToCart = () => {};
  return (
    <>
      <div className="border-bottom">
        <b className={`${styles.name}`}>{productDetailData?.item_name}</b>
        <div className="">{productDetailData?.rating && <StarRating rating={productDetailData?.rating} />}</div>
        <p className="mb-0">Item code: {productDetailData?.name}</p>
        <div>
          <span className={`text-dark  ${styles.price}`}>{`₹ ${productDetailData?.price}`}</span>
          <del className={`text-dark ps-2 ${styles.price}`}>{`₹ ${productDetailData?.mrp_price}`}</del>
        </div>
        {Array.isArray(productDetailData?.features)
          ? ''
          : productDetailData?.features &&
            Object?.keys(productDetailData?.features)?.length > 0 && (
              <div className="mt-2">
                <ul>
                  {productDetailData?.features?.values?.length > 0
                    ? productDetailData?.features?.values?.map((item: any, index: any) => (
                        <li key={index} className={`${styles.features} my-1`}>
                          {item?.description}
                        </li>
                      ))
                    : ''}
                </ul>
              </div>
            )}

        <Link href="#" className={` ${styles.priceOnReq}`}>
          Price on Request
        </Link>
        <p className={`text-uppercase m-0 ${styles.detailSection}`}>
          Brand : <span> {productDetailData?.brand} </span>
        </p>
        <p className={`text-uppercase m-0 ${styles.detailSection}`}>
          HSN code : <span> {productDetailData?.gst_hsn_code} </span>
        </p>
        <div className="my-1">
          <span className={`fw-bold ${styles.avalibility}`}>
            <FaRegCheckCircle className={`text-success me-1 ${styles.stockSection}`} size={'1rem'} />
            Available
          </span>

          <span className={`mx-2 fw-bold  ${styles.avalibility}`}>
            <FaWindowClose className={`text-danger me-1 ${styles.stockSection}`} size={'1rem'} />
            Out of Stock
          </span>
        </div>
      </div>
      <div>
        <p className={`my-1 ${styles.detailPriceSection}`}>
          SKU CODE : <span>{productDetailData?.sku_code}</span>
        </p>
        <div className={`my-1 ${styles.detailPriceSection}`}>
          <label htmlFor="productQuantity">Quantity:</label>
          {productDetailData?.min_order_qty && (
            <input
              className={`ms-2 rounded-1 ${styles.input} ${styles.detailPriceSection}`}
              id="productQuantity"
              type="number"
              min={productDetailData?.min_order_qty}
              value={10}
              onChange={handleChange}
            />
          )}
        </div>

        <p className="my-1">
          Minimum Order Quantity:{' '}
          <span className={productDetailData?.min_order_qty > quantity ? 'text-danger' : 'text-success'}>
            {productDetailData?.min_order_qty}
          </span>
        </p>
        <button onClick={handleAddToCart} className={`border-0 px-5 py-2 rounded-1 my-3 ${styles.buttonBackGround}`}>
          Add to Cart
        </button>
        <div className="d-flex my-1 ">
          <div className="mx-2 my-1">
            <FaShareAlt fontSize={'20px'} />
          </div>

          <div className="mx-2 my-1">
            <a href={`https://wa.me/?text=${encodeURIComponent('Check this out!')}`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp color="#25D366" fontSize={'20px'} />
            </a>
          </div>

          <div className="mx-2 my-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaSquareInstagram color="#C13584" fontSize={'20px'} />
            </a>
          </div>

          <div className="mx-2 my-1">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <BsTwitterX fontSize={'20px'} />
            </a>
          </div>
        </div>
        <div className="my-1">
          <label htmlFor="pincode" className="">
            Enter Your Pincode Below To Check the Delievry
          </label>
          <input className="d-block form-control w-50" id="pincode" value={pinCode} placeholder="Enter the Pincode" />
        </div>
      </div>
    </>
  );
};

export default ProductDetailDescribtionSection;
