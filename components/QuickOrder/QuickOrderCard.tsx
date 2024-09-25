import Image from 'next/image';
import { Placeholder } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import noDataImg from '../../public/assets/images/no-data.png';
import { imageLoader } from '../../utils/image_loader';
import IndianNumber from './IndianNumber';

type Props = any;

const QuickOrderCard = (props: Props) => {
  let total: any;
  const { data, itemList, selectedMultiLangData, removeItemFromQucikList, isLoading, handleQuantityChange } = props;
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
      {data?.map((itemData: any, index: any) => {
        const localItem = itemList?.find((item: any) => item.item_code === itemData?.name);
        return (
          <>
            <div className="col-md-2 col-12  " key={index}>
              {itemData?.image_url !== null ? (
                <Image
                  loader={imageLoader}
                  src={`${itemData?.image}`}
                  alt="product-img"
                  width={150}
                  height={150}
                  className="img-fluid p-2"
                />
              ) : (
                <Image
                  loader={imageLoader}
                  src={`${noDataImg?.src}`}
                  alt="product-img"
                  width={150}
                  height={150}
                  className="img-fluid p-2"
                />
              )}
            </div>
            <div className="col-md-7 col-12 mb-2 color-black fs-14 ">
              <p className="mb-0 quick-detail-lh">
                {' '}
                {selectedMultiLangData?.item_name}
                {itemData?.item_name}
              </p>
              <p className="mb-0 bold d-inline-flex fw-bolder">
                {selectedMultiLangData?.item_code}:<span>&nbsp;{itemData?.name}</span>
              </p>
              <div>
                <p className=" mb-0 quick-detail-lh d-inline-flex">
                  {selectedMultiLangData?.brand}:{' '}
                  <span>
                    {' '}
                    &nbsp;
                    {itemData?.brand}
                  </span>
                </p>
              </div>

              <div className="text-danger">
                <MdDelete
                  className="fs-4 "
                  onClick={() => {
                    removeItemFromQucikList(itemData?.name);
                  }}
                  style={{ cursor: 'pointer' }}
                />
                {selectedMultiLangData?.delete}
              </div>
            </div>
            <div className="col-md-1 col-12 ">
              <span className="d-block d-md-none">
                <b>{selectedMultiLangData?.price} :</b>
              </span>
              <p>
                {itemData?.price}
                {itemData?.price !== 0 ? (
                  <>
                    {itemData?.currency_symbol}
                    <IndianNumber value={itemData?.price} />
                  </>
                ) : (
                  <p className="border ">{selectedMultiLangData?.price_on_request}</p>
                )}
              </p>
            </div>
            <div className="col-md-1  col-8 mt-0">
              <div className="d-flex d-md-block">
                <span className="d-block d-md-none">
                  <b>{selectedMultiLangData?.quantity_c}:</b>
                </span>
                {
                  <>
                    <input
                      className="form-control w-100 mx-2 mx-md-0 text-center px-0"
                      value={showValue(localItem?.quantity)}
                      onChange={(e) => handleQuantityChange(itemData?.name, e.target.value)}
                    />
                    <br />
                  </>
                }
              </div>
            </div>
            <div className="col-md-1 col-6 my-2">
              <div className="d-flex d-md-block">
                <span className="d-block d-md-none">
                  <b>{selectedMultiLangData?.total} :</b>
                </span>
                {data?.currency_symbol}
                <IndianNumber value={(total = 10000 * showValue(localItem?.quantity))} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default QuickOrderCard;
