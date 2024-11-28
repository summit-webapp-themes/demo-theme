import React from 'react';
import imageStyle from '../../../../styles/components/productImageMagnify.module.scss';

const Thumbnail3 = ({ data, addRefs, hoverHandler }: any) => {
  return (
    <div className={imageStyle.left_1}>
      {data.map((image: string, i: number) => (
        <div className={imageStyle.img_wrap} key={i} onClick={() => hoverHandler(image, i)} ref={addRefs}>
          <img src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`} alt={`Thumbnail ${i + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Thumbnail3;
