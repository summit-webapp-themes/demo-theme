import ReactImageMagnify from 'react-image-magnify';
import Image from 'next/image';
import useImageGallery from '../../../hooks/ProductImageGalleryHandler/useImageGallery';
import { CONSTANTS } from '../../../services/config/app-config';
import { ProductSlideshowImages } from '../../../interfaces/product-slideshow-images';
import noImg from '../../../public/assets/images/no_image.png';
import imageStyle from '../../../styles/components/productImgMagnify.module.scss';
import noImageStyles from '../../../styles/addon-styles/productPageV2Components.module.scss';

const ImageGalleryWithBottomThumbnails = ({ slideShowImages }: ProductSlideshowImages) => {
  const { API_BASE_URL } = CONSTANTS;
  const { enlargeImg, activeImgIndex, handleSelectedImage } = useImageGallery({ slideShowImages });
  const baseImgURL = `${API_BASE_URL}`;
  const isEMR = process.env.NEXT_PUBLIC_ENGINE_NAME === 'EMR';

  const getImageURL = (imgPath: string) => {
    const sanitizedPath = imgPath.startsWith('/') ? imgPath.slice(1) : imgPath;
    return isEMR ? `${baseImgURL}/${sanitizedPath}` : `${CONSTANTS.API_BASE_URL}/${sanitizedPath}`;
  };

  const generateSrcSet = (imgPath: string) => {
    const url = getImageURL(imgPath);
    return `${url} 600w, ${url} 1200w, ${url} 1800w`;
  };

  const largeImgURL = getImageURL(enlargeImg);
  console.log('🔍 Large Image URL:', largeImgURL);

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
                    src: getImageURL(enlargeImg),
                    // src: `${baseImgURL}${enlargeImg}`,
                    srcSet: generateSrcSet(enlargeImg),
                    sizes: `(max-width: 600px) 100vw, (max-width: 1200px) 10vw, 10vw`,
                  },
                  largeImage: {
                    // src: `${baseImgURL}${enlargeImg}`,
                    src: getImageURL(enlargeImg),
                    srcSet: generateSrcSet(enlargeImg),
                    sizes: `(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 30vw`,
                    width: 1200,
                    height: 1200,
                  },
                  enlargedImagePosition: 'beside',
                  enlargedImageContainerStyle: {
                    backgroundColor: '#fff',
                  },
                  enlargedImageStyle: {
                    objectFit: 'contain',
                  },
                }}
              />
            </div>

            {/* Thumbnails */}
            {slideShowImages.length > 1 && (
              <div className={imageStyle.thumbnail_bottom}>
                {slideShowImages.map((image: string, i: number) => (
                  <div
                    className={`${imageStyle.img_wrap} ${i === activeImgIndex ? imageStyle.active : ''}`}
                    key={i}
                    onClick={() => handleSelectedImage(image, i)}
                  >
                    <Image src={getImageURL(image)} alt={`Thumbnail image ${i + 1}`} width={100} height={100} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-100">
          <div className={noImageStyles.imgGalleryLgContainer}>
            <Image src={noImg} alt="Ring Image" className=" object-fit-cover" fill />
          </div>
          <div className="overflow-x-auto" style={{ maxWidth: '100%' }}>
            <div className="d-flex mt-3 gap-3" style={{ width: '100%' }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={noImageStyles.imgGallerySmContainer}>
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
