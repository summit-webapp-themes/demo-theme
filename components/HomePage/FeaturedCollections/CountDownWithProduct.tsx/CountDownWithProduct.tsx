import React from 'react';
import CountDownComponent from '../CountDown/CountDownComponent';
import Image from 'next/image';
import helmetImage from '../../../../public/assets/images/Screenshot 2024-10-10 174156.png';
import styles from '../.././../../styles/components/home.module.scss';
import { FaCartPlus } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr';

type Props = {};

const CountDownWithProduct = (props: Props) => {
  return (
    <div className="card border-0">
      <div className={`conatiner p-0 ${styles.productWithCountDowmConatiner}`}>
        <div className="d-flex justify-content-center align-items-center flex-column my-5">
          <div className="w-100">
            <CountDownComponent />
          </div>
          <div className="w-100">
            <Image src={helmetImage.src} width={500} height={500} alt="product image" className="w-100" />
          </div>
          <div className="w-100">
            <div className="row">
              <div className=" col-6">
                <button className={`${styles.addToCart} me-1`}>
                  <FaCartPlus /> add to card
                </button>
              </div>
              <div className="col-3">
                <button className={`${styles.addToCart} mx-1`}>
                  <FaRegHeart />
                </button>
              </div>
              <div className="col-3">
                <button className={`${styles.addToCart} ms-1`}>
                  <GrGallery />
                </button>
              </div>
              <div className="text-center my-2">
                <p className="fw-bold">Motorcycle Helmet Black</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownWithProduct;
