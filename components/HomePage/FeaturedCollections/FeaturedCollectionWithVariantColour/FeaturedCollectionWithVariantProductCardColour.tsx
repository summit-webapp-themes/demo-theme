import Link from 'next/link';
import styles from '../../../../styles/components/variantProductCards.module.scss';

interface ProductPropsTypes {
  data: any;
  handleRedirectToProductDetailPage: any;
  handleSelectVariant: (variant: any) => void;
  selectedItem: any;
}

interface AttributeTypes {
  field_name: string;
  label: string;
  values: string[];
  default_value: string;
  hex_value: string[];
  display_thumbnail: boolean;
}

const FeaturedCollectionWithVariantProductCardColour = ({
  data,
  handleRedirectToProductDetailPage,
  handleSelectVariant,
  selectedItem,
}: ProductPropsTypes) => {
  return (
    <>
      <div className="d-flex">
        {data?.variant?.length > 0 &&
          data?.variant?.map(
            (variantItem: any, index: number) =>
              variantItem.Colour && (
                <Link
                  href={handleRedirectToProductDetailPage()}
                  key={index}
                  className={`${styles.tabProductColor} ${
                    selectedItem?.colour_attr_colour === variantItem?.colour_attr_colour ? styles?.borderActive : styles?.borderInactive
                  }`}
                  style={{ backgroundColor: variantItem?.colour_attr_colour }}
                  onMouseEnter={() => handleSelectVariant(variantItem?.colour_attr_colour)}
                >
                  hello
                  {variantItem?.colour_attr_colour}
                </Link>
              )
          )}
      </div>
    </>
  );
};

export default FeaturedCollectionWithVariantProductCardColour;
