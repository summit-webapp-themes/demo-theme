import React, { useEffect, useRef, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import imageStyle from '../../../styles/components/productImageMagnify.module.scss';

const ProductDetailImage3 = ({ data }: any) => {
  const [img, setImg] = useState('');
  const refs: any = useRef([]);

  // Ensure refs array doesn't grow indefinitely
  refs.current = [];

  const addRefs = (el: any) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const hoverHandler = (image: string, i: number) => {
    setImg(image);
    refs.current[i]?.classList.add('active');
    for (let j = 0; j < data?.length; j++) {
      if (i !== j) {
        refs.current[j]?.classList.remove('active');
      }
    }
  };

  // Set the initial image on component mount or data change
  useEffect(() => {
    if (data?.length) {
      setImg(data[0]);
    }
  }, [data]);

  return (
    <div className={imageStyle.product_img_container}>
      <div className={imageStyle.img_container_column}>
        {/* Main Image */}
        <div className={imageStyle.product_img}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Product image',
                isFluidWidth: false,
                width: 400,
                height: 400,
                src: `${process.env.NEXT_PUBLIC_API_URL}/${img}`,
              },
              largeImage: {
                src: `${process.env.NEXT_PUBLIC_API_URL}/${img}`,
                width: 1200,
                height: 1200,
              },
              enlargedImageClassName: `${imageStyle.magnified_image}`,
            }}
          />
        </div>

        {/* Thumbnails */}
        <div className={imageStyle.thumbnail_bottom}>
          {data.map((image: string, i: number) => (
            <div className={imageStyle.img_wrap} key={i} onClick={() => hoverHandler(image, i)} ref={addRefs}>
              <img src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`} alt={`Thumbnail ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailImage3;
