import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { FaCartPlus } from 'react-icons/fa6';
import noImage from '../public/assets/images/no_image.png';
import { RxCross2 } from 'react-icons/rx';
import ProductCardStyles from '../styles/components/productCard.module.scss';
import useAddToWishlist from '../hooks/WishlistHooks/useAddToWishlistHook';
import { useRouter } from 'next/router';
import { CONSTANTS } from '../services/config/app-config';
import { RiDeleteBin2Fill } from 'react-icons/ri';

const ProductCard = ({
  data,
  wishlistData,
  addToCartItem,
  getPartyName,
  isSuperAdmin,
  handleAddProductToCatalog,
  handleDeleteCatalogItem,
  handleCloseCatalogModal,
  handleShowCatalogModal,
}: any) => {
  const router = useRouter();
  const { handleAddToWishList, handleRemoveFromWishList } = useAddToWishlist();
  const imageLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
  };
  let wishProducts: any;
  const handleRenderIcon = () => {
    {
      wishlistData?.length > 0 &&
        wishlistData?.map((item: any, index: number) => {
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
  const handleAddToProductData = () => {
    const addToCartParams = {
      currency: 'INR',
      item_list: [{ item_code: data.name, quantity: 1 }],
      party_name: getPartyName,
    };
    addToCartItem(addToCartParams, null);
  };
  const handleRenderAddToCartBtn: any = () => {
    return (
      <Button type="button" className={`btn ml-3 fs-6 ${ProductCardStyles.carListingBtn}`} onClick={handleAddToProductData}>
        ADD
        <FaCartPlus className={ProductCardStyles.cardBtn} />
      </Button>
    );
  };

  return (
    <Card className={` ${ProductCardStyles.product_card} pt-2`}>
      <div className={` ${ProductCardStyles.product_card_img} `}>
        {handleRenderIcon()}
        <Link href={`${data?.url}`} target="_blank" className="text-decoration-none text-dark">
          <Image
            loader={data.image ? imageLoader : undefined}
            src={data.image ? data.image : noImage}
            width={1200}
            height={900}
            alt="Item Image"
            className={`${ProductCardStyles.product_code_img}`}
            style={{ width: '100%', height: '100%' }}
            priority={true}
          />
        </Link>
      </div>
      <Card.Body className={`${ProductCardStyles.content_wrap}`}>
        <div className={`${ProductCardStyles.product_content_wrap}`}>
          <Link href={`${data?.url}`} target="_blank" className={`text-dark text-decoration-none ${ProductCardStyles.product_name}`}>
            <Card.Title className={`my-0 ${ProductCardStyles.product_name} mb-0`}>{data?.item_name}</Card.Title>
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Card.Text className={`my-0 py-0 fw-bold ${ProductCardStyles.product_card_text} `}>
                {data.price} <span className={ProductCardStyles.mrpPrice}>M.R.P:</span>
                <span className={`text-decoration-line-through ${ProductCardStyles.mrpPrice}`}> {data.mrp_price}</span>
              </Card.Text>
            </div>
            {!isSuperAdmin && <div>{handleRenderAddToCartBtn()}</div>}
          </div>
          {isSuperAdmin && (
            <div className="d-flex justify-content-center">
              {router?.asPath?.startsWith('/catalog') ? (
                <button
                  className={`rounded me-2 fs-6 ${ProductCardStyles.carListingBtn}`}
                  onClick={() => handleDeleteCatalogItem(router?.query?.category, data?.name)}
                >
                  <RiDeleteBin2Fill />
                </button>
              ) : (
                <button className={`rounded me-2 fs-6 ${ProductCardStyles.carListingBtn}`} onClick={handleShowCatalogModal}>
                  Add to catalog
                </button>
              )}
              {handleRenderAddToCartBtn()}
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
