import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import useAddToCartHook from '../../hooks/CartPageHook/useAddToCart';
import useWishlist from '../../hooks/WishlistHooks/useWishlistHook';
import { selectCart } from '../../store/slices/cart-slices/cart-local-slice';
import ProductCardVariantColour from '../../cards/ProductCardVariantColour';
import { useTranslation } from 'react-i18next';
const NoDataFound = dynamic(() => import('../NoRecordFound'));
const ProductCard = dynamic(() => import('../../cards/ProductCard'));
const ProductCardSkeleton = dynamic(() => import('../../cards/ProductCardSkeleton'));

const WishlistMaster = () => {
  const { wishlistData, isLoading } = useWishlist();
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const { t } = useTranslation('common');
  const cartData = useSelector(selectCart)?.items;
  const handleDataRendering = () => {
    if (isLoading) {
      return (
        <div className="row">
          {[...Array(10)].map((_, index: number) => (
            <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-3 text-center mb-4 px-3" key={index}>
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      );
    }
    if (wishlistData?.length > 0) {
      return (
        <div className=" row">
          {wishlistData?.length > 0 &&
            wishlistData?.map((item: any, index: number) => (
              // <div key={index} className="col-sm-6 col-lg-4 col-xl-3 col-xxl-3 text-center mb-4 px-3">
              //   <ProductCard
              //     data={item}
              //     wishlistData={wishlistData}
              //     btnAction={'Add'}
              //     cartData={cartData}
              //     addToCartItem={addToCartItem}
              //     getPartyName={getPartyName}
              //   />
              // </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-3 mb-4 px-3">
                <div className={'h-100'}>
                  <ProductCardVariantColour
                    data={item}
                    cartData={cartData}
                    addToCartItem={addToCartItem}
                    getPartyName={getPartyName}
                    wishlistData={wishlistData}
                  />
                </div>
              </div>
            ))}
        </div>
      );
    }
    if (wishlistData?.length === 0) {
      return <NoDataFound title={t('wishlist_list_is_empty')} message={t('add_items_to_wishlist')} />;
    }
  };
  return (
    <div>
      <div className="text-center py-4 bg-blue text-light mb-5">
        <h4 className="m-0">{t('wishlist')}</h4>
        <p className="m-0">{t('view_your_wishlist_products')}</p>
      </div>
      <div className="container">{handleDataRendering()}</div>
    </div>
  );
};

export default WishlistMaster;
