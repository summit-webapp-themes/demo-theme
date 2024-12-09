import React from 'react';
import useProductVariants from '../../../hooks/ProductDetailPageHooks/useProductVariants';
import styles from '../../../styles/components/productPage.module.scss';

const ProductPageVariants = ({ productVariantData }: any) => {
  const { selectedSlug, unavailableErr, selectedAttributes, availableColors, availableSizes, handleAttributeClick } =
    useProductVariants(productVariantData);
  return (
    <div>
      {selectedSlug === null && unavailableErr !== '' && <p className="text-danger">{unavailableErr}</p>}
      {productVariantData?.variants?.length > 1 && (
        <>
          {productVariantData?.attributes?.length > 0 &&
            productVariantData?.attributes?.map((attribute: any) => (
              <div key={attribute.field_name}>
                <h4 className={`m-0 my-2 ${styles.attribute_name}`}>
                  {attribute.field_name} : {selectedAttributes[attribute.field_name]}{' '}
                </h4>
                <div>
                  {attribute?.values?.length > 0 &&
                    attribute.values?.map((value: string) => {
                      const isActive = selectedAttributes[attribute.field_name] === value;
                      const isDisabled =
                        attribute.field_name === 'Colour' ? !availableColors.includes(value) : !availableSizes.includes(value);
                      return (
                        <button
                          key={value}
                          className={`me-2  rounded border ${
                            isActive ? styles.variant_btn_active : isDisabled ? styles.variant_btn_disabled : styles.variant_btn
                          }`}
                          onClick={() => handleAttributeClick(attribute.field_name, value)}
                        >
                          {value}
                        </button>
                      );
                    })}
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default ProductPageVariants;
