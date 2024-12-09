import 'react-multi-carousel/lib/styles.css';
import ProductCardVariantColour from '../../../../cards/ProductCardVariantColour';
import {
  default as FeaturedCollectionProductTypes,
  default as FeaturedCollectionTypes,
} from '../../../../interfaces/featured-collection-interface';
import style from '../../../../styles/components/home.module.scss';
import { MdOutlineHorizontalRule } from 'react-icons/md';

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
    <div className="container slider-container p-sm-0 mt-4 ">
      {allTagsData?.length > 0 &&
        allTagsData.map((item: FeaturedCollectionTypes, i: number) => (
          <div key={i} className="mb-3">
            <h3 className={`${style.featuredCollectionTitle} text-center m-0 mt-2`}>
              <span className={style.horizontal_line}></span>
              <span className="px-2"> {item?.tag_name}</span>
              <span className={style.horizontal_line}></span>
            </h3>
            <h6 className="text-secondary text-center mb-4 px-2">{item?.description}</h6>
            {item.value.length > 0 && (
              <div className="slider-container p-0 ">
                <div className="row">
                  {item.value.map((val: FeaturedCollectionProductTypes, index: number) => (
                    <div className="col-6 col-md-4 col-lg-3 gap-2 p-0 p-md-2" key={index}>
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
