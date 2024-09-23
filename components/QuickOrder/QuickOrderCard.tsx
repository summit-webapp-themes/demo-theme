import Image from 'next/image';
import React from 'react';
import { imageLoader } from '../../utils/image_loader';
import Link from 'next/link';
import IndianNumber from './IndianNumber';
import noDataImg from '../../public/assets/images/no-data.png';
import { MdDelete } from 'react-icons/md';
import { Placeholder } from 'react-bootstrap';

type Props = any;

const QuickOrderCard = (props: Props) => {
  let total: any;
  const { data, selectedMultiLangData, handleRemove, isLoading } = props;
  const showValue = (qty_value: any) => {
    if (qty_value === 0) {
      return 1;
    } else {
      return qty_value;
    }
  };
  if (isLoading) {
    return (
      <div className="row">
        {Array.from({ length: 3 }).map((item: any, index: any) => {
          return (
            <>
              <div className="col-lg-2 col-12 text-inline-start ps-lg-0 products-name cart-image" key={index}>
                <Placeholder animation="glow" className="m-2">
                  <Placeholder style={{ width: '90%', height: 100 }} />
                </Placeholder>
              </div>
              <div className="col-lg-10 col-12 mb-2 color-black fs-14 p-2">
                <Placeholder animation="glow">
                  <Placeholder style={{ width: '70%', height: 20 }} className="mx-2 d-block rounded-1" />
                  <Placeholder style={{ width: '40%', height: 20 }} className="m-2 d-block rounded-1" />
                  <Placeholder style={{ width: '40%', height: 20 }} className="m-2 d-block rounded-1" />
                </Placeholder>
              </div>
            </>
          );
        })}
      </div>
    );
  }
  return (
    <>
      {data?.map((data: any, index: any) => (
        <>
          <div className="col-lg-2 col-12 d-flex justify-content-center ps-lg-0 products-name cart-image" key={index}>
            {data.image_url !== null ? (
              <Image
                loader={imageLoader}
                src={`${data.image}`}
                // src={maximaCard}
                alt="product-img"
                width={150}
                height={150}
                className="img-fluid p-2"
              />
            ) : (
              <Image
                loader={imageLoader}
                src={`${noDataImg?.src}`}
                // src={maximaCard}
                alt="product-img"
                width={150}
                height={150}
                className="img-fluid p-2"
              />
            )}
          </div>
          <div className="col-lg-7 col-12 mb-2 color-black fs-14 ">
            <p className="mb-0 quick-detail-lh">
              {' '}
              {selectedMultiLangData?.item_name}
              {data.item_name}
            </p>
            <p className="mb-0 bold d-inline-flex fw-bolder">
              {selectedMultiLangData?.item_code}:<span>&nbsp;{data.name}</span>
            </p>
            <div>
              <p className=" mb-0 quick-detail-lh d-inline-flex">
                {selectedMultiLangData?.brand}:{' '}
                <span>
                  {' '}
                  &nbsp;
                  {data.brand}
                </span>
              </p>
            </div>

            <div className="text-danger">
              <MdDelete
                className="fs-4 "
                onClick={() => {
                  handleRemove(data?.name);
                }}
                style={{ cursor: 'pointer' }}
              />
              {selectedMultiLangData?.delete}
            </div>
          </div>
          <div className="col-lg-1 col-12 mx-lg-0 mx-0 price_font_family color-black quick-order-mg">
            <p>
              {data.price !== 0 ? (
                <>
                  {data.currency_symbol}
                  <IndianNumber value={data?.price} />
                </>
              ) : (
                <p className="border price_request">{selectedMultiLangData?.price_on_request}</p>
              )}
            </p>
          </div>
          <div className="col-lg-1 col-6 products-name d-inline-flex justify-content-center align-items-start mt-0">
            {
              <>
                <input
                  className="w-50  text-center mb-3 qt-margins"
                  value={showValue(data?.min_order_qty)}
                  // onChange={(e) => handleInputChange(e, index)}
                />
                <br />
              </>
            }
          </div>
          <div className="col-lg-1 col-12 mx-lg-0 mx-4 price_font_family products-name mb-3 d-inline-flex justify-content-center">
            {data.currency_symbol}
            <IndianNumber value={(total = data.price * showValue(data?.min_order_qty))} />
          </div>
        </>
      ))}
    </>
  );
};

export default QuickOrderCard;
