import Image from 'next/image';
import React from 'react';
import { imageLoader } from '../utils/image_loader';
import styles from '../styles/components/productCardListView.module.scss';
import noImage from '../public/assets/images/no_image.png';

interface ProductListViewCardVariantPropsTypes {
  data: any;
  wishlistData: any;
  cartData?: any;
  addToCartItem: (item: any, props: any) => void;
  getPartyName: string | null;
  isSuperAdmin?: string;
  handleDeleteCatalogItem?: (category: string | string[] | undefined, name: string) => void;
  handleShowCatalogModal?: (name: string) => void;
}

interface VariantTypes {
  image?: string[];
  variant_code?: string;
  slug?: string;
  Colour?: string;
  colour_attr_colour?: string;
  stock?: boolean;
}

const ProductListViewCardVariantColour = ({
  data,
  wishlistData,
  cartData,
  addToCartItem,
  getPartyName,
  isSuperAdmin,
  handleDeleteCatalogItem,
  handleShowCatalogModal,
}: ProductListViewCardVariantPropsTypes) => {
  console.log(data, 'data111');
  return (
    <div>
      <div>
        {data?.image ? (
          <Image src={data?.image} alt="product-image" className={`${styles.card_img}`} loader={imageLoader} width={180} height={230} />
        ) : (
          <Image src={noImage} alt="product-image" className={`${styles.card_img}`} width={180} height={230} />
        )}
      </div>
    </div>
  );
};

export default ProductListViewCardVariantColour;
