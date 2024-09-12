import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currency_selector_state } from '../store/slices/general_slices/multi-currency-slice';
import styles from '.././styles/components/myOrders.module.scss';
import noDataImg from '.././public/assets/images/no-data.png';

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
                <Link href={`myOrder/${data?.name}`} legacyBehavior className="">
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

            <div className="d-flex align-items-center row">
              <div className="mb-3 mb-sm-0 col-lg-2 col-md-2 col-4 mt-0">
                <div className="product-img">
                  <Image
                    src={data?.img ? '' : noDataImg.src}
                    className="product_img img-fluid orderdetail_img cart-image"
                    alt="product-img"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="product_item_details col-lg-6 col-md-7 col-8">
                <div className="d-flex orderDetail-card">
                  <div className="flex-fill">
                    <Link href="#" legacyBehavior>
                      <a className="text-decoration-none text-black fw-bold fs-13">
                        <b>{detail?.item_name}</b>
                      </a>
                    </Link>
                    <table width="100%" className="mt-1 table table-borderless">
                      <tbody>
                        <tr className=" ">
                          <td className="p-0 m-0">
                            <p className="text-capitalize m-0  ">{selectedMultiLangData?.item_code}</p>
                          </td>
                          <td width="85%" className="p-0 m-0">
                            <p className="text-capitalize m-0  ">: {detail?.name}</p>
                          </td>
                        </tr>

                        <tr className=" ">
                          <td className="p-0 m-0">
                            <p className="text-capitalize m-0">{selectedMultiLangData?.price}</p>
                          </td>
                          <td width="85%" className="p-0 m-0">
                            <p className="text-capitalize m-0  ">
                              {detail?.prod_info[1]?.value !== 0 ? (
                                <p className=" p-0 m-0">
                                  {' '}
                                  : {data?.currency_symbol} {detail.prod_info[1]?.value}
                                </p>
                              ) : (
                                <p className="border m-0">{selectedMultiLangData?.price_on_request}</p>
                              )}
                            </p>
                          </td>
                        </tr>

                        <tr className="item_options myorder_tr">
                          <td className="px-0 py-0 pb-0 myorder_td">
                            <p className="text-capitalize m-0  ">{selectedMultiLangData?.quantity}</p>
                          </td>
                          <td width="85%" className="px-0 py-0 pb-0 myorder_width">
                            <p className="text-capitalize m-0  ">: {detail?.prod_info[2]?.value}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {isDealer && (
                <div className="col-lg-4 col-md-7 col-8">
                  {data.shipping_method.transporter === null ||
                  data?.shipping_method?.door_delivery === null ||
                  data?.shipping_method?.godown_delivery === null ||
                  data?.shipping_method?.location === null ||
                  data?.shipping_method?.remarks === null ||
                  data?.shipping_method?.transport_charges === null ? (
                    ''
                  ) : (
                    <h5 className="data_heading mb-1">{selectedMultiLangData?.shipping_method}</h5>
                  )}

                  <div>
                    {data.shipping_method.transporter === null ? (
                      ' '
                    ) : (
                      <p className="mb-0">
                        {selectedMultiLangData?.transporter} : {data.shipping_method.transporter}
                      </p>
                    )}

                    {data?.shipping_method?.door_delivery === 0 && data?.shipping_method?.godown_delivery === 0 ? (
                      <p className="mb-0"> {selectedMultiLangData?.door_delivery_yes}</p>
                    ) : (
                      ''
                    )}
                    {data?.shipping_method?.door_delivery === 0 && data?.shipping_method?.godown_delivery !== 0 ? (
                      <>
                        <p className="mb-0"> {selectedMultiLangData?.godown_delivery}</p>
                        {data?.shipping_method.location === null ? (
                          ''
                        ) : (
                          <p className="mb-0">
                            {selectedMultiLangData?.location} : {data?.shipping_method?.location}
                          </p>
                        )}
                      </>
                    ) : (
                      ''
                    )}

                    {data?.shipping_method?.remarks === null ? (
                      ''
                    ) : (
                      <p className="mb-0">
                        {selectedMultiLangData?.remark} : {data?.shipping_method?.remarks}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {isDealer ? (
                <div className="col-lg-4 col-md-2 col-12 ">
                  <button className="btn btn-link text-decoration-none mb-2  text-uppercase ">
                    <Link href={`${detail?.product_url}?currency=${currency_state_from_redux?.selected_currency_value}`} legacyBehavior>
                      <a className="text-decoration-none"> {selectedMultiLangData?.view_product}</a>
                    </Link>
                  </button>
                </div>
              ) : (
                <>
                  <div className="col-lg-4 col-md-2 col-12 text-end ">
                    <button className=" btn btn-link text-decoration-none mb-2 text-uppercase ">
                      <Link href={`${detail?.product_url}?currency=${currency_state_from_redux?.selected_currency_value}`} legacyBehavior>
                        <a className="text-decoration-none fs-14">
                          {' '}
                          <b>{selectedMultiLangData?.view_product}</b>
                        </a>
                      </Link>
                    </button>
                  </div>
                </>
              )}
            </div>
            {/* <div className="row">
              <div className="mt-0 col-sm-12"></div>
            </div> */}
            {/* <hr className="d-block hr_orderdetail" /> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default MyOrderCard;
