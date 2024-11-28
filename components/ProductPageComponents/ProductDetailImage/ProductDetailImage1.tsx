// import React, { useEffect, useRef, useState } from 'react';
// import ReactImageGallery from 'react-image-gallery';
// import ReactImageMagnify from 'react-image-magnify';

// const ProductDetailImage = ({ data }: any) => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const images = data?.map((img: any) => ({
//     original: `${process.env.NEXT_PUBLIC_API_URL}/${img}`,
//     thumbnail: `${process.env.NEXT_PUBLIC_API_URL}/${img}`,
//   }));

//   let gallery;
//   if (data && data?.length > 0) {
//     if (windowWidth > 576) {
//       gallery = <ReactImageGallery items={images} thumbnailPosition="left" showNav={false} />;
//     } else {
//       gallery = <ReactImageGallery items={images} />;
//     }
//   }
//   const [img, setImg] = useState('');

//   const hoverHandler = (image: string, i: number) => {
//     setImg(image);
//     refs.current[i].classList.add('active');
//     for (let j = 0; j < data?.length; j++) {
//       if (i !== j) {
//         refs.current[j].classList.remove('active');
//       }
//     }
//   };

//   // Refs to track active thumbnails
//   const refs: any = useRef([]);
//   refs.current = [];
//   const addRefs = (el: any) => {
//     if (el && !refs.current.includes(el)) {
//       refs.current.push(el);
//     }
//   };
//   useEffect(() => {
//     setImg(data[0]);
//   }, [data]);
//   return (
//     // <div className="productDetailImageSlider">{gallery}</div>
//     <div className="img-container">
//       <div className="left">
//         <div className="left_1">
//           {/* Thumbnail Images */}
//           {data.map((image: string, i: number) => (
//             <div className="img_wrap" key={i} onClick={() => hoverHandler(image, i)} ref={addRefs}>
//               <img src={images} alt={`Thumbnail ${i + 1}`} />
//             </div>
//           ))}
//         </div>

//         {/* Main Magnified Image */}
//         <div className="left_2">
//           <ReactImageMagnify
//             {...{
//               smallImage: {
//                 alt: 'Product image',
//                 isFluidWidth: false,
//                 width: 400,
//                 height: 400,
//                 // src: DEFAULT_API_CONFIG.url + img,
//                 src: gallery,
//               },
//               largeImage: {
//                 // src: DEFAULT_API_CONFIG.url + img,
//                 src: gallery,
//                 width: 1200,
//                 height: 1200,
//               },

//               enlargedImageClassName: 'magnified-image',
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailImage;

import React, { useEffect, useRef, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import imageStyle from '../../../styles/components/productImageMagnify.module.scss';
import Thumbnail1 from './Thumbnail/Thumbnail1';
import Thumbnail3 from './Thumbnail/Thumbnail3';
import Thumbnail2 from './Thumbnail/Thumbnail2';

const ProductDetailImage1 = ({ data }: any) => {
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
      <div className={imageStyle.img_container}>
        {/* Thumbnails */}
        {/* <Thumbnail1 data={data} addRefs={addRefs} hoverHandler={hoverHandler} /> */}
        {/* <Thumbnail2 data={data} addRefs={addRefs} hoverHandler={hoverHandler} /> */}
        {/* <Thumbnail3 data={data} addRefs={addRefs} hoverHandler={hoverHandler} /> */}
        <div className={imageStyle.thumbnail_left}>
          {data.map((image: string, i: number) => (
            <div className={imageStyle.img_wrap} key={i} onClick={() => hoverHandler(image, i)} ref={addRefs}>
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
      </div>
    </div>
  );
};

export default ProductDetailImage1;
