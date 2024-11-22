import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from '../../../../styles/components/home.module.scss';
import ProductCardWithColorVariants from '../../../../cards/ProductCardWithColorVariants';

const FeaturedCollectionWithColorVariants = ({ allTagsData, cartData, addToCartItem, getPartyName, wishlistData }: any) => {
  const responsive: any = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container slider-container mt-4">
      <h3 className={'featuredCollectionTitle'}>
        <span>BEST SELLER</span>
      </h3>
      {allTagsData?.length > 0 &&
        allTagsData?.map(
          (item: any, i: any) =>
            item.value.length > 0 && (
              <div key={i} className="slider-container ">
                <div className="row">
                  {item.value.length > 0 &&
                    item?.value?.map((val: any, index: any) => (
                      <div className="col-md-3 gap-3">
                        <div className={style.cardMargin} key={index}>
                          <ProductCardWithColorVariants
                            key={index}
                            data={val}
                            cartData={cartData}
                            addToCartItem={addToCartItem}
                            getPartyName={getPartyName}
                            wishlistData={wishlistData}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )
        )}
    </div>
  );
};
export default FeaturedCollectionWithColorVariants;
