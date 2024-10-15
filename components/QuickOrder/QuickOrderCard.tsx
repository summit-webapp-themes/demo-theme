import Image from 'next/image';
import { Placeholder } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import noDataImg from '../../public/assets/images/no-data.png';
import { imageLoader } from '../../utils/image_loader';
import IndianNumber from './IndianNumber';
import styles from '../../styles/components/home.module.scss';

type Props = any;

const QuickOrderCard = (props: Props) => {
  let total: any;
  const { data, itemList, selectedMultiLangData, removeItemFromQucikList, isLoading, handleQuantityChange, minQuntityWarning, error } =
    props;
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

  return data?.map((item: any, index: number) => {
    const localItem = itemList?.find((itemValue: any) => itemValue.item_code === item?.name);
    console.log(item, 'iiiiiiii');
    return (
      <div className="row mt-3 ms-2" key={index}>
        <div className="col-lg-2 col-md-12">
          {item?.image ? (
            <Image
              src={item?.image}
              alt="product image"
              width={150}
              height={150}
              // loader={imageLoader}
              className={`w-100 ${styles.cartImage}`}
            />
          ) : (
            <Image src={noDataImg.src} alt="product image" width={150} height={150} />
          )}
        </div>
        <div className="col-lg-7 col-md-12">
          {item?.item_name} <br />
          <b>
            {selectedMultiLangData?.item_code}: {item?.name}
          </b>
          <div>
            <b>
              {selectedMultiLangData?.brand}: {item?.brand}
            </b>
          </div>
          <div>
            <button
              className="btn btn-link text-decoration-none p-0 fs-14"
              onClick={() => {
                removeItemFromQucikList(item?.name);
              }}
            >
              {selectedMultiLangData?.delete}
            </button>
          </div>
        </div>
        <div className="col-lg-1 col-md-12 text-center">
          {item?.currency_symbol}
          <b>
            <IndianNumber value={item?.price} />
          </b>
        </div>
        <div className="col-lg-1 col-md-12 text-center">
          <input
            type="number"
            value={localItem?.quantity || 0}
            className="w-100 text-center border"
            onChange={(e) => handleQuantityChange(item?.name, e.target.value, item)}
          />
          {minQuntityWarning && minQuntityWarning?.itemCode === item?.name && (
            <span className="text-danger fs-14">{minQuntityWarning?.warning}</span>
          )}
        </div>
        <div className="col-lg-1 col-md-12 text-center">
          <b>
            {item?.currency_symbol}
            <IndianNumber value={(total = item?.price * showValue(localItem?.quantity))} />
          </b>
        </div>
      </div>
    );
  });
};

export default QuickOrderCard;
