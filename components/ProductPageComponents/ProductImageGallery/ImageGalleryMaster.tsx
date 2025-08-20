import { ProductSlideshowImages } from '../../../interfaces/product-slideshow-images';
import ImageGalleryWithLeftThumbnails from './ImageGalleryWithLeftThumbnails';
import ImageGalleryWithRightThumbnails from './ImageGalleryWithRightThumbnails';
import ImageGalleryWithBottomThumbnails from './ImageGalleryWithBottomThumbnails';
import Image from 'next/image';
import noImage from '../../../public/assets/images/no_image.png';
import styles from '../../../styles/addon-styles/productPageV2Components.module.scss';

type ProductSlideshowComponentTypes = {
  imageGalleryComponent: string;
  slideShowImages: ProductSlideshowImages[];
  selectedImageBasedOnSelectedTone: string;
};
const ImageGalleryMaster = ({ imageGalleryComponent, slideShowImages, selectedImageBasedOnSelectedTone, setSelectedImageBasedOnSelectedTone }: any) => {
  const renderImageGallery = () => {
    switch (imageGalleryComponent) {
      case 'Image Thumbnails on the Left':
        return <ImageGalleryWithLeftThumbnails slideShowImages={slideShowImages} />;
      case 'Image Thumbnails on the Right':
        return <ImageGalleryWithRightThumbnails slideShowImages={slideShowImages} />;
      case 'Image Thumbnails at the Bottom':
        return <ImageGalleryWithBottomThumbnails slideShowImages={slideShowImages} selectedImageBasedOnSelectedTone={selectedImageBasedOnSelectedTone} setSelectedImageBasedOnSelectedTone={setSelectedImageBasedOnSelectedTone} />;

      default:
        return null; // or a fallback component
    }
  };
  return <>{renderImageGallery()}</>;
};

export default ImageGalleryMaster;
