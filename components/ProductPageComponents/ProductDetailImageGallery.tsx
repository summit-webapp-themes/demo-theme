import React, { useEffect, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';

const ProductDetailImageGallery = ({ data }: any) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const images = data?.map((img: any) => ({
    original: `${process.env.NEXT_PUBLIC_API_URL}/${img}`,
    thumbnail: `${process.env.NEXT_PUBLIC_API_URL}/${img}`,
  }));

  let gallery;
  if (data && data?.length > 0) {
    if (windowWidth > 576) {
      gallery = <ReactImageGallery items={images} thumbnailPosition="left" showNav={false} />;
    } else {
      gallery = <ReactImageGallery items={images} />;
    }
  }

  return <div className="productDetailImageSlider">{gallery}</div>;
};

export default ProductDetailImageGallery;
