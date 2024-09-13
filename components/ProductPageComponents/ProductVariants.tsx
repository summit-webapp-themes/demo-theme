import React, { useEffect, useState } from 'react'
import styles from '../../styles/components/productDetail.module.scss';
import { useRouter } from 'next/router';

const ProductVariants = ({ productVariantData }: any) => {
    const router = useRouter()
    const { query } = useRouter()
    const [selectedAttributes, setSelectedAttributes] = useState<any>({
        Colour: null,
        Size: null
    });
    const [selectedSlug, setSelectedSlug] = useState(null);
    const [unavailableErr, setUnavailableErr] = useState('');

    // Handler to update the selected attribute
    const handleAttributeClick = (fieldName: string, value: string) => {
        // Update selected attributes
        const updatedAttributes = { ...selectedAttributes, [fieldName]: value };
        setSelectedAttributes(updatedAttributes);

        // Find the slug of the variant that matches the updated attributes
        const matchingVariant = productVariantData?.variants.find((variant: any) =>
            (updatedAttributes.Colour ? variant.Colour === updatedAttributes.Colour : true) &&
            (updatedAttributes.Size ? variant.Size === updatedAttributes.Size : true)
        );

        if (matchingVariant) {
            setSelectedSlug(matchingVariant?.slug);
            router.push({
                query: { ...query, productId: matchingVariant?.slug },
            });
        } else {
            setSelectedSlug(null); // No matching variant found
            setUnavailableErr('Currently Unavailable !!')
        }
    };
    const getAvailableOptions = (fieldName: any, value: any) => {
        if (!productVariantData?.variants) return [];

        return productVariantData.variants
            .filter((variant: any) => {
                // Filter variants based on selected attribute value
                return fieldName === value
                    ? (selectedAttributes.Size ? variant.Size === selectedAttributes.Size : true)
                    : (selectedAttributes.Colour ? variant.Colour === selectedAttributes.Colour : true);
            })
            .map((variant: any) => variant[fieldName]);
    };

    // Determine available colors and sizes based on selected attributes
    const availableColors = getAvailableOptions('Colour', selectedAttributes.Colour);
    const availableSizes = getAvailableOptions('Size', selectedAttributes.Size);
    useEffect(() => {
        if (productVariantData?.variants && query?.productId) {
            // Find the variant that matches the slug
            const matchingVariant = productVariantData.variants.find((variant: any) => variant.slug === query?.productId);
            if (matchingVariant) {
                // Set default attribute values based on the matching variant
                setSelectedAttributes({
                    Colour: matchingVariant.Colour,
                    Size: matchingVariant.Size
                });
            }
        }
    }, [query]);
    console.log(selectedSlug, 'slug')
    return (
        <div>
            {selectedSlug === null && unavailableErr !== '' && (
                <p className='text-danger'>Currently Unavailable</p>
            )}
            {productVariantData?.variants?.length > 1 && (
                <>
                    {productVariantData?.attributes?.length > 0 && productVariantData?.attributes?.map((attribute: any) => (
                        <div key={attribute.field_name}>
                            <p className='fs-14 m-0'>{attribute.field_name} :</p>
                            <div>
                                {attribute?.values?.length > 0 && attribute.values?.map((value: string) => {
                                    const isActive = selectedAttributes[attribute.field_name] === value;
                                    const isDisabled = attribute.field_name === 'Colour'
                                        ? !availableColors.includes(value)
                                        : !availableSizes.includes(value);
                                    return (
                                        <button
                                            key={value}
                                            className={`me-2 px-2 rounded border ${isActive ? styles.variant_btn_active : isDisabled ? styles.variant_btn_disabled : styles.variant_btn}`}
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
    )
}

export default ProductVariants