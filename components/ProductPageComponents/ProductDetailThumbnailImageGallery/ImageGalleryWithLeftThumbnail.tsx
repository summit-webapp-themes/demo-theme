import React, { useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import Image from 'next/image';
import imageStyle from '../../../styles/components/productImageMagnify.module.scss';
import { CONSTANTS } from '../../../services/config/app-config';

const ImageGalleryWithLeftThumbnail = ({ data }: any) => {
  const [img, setImg] = useState('');
  const [activeIndex, setActiveIndex] = useState(0); // Track the active thumbnail index

  const hoverHandler = (image: string, i: number) => {
    setImg(image);
    setActiveIndex(i); // Update the active index
  };

  // Create srcSet for different screen resolutions
  const generateSrcSet = (image: string) => {
    return `${CONSTANTS.API_BASE_URL}/${image} 600w,
            ${CONSTANTS.API_BASE_URL}/${image} 1200w,
            ${CONSTANTS.API_BASE_URL}/${image} 1800w`;
  };

  // Set the initial image on component mount or data change
  useEffect(() => {
    if (data?.length) {
      setImg(data[0]);
    }
  }, [data]);

  return (
    <div className={imageStyle.product_img_container}>
      <div className={imageStyle.img_container}>
        {/* Thumbnails */}
        <div className={imageStyle.thumbnail_left}>
          {data.map((image: string, i: number) => (
            <div
              className={`${imageStyle.img_wrap} ${i === activeIndex ? `${imageStyle.active}` : ''}`}
              key={i}
              onClick={() => hoverHandler(image, i)}
            >
              <Image src={`${CONSTANTS.API_BASE_URL}/${image}`} alt={`Thumbnail image ${i + 1}`} width={100} height={100} />
            </div>
          ))}
        </div>

        {/* Magnified Image */}
        <div className={imageStyle.product_img}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Product image',
                isFluidWidth: true,
                width: 600,
                height: 600,
                src: `${CONSTANTS.API_BASE_URL}/${img}`,
                srcSet: generateSrcSet(img), // Use srcSet to provide multiple resolutions
                sizes: `(max-width: 600px) 100vw, (max-width: 1200px) 90vw, 90vw`, // Define sizes for different screen widths
              },
              largeImage: {
                src: `${CONSTANTS.API_BASE_URL}/${img}`,
                srcSet: generateSrcSet(img), // Use srcSet for large image as well
                sizes: `(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 30vw`,
                width: 1200,
                height: 1200,
              },
              enlargedImageClassName: `${imageStyle.magnified_image}`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryWithLeftThumbnail;
