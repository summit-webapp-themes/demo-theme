import Image from 'next/image';
import useDisplayTagHooks from '../../../hooks/HomePageHooks/useFeaturedCollections';
import CollectionsData from './CollectionsData';
import ErrorImage from '../../../public/assets/images/error-icon.png';
import useAddToCartHook from '../../../hooks/CartPageHook/useAddToCart';

const CollectionMaster = () => {
  const { allTagsData, fetchDisplayTagsDataFunction, isLoading, errorMessage } = useDisplayTagHooks();
  const { addToCartItem, getPartyName } = useAddToCartHook();

  if (isLoading) {
    return <h3>Loading ...</h3>;
  } else if (allTagsData?.length > 0) {
    return <CollectionsData allTagsData={allTagsData} addToCartItem={addToCartItem} getPartyName={getPartyName} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  } else {
    return <></>;
  }
};

export default CollectionMaster;
