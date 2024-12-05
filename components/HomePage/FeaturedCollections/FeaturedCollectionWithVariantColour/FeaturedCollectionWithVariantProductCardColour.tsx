import styles from '../../../../styles/components/variantProductCards.module.scss';
const FeaturedCollectionWithVariantProductCardColour = ({
  data,
  handleRedirectToProductDetailPage,
  handleSelectVariant,
  selectedItem,
}: any) => {
  const colourAttribute = data?.attributes?.find((attr: any) => attr.field_name === 'Colour');
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
