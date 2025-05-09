import ReactImageMagnify from 'react-image-magnify';
import Image from 'next/image';
import useImageGallery from '../../../hooks/ProductImageGalleryHandler/useImageGallery';
import { CONSTANTS } from '../../../services/config/app-config';
import { ProductSlideshowImages } from '../../../interfaces/product-slideshow-images';
import noImg from '../../../public/assets/images/no_image.png';
import imageStyle from '../../../styles/components/productImgMagnify.module.scss';
import noImageStyles from '../../../styles/addon-styles/productPageV2Components.module.scss';

const ImageGalleryWithBottomThumbnails = ({ slideShowImages }: ProductSlideshowImages) => {
  const { enlargeImg, activeImgIndex, handleSelectedImage, generateSrcSet } = useImageGallery({ slideShowImages });

  return (
    <div>
      {slideShowImages?.length > 0 ? (
        <div className={imageStyle.product_img_container}>
          <div className={imageStyle.img_container_column}>
            {/* Main Image */}
            <div className={imageStyle.product_img_bottom}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'Product image',
                    isFluidWidth: true,
                    width: 400,
                    height: 400,
                    src: `${CONSTANTS.API_BASE_URL}/${enlargeImg}`,
                    srcSet: generateSrcSet(enlargeImg), // Use srcSet to provide multiple resolutions
                    sizes: `(max-width: 600px) 100vw, (max-width: 1200px) 10vw, 10vw `, // Define sizes for different screen widths
                  },
                  largeImage: {
                    src: `${CONSTANTS.API_BASE_URL}/${enlargeImg}`,
                    srcSet: generateSrcSet(enlargeImg), // Use srcSet for large image as well
                    sizes: `(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 30vw`,
                    width: 1200,
                    height: 1200,
                  },
                  // enlargedImageClassName: `${imageStyle.magnified_image}`,
                  enlargedImagePosition: 'beside', // Ensure the image appears beside the main image
                }}
              />
            </div>

            {/* Thumbnails */}
            <div className={imageStyle.thumbnail_bottom}>
              {slideShowImages.map((image: string, i: number) => (
                <div
                  className={`${imageStyle.img_wrap} ${i === activeImgIndex ? `${imageStyle.active}` : ''}`}
                  key={i}
                  onClick={() => handleSelectedImage(image, i)}
                >
                  <Image src={`${CONSTANTS.API_BASE_URL}/${image}`} alt={`Thumbnail image ${i + 1}`} width={100} height={100} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-100">
          <div className={noImageStyles.imgGalleryLgContainer}>
            <Image src={noImg} alt="Ring Image" className=" object-fit-cover" fill />
          </div>
          <div className="overflow-x-auto" style={{ maxWidth: '750px' }}>
            <div className="d-flex mt-3 gap-3" style={{ width: '100%' }}>
              {[1, 2, 3].map((i) => (
                <div className={noImageStyles.imgGallerySmContainer}>
                  <Image src={noImg} alt="Ring Image" className=" object-fit-cover" fill />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryWithBottomThumbnails;
