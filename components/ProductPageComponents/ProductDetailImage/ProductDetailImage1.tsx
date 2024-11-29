import React, { useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import imageStyle from '../../../styles/components/productImageMagnify.module.scss';

const ProductDetailImage1 = ({ data }: any) => {
  const [img, setImg] = useState('');
  const [activeIndex, setActiveIndex] = useState(0); // Track the active thumbnail index

  const hoverHandler = (image: string, i: number) => {
    setImg(image);
    setActiveIndex(i); // Update the active index
  };

  // Create srcSet for different screen resolutions
  const generateSrcSet = (image: string) => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${image} 600w,
            ${process.env.NEXT_PUBLIC_API_URL}/${image} 1200w,
            ${process.env.NEXT_PUBLIC_API_URL}/${image} 1800w`;
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
              <img src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`} alt={`Thumbnail ${i + 1}`} />
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
                src: `${process.env.NEXT_PUBLIC_API_URL}/${img}`,
                srcSet: generateSrcSet(img), // Use srcSet to provide multiple resolutions
                sizes: `(max-width: 600px) 100vw, (max-width: 1200px) 90vw, 90vw`, // Define sizes for different screen widths
              },
              largeImage: {
                src: `${process.env.NEXT_PUBLIC_API_URL}/${img}`,
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

export default ProductDetailImage1;
