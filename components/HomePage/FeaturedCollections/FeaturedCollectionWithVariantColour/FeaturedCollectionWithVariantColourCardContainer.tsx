import 'react-multi-carousel/lib/styles.css';
import ProductCardVariantColour from '../../../../cards/ProductCardVariantColour';
import tagDataProduct from '../../../../interfaces/tag-data-interface';
import style from '../../../../styles/components/home.module.scss';
import TagData from '../../../../interfaces/tag-data-interface';
import TagDataProduct from '../../../../interfaces/tag-data-interface';

const FeaturedCollectionWithVariantColourCardContainer = ({ allTagsData, cartData, addToCartItem, getPartyName, wishlistData }: any) => {
  return (
    <div className="container slider-container mt-4">
      {allTagsData?.length > 0 &&
        allTagsData.map((item: TagData, i: number) => (
          <div key={i}>
            <h3 className={`${style.featuredCollectionTitle} text-center`}>
              <span>{item?.tag_name}</span>
            </h3>
            {item.value.length > 0 && (
              <div className="slider-container">
                <div className="row">
                  {item.value.map((val: TagDataProduct, index: number) => (
                    <div className="col-sm-6 col-md-4 col-lg-3 gap-3" key={index}>
                      <div className={style.cardMargin}>
                        <ProductCardVariantColour
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
            )}
          </div>
        ))}
    </div>
  );
};
export default FeaturedCollectionWithVariantColourCardContainer;
