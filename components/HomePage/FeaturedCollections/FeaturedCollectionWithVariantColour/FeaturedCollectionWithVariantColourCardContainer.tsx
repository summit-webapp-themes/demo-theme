import 'react-multi-carousel/lib/styles.css';
import ProductCardVariantColour from '../../../../cards/ProductCardVariantColour';
import {
  default as FeaturedCollectionProductTypes,
  default as FeaturedCollectionTypes,
} from '../../../../interfaces/featured-collection-interface';
import style from '../../../../styles/components/home.module.scss';

interface featuredCardContainerPropsTypes {
  allTagsData: FeaturedCollectionTypes[];
  cartData: any;
  addToCartItem: (item: any, props: any) => void;
  getPartyName: string | null;
  wishlistData: any;
}

const FeaturedCollectionWithVariantColourCardContainer = ({
  allTagsData,
  cartData,
  addToCartItem,
  getPartyName,
  wishlistData,
}: featuredCardContainerPropsTypes) => {
  return (
    <div className="container slider-container mt-4">
      {allTagsData?.length > 0 &&
        allTagsData.map((item: FeaturedCollectionTypes, i: number) => (
          <div key={i}>
            <h3 className={`${style.featuredCollectionTitle} text-center`}>
              <span>{item?.tag_name}</span>
            </h3>
            {item.value.length > 0 && (
              <div className="slider-container">
                <div className="row">
                  {item.value.map((val: FeaturedCollectionProductTypes, index: number) => (
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
