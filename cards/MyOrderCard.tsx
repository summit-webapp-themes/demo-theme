import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currency_selector_state } from '../store/slices/general_slices/multi-currency-slice';
import styles from '.././styles/components/myOrders.module.scss';
import noDataImg from '.././public/assets/images/no-data.png';
import MyOrderCardDetailCard from './MyOrderCardDetailCard';

function MyOrderCard({ data, selectedMultiLangData }: any) {
  console.log(data, 'dattttttttt');
  const [isDealer, setIsDealer] = useState(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      const checkIsDealer = localStorage.getItem('isDealer');
      if (checkIsDealer === 'true') {
        setIsDealer(true);
      }
    }
  }, []);
  const currency_state_from_redux: any = useSelector(currency_selector_state);
  return (
    <>
      <div key={data.id}>
        <div className="card-header ">
          <div className="row">
            <div className=" mb-sm-0 col-md-2 col-6 ">
              <p className="text-uppercase   m-0">{selectedMultiLangData?.order_placed}</p>
              <p className="gray  m-0">{data?.transaction_date?.split('-')?.reverse()?.join('/')}</p>
            </div>
            <div className=" col-md-2 col-6 order-div">
              <p className="text-uppercase gray  m-0"> {selectedMultiLangData?.total_price}</p>
              {data?.total === 0 ? (
                <p className="border price_request">{selectedMultiLangData?.price_on_request}</p>
              ) : (
                <p className="gray  m-0 price_font_family">
                  {data?.currency_symbol} {data?.total}
                </p>
              )}
            </div>
            <div className="col-md-2 col-4 order-cards">
              <p className="text-uppercase gray  m-0">{selectedMultiLangData?.ship_to}</p>
              {data?.addresses?.map((personAddress: any, index: number) => (
                <div className="dropdown text-dark fw-bold" key={index}>
                  {personAddress?.name === 'Shipping Address'
                    ? personAddress?.values.map((addr: any) => (
                        <div key={addr.address_id}>
                          <a
                            className="dropdown-toggle p-0 bold text-dark text-decoration-none"
                            role="button"
                            id="ship_to"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {personAddress?.name}
                          </a>
                          <ul className="dropdown-menu " aria-labelledby="ship_to">
                            <li className="ps-1 pe-1 mb-0 ">{addr?.address_title}</li>
                            <li className="ps-1 pe-1 mb-0 ">{addr?.address_1}</li>
                            <li className="ps-1 pe-1 mb-0">{addr?.address_2}</li>
                            <li className="ps-1 pe-1 mb-0">
                              {addr?.city} - {addr?.postal_code}
                            </li>
                            <li className="ps-1 pe-1 mb-0">{addr?.country}</li>
                            <li className="ps-1 pe-1 mb-0">
                              {selectedMultiLangData?.mobile_number}: {addr?.contact}
                            </li>
                          </ul>
                        </div>
                      ))
                    : null}
                </div>
              ))}
            </div>
            <div className="text-end col-md-4 col-4 order-cards  ">
              <p className=" pt-2 mb-0 fs-13">
                {selectedMultiLangData?.orders} # {data?.name}
              </p>
            </div>

            <div className="col-md-2 col-4 ">
              <div className={`d-flex justify-content-center justify-content-center ${styles.orderDetails}`}>
                <Link href={`my-orders/${data?.name}`} legacyBehavior className="">
                  {selectedMultiLangData?.order_details?.toUpperCase()}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {data?.order_details?.map((detail: any) => (
          <div className="cart_item cart_item-myorder-m py-1 px-3 order_cartdetails" key={detail?.item_name}>
            <div className="d-flex mb-2 pb-0">
              <div className="flex-fill">
                <h6 className={`text-capitalize mb-0 mt-2 d-inline-flex text-success ${styles.status}`}>
                  <b>
                    <div>{selectedMultiLangData?.status} </div>
                  </b>
                  <b>
                    <div>&nbsp;: {data?.payment_status}</div>
                  </b>
                </h6>
              </div>
              <div className="justify-content-end d-none d-sm-block align-items-end"></div>
            </div>
            <MyOrderCardDetailCard detail={detail} data={data} selectedMultiLangData={selectedMultiLangData} isDealer={isDealer} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MyOrderCard;
