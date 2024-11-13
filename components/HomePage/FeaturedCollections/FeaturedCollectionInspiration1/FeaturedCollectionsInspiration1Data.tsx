import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../../../../cards/ProductCard';
import style from '../../../../styles/components/home.module.scss';

const FeaturedCollectionsInspiration1Data = ({ allTagsData, cartData, addToCartItem, getPartyName, wishlistData }: any) => {
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
    <>
      {allTagsData?.length > 0 &&
        allTagsData?.map(
          (item: any, i: any) =>
            item.value.length > 0 && (
              <div key={i} className="slider-container mt-5">
                <h4 className="fw-bold">{item.description}</h4>
                {item.value.length > 0 && (
                  <Carousel responsive={responsive}>
                    {item?.value?.map((val: any, index: any) => (
                      <div className={style.cardMargin} key={index}>
                        <ProductCard
                          key={index}
                          data={val}
                          cartData={cartData}
                          addToCartItem={addToCartItem}
                          getPartyName={getPartyName}
                          wishlistData={wishlistData}
                        />
                      </div>
                    ))}
                  </Carousel>
                )}
              </div>
            )
        )}
    </>
  );
};
export default FeaturedCollectionsInspiration1Data;
