import BlogSectionCardContainer from './BlogSectionCardContainer';
import useHomeBlogData from '../../../../hooks/HomePageHooks/useHomeBlogData';
import BlogSectionLoader from './BlogSectionLoader';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import Image from 'next/image';
function MasterComponent1() {
  const { isLoading, blogData, errorMessage } = useHomeBlogData();

  if (isLoading) {
    return <BlogSectionLoader />;
  } else if (blogData?.length > 0) {
    return <BlogSectionCardContainer blogData={blogData} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  } else {
    return <></>;
  }
}

export default MasterComponent1;
