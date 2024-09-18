import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import useCatalog from '../../hooks/CatalogHooks/useCatalog';
import CreateCatalog from './CreateCatalog';
import CatalogListCard from './CatalogListCard';

const CatalogList = () => {
  const {
    handleCatalogName,
    handleSubmitCatalogName,
    catalogListItem,
    catalogList,
    handleDeleteCatalog,
    handleAddProduct,
    isLoading,
  }: any = useCatalog();
  const SelectedLangDataFromStore: any = useSelector(SelectedFilterLangDataFromStore);
  const [selectedMultiLangData, setSelectedMultiLangData] = useState<any>();
  useEffect(() => {
    if (Object.keys(SelectedLangDataFromStore?.selectedLanguageData)?.length > 0) {
      setSelectedMultiLangData(SelectedLangDataFromStore?.selectedLanguageData);
    }
  }, [SelectedLangDataFromStore]);
  return (
    <div className="container">
      {isLoading ? (
        <div className="row justify-content-center">
          {/* {[...Array(6)].map(() => (
            <>
              <div className="col-lg-7 mx-3">
                <ListViewLoadingLayout />
              </div>
            </>
          ))} */}
          Loading
        </div>
      ) : (
        <div className="container">
          <CreateCatalog
            handleSubmitCatalogName={handleSubmitCatalogName}
            handleChange={handleCatalogName}
            selectedMultiLangData={selectedMultiLangData}
          />
          <CatalogListCard
            catalogListItem={catalogListItem}
            handleDeleteCatalog={handleDeleteCatalog}
            handleAddProduct={handleAddProduct}
            selectedMultiLangData={selectedMultiLangData}
          />
        </div>
      )}
    </div>
  );
};

export default CatalogList;
