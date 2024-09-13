import Link from 'next/link';
import noDataImg from '.././public/assets/images/no-data.png';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { currency_selector_state } from '../store/slices/general_slices/multi-currency-slice';
import { imageLoader } from '../utils/image_loader';

const MyOrderCardDetailCard = ({ detail, data, selectedMultiLangData, isDealer }: any) => {
  console.log(data, selectedMultiLangData, isDealer, detail);
  const currency_state_from_redux: any = useSelector(currency_selector_state);
  return (
    <div className="d-flex align-items-center row">
      <div className="mb-3 mb-sm-0 col-lg-2 col-md-2 col-4 mt-0">
        <div className="product-img">
          <Image
            loader={detail?.img ? imageLoader : undefined}
            src={detail?.img ? detail?.img : noDataImg.src}
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
  );
};

export default MyOrderCardDetailCard;
