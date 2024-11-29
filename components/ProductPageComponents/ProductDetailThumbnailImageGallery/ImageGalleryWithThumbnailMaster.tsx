import ImageGalleryWithLeftThumbnail from './ImageGalleryWithLeftThumbnail';
import ImageGalleryWithRightThumbnail from './ImageGalleryWithRightThumbnail';
import ImageGalleryWithBottomThumbnail from './ImageGalleryWithBottomThumbnail';

const ImageGalleryWithThumbnailMaster = ({ data }: any) => {
  return (
    <>
      {/* <ImageGalleryWithLeftThumbnail data={data} /> */}
      {/* <ImageGalleryWithRightThumbnail data={data} /> */}
      <ImageGalleryWithBottomThumbnail data={data} />
    </>
  );
};

export default ImageGalleryWithThumbnailMaster;
