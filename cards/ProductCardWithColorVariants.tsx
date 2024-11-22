import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaCartPlus, FaCircleCheck, FaHeart, FaRegHeart } from 'react-icons/fa6';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import useAddToWishlist from '../hooks/WishlistHooks/useAddToWishlistHook';
import noImage from '../public/assets/images/no_image.png';
import ProductCardStyles from '../styles/components/productCard.module.scss';
import { FaCheckCircle } from 'react-icons/fa';
import styles from '../styles/components/home.module.scss';
import { CONSTANTS } from '../services/config/app-config';

const ProductCardWithColorVariants = ({
  data,
  wishlistData,
  cartData,
  addToCartItem,
  getPartyName,
  isSuperAdmin,
  handleDeleteCatalogItem,
  handleShowCatalogModal,
}: any) => {
  const router = useRouter();
  const { handleAddToWishList, handleRemoveFromWishList } = useAddToWishlist();
  const [addToCartLoaderBtn, setAddToCartLoaderBtn] = useState<boolean>(false);
  const imageLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}/${src}?w=${width}&q=${quality || 75}`;
  };
  let wishProducts: any;
  const handleRenderIcon = () => {
    {
      wishlistData?.length > 0 &&
        wishlistData?.map((item: any) => {
          if (item.name === data?.name) {
            wishProducts = item?.name;
          }
        });
    }
    if (!wishProducts) {
      return (
        <span className={`${ProductCardStyles.wishlist_icon} text-danger `}>
          <FaRegHeart onClick={() => handleAddToWishList(data)} />
        </span>
      );
    } else {
      if (router?.asPath?.startsWith('/wishlist')) {
        return (
          <span className={`${ProductCardStyles.wishlist_icon} text-secondary `}>
            <RxCross2 onClick={() => handleRemoveFromWishList(data?.name)} />
          </span>
        );
      } else {
        return (
          <span className={`${ProductCardStyles.wishlist_icon} text-danger `}>
            <FaHeart onClick={() => handleRemoveFromWishList(data?.name)} />
          </span>
        );
      }
    }
  };
  let cartProducts: any;
  const handleRenderCartBtnText = () => {
    {
      cartData?.length > 0 &&
        cartData?.map((item: any) => {
          if (item === data?.name) {
            cartProducts = item;
          }
        });
    }
    if (!cartProducts) {
      return (
        <Button
          type="button"
          className={`btn ml-3 fs-6 ${ProductCardStyles.carListingBtn}`}
          onClick={handleAddToProductData}
          disabled={addToCartLoaderBtn}
        >
          {!addToCartLoaderBtn ? (
            <>
              <span>ADD</span>
              <FaCartPlus className={`${ProductCardStyles.cardBtn}`} />
            </>
          ) : (
            <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
          )}
        </Button>
      );
    } else {
      return (
        <Button type="button" className={`btn ml-3 fs-6 ${ProductCardStyles.carListingBtn_added}`}>
          {!addToCartLoaderBtn ? (
            <>
              <span>ADDED</span>
              <FaCheckCircle className={`mb-1 ${ProductCardStyles.cardBtn}`} />
            </>
          ) : (
            <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
          )}
        </Button>
      );
    }
  };
  const handleAddToProductData = async () => {
    setAddToCartLoaderBtn(true);
    const addToCartParams = {
      currency: 'INR',
      item_list: [{ item_code: data.name, quantity: 1 }],
      party_name: getPartyName,
    };

    try {
      await addToCartItem(addToCartParams, null);
    } catch (error) {
      console.error('Error adding to cart', error);
    } finally {
      setAddToCartLoaderBtn(false);
    }
  };

  const handleRenderAddToCatalogBtn: any = () => {
    if (isSuperAdmin === 'true') {
      return (
        <div className="d-flex justify-content-center">
          {router?.asPath?.startsWith('/catalog') ? (
            <button
              className={`rounded me-2 fs-6 ${ProductCardStyles.carListingBtn}`}
              onClick={() => handleDeleteCatalogItem(router?.query?.category, data?.name)}
            >
              <RiDeleteBin2Fill />
            </button>
          ) : (
            <Button className={`rounded me-2 fs-6 ${ProductCardStyles.carListingBtn}`} onClick={() => handleShowCatalogModal(data?.name)}>
              Add to catalog
            </Button>
          )}
        </div>
      );
    }
  };

  return (
    <>
      {/* // <div className={`row ${styles.tabContainerMargin} `}>
    //   <div className="col-md-3 mb-2"> */}
      <Card className={`${styles.tabcardContainer}`}>
        <div className={`${styles.tabimageContainer}`}>
          <Image src={data?.image} alt="Banner Images" loading="eager" priority={true} width={303} height={303} loader={imageLoader} />
        </div>
      </Card>
      <h6 className={styles.tabProductTitle}>{data?.item_name?.split(' ').slice(0, 4).join(' ')}</h6>
      <div>
        <h6 className={styles.tabProductTitle}>
          <span className={styles.tabProductPrice}>₹{data?.price}</span>
          <span className={styles.tabProductmrpPrice}>₹{data?.mrp_price}</span>
        </h6>
      </div>
      <div className="d-flex">
        <div className={styles.tabProductColor} style={{ backgroundColor: '#ff6e28' }}>
          red
        </div>
        <div className={styles.tabProductColor} style={{ backgroundColor: '#82b440' }}>
          green
        </div>
        <div className={styles.tabProductColor} style={{ backgroundColor: 'black' }}>
          Black
        </div>
      </div>
      {/* </div>
    </div> */}
    </>
  );
};

export default ProductCardWithColorVariants;
