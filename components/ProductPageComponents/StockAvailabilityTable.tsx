import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import styles from '../../styles/components/productDetail.module.scss';

const StockAvailabilityTable = ({ stockAvailabilityData }: any) => {
  const [selectedMultiLangData, setSelectedMultiLangData] = useState<any>();
  const SelectedLangDataFromStore: any = useSelector(SelectedFilterLangDataFromStore);
  useEffect(() => {
    if (Object.keys(SelectedLangDataFromStore?.selectedLanguageData)?.length > 0) {
      setSelectedMultiLangData(SelectedLangDataFromStore?.selectedLanguageData);
    }
  }, [SelectedLangDataFromStore]);
  return (
    <>
      {stockAvailabilityData?.length > 0 && (
        <table className="table table-bordered table-responsive">
          <thead>
            <tr>
              <th scope="col" className={`${styles.stock_table_header} text-center`}>
                {selectedMultiLangData?.warehouse_name}
              </th>
              <th scope="col" className={`${styles.stock_table_header} text-center`}>
                {selectedMultiLangData?.available_stock_qty}
              </th>
              <th scope="col" className={`${styles.stock_table_header} text-center`}>
                {selectedMultiLangData?.incoming_stock_qty}
              </th>
              <th scope="col" className={`${styles.stock_table_header} text-center`}>
                {selectedMultiLangData?.estimated_incoming_stock_date}
              </th>
              <th scope="col" className={`${styles.stock_table_header} text-center`}>
                {selectedMultiLangData?.additional_qty}
              </th>
              <th scope="col" className={`${styles.stock_table_header} text-center`}>
                {selectedMultiLangData?.available_on}
              </th>
            </tr>
          </thead>
          <tbody>
            {stockAvailabilityData?.map((stock: any) => (
              <tr>
                <td className="text-center">{stock?.warehouse || '--'}</td>
                <td className="text-center">{stock?.qty || '--'}</td>
                <td className="text-center">{stock?.incoming_qty || '--'}</td>
                <td className="text-center">{stock?.incoming_date || '--'}</td>
                <td className="text-center">{stock?.additional_qty || '--'}</td>
                <td className="text-center">{stock?.available_on || '--'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default StockAvailabilityTable;
