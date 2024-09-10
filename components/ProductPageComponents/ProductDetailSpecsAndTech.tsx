import React from 'react';
import styles from '../../styles/components/productDetail.module.scss';
import Image from 'next/image';
import img from '../../public/assets/images/error-icon.png';

const ProductDetailSpecsAndTech = ({ productDetailData, tab, setTab }: any) => {
  const specifications = productDetailData?.prod_specifications?.find((item: any) => item.name === 'Specifications');
  const technologies = productDetailData?.prod_specifications?.find((item: any) => item.name === 'Technologies');
  console.log(specifications, technologies);
  return (
    <>
      {productDetailData?.prod_specifications?.length > 0 && (
        <div className="row">
          <ul className="nav nav-tabs d-flex justify-content-center">
            {
              <li className="nav-item" onClick={() => setTab('SPECIFICATION')}>
                <div className={`nav-link ${tab === 'SPECIFICATION' ? 'active' : ''}`} aria-current="page">
                  SPECIFICATION
                </div>
              </li>
            }

            {technologies?.details?.length > 0 && (
              <li className="nav-item" onClick={() => setTab('TECHNOLOGIES')}>
                <div className={`nav-link ${tab === 'TECHNOLOGIES' ? 'active' : ''}`} aria-current="page">
                  TECHNOLOGIES
                </div>
              </li>
            )}
          </ul>
          <div className="row mt-3">
            {tab === 'SPECIFICATION' &&
              specifications?.values?.length > 0 &&
              specifications?.values?.map((item: any, index: any) => (
                <div key={index} className="col-lg-6">
                  <table className="table">
                    <div className="row">
                      <div className={`col-5 text-start px-3 ${styles.specName}`}>{item.name}</div>
                      <div className="col-1"></div>
                      <div className={`col-6 text-start px-3 ${styles.specValue}`}>{item.values}</div>
                    </div>
                  </table>
                </div>
              ))}
          </div>
          <div className="row mt-3">
            {tab === 'TECHNOLOGIES' &&
              technologies?.details?.length > 0 &&
              technologies.details.map((item: any, index: any) => (
                <div key={index} className="col-lg-3 col-md-6 my-3 my-lg-0">
                  <div className="card h-100">
                    <Image
                      src={item.image ? `${process.env.NEXT_PUBLIC_API_URL}/${item.image}` : img.src}
                      alt="Image"
                      className="card-img-top"
                      width={100}
                      height={200}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item?.name}</h5>
                      <p className="card-text">{item?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailSpecsAndTech;
