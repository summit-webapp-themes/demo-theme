import Image from 'next/image';
import useHomeTopCategories from '../../../../hooks/HomePageHooks/usePersonalizedCategories';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import CategoriesBlocks from './CategoriesBlocks';
import CategoriesBlocksLoading from './CategoriesBlocksLoading';

const PersonalizedCategoriesBlocks = () => {
    const { homeTopCategories, isLoading, errorMessage } = useHomeTopCategories();
    if (isLoading) {
      return <CategoriesBlocksLoading/>
    } else if (homeTopCategories?.length > 0) {
      return <CategoriesBlocks homeTopCategories={homeTopCategories}/>
    } else if (errorMessage) {
      return (
        <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
          <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
        </div>
      );
    }
    return <></>;
};

export default PersonalizedCategoriesBlocks;
