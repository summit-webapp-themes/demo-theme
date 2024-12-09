import styles from '../../../../styles/components/variantProductCards.module.scss';

type ProductProps = {
  data: any;
  handleRedirectToProductDetailPage: () => void;
  handleSelectVariant: (variant: any) => void;
  selectedItem: any;
};

type Attribute = {
  field_name: string;
  label: string;
  values: string[];
  default_value: string;
  hex_value: string[];
  display_thumbnail: boolean;
};

const FeaturedCollectionWithVariantProductCardColour = ({
  data,
  handleRedirectToProductDetailPage,
  handleSelectVariant,
  selectedItem,
}: ProductProps) => {
  const colourAttribute = data?.attributes?.find((attr: Attribute) => attr.field_name === 'Colour');
  return (
    <>
      <div className="d-flex">
        {colourAttribute?.hex_value?.map((colour: string, index: number) => (
          <div
            key={index}
            className={`${styles.tabProductColor} ${
              selectedItem?.colour_attr_colour === colour ? styles?.borderActive : styles?.borderInactive
            }`}
            style={{ backgroundColor: colour }}
            onClick={() => handleRedirectToProductDetailPage()}
            onMouseEnter={() => handleSelectVariant(colour)}
          >
            {colour}
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCollectionWithVariantProductCardColour;
