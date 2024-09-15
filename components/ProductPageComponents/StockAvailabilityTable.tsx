import React, { useEffect, useState } from 'react'
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
    console.log(stockAvailabilityData, selectedMultiLangData, 'data')
    return (
        <>
            {stockAvailabilityData?.length > 0 && (
                <>
                    <div className={`row text-center ${styles.stock_table_header}`}>
                        <div className="col border py-2">{selectedMultiLangData?.warehouse_name}</div>
                        <div className="col border py-2">{selectedMultiLangData?.available_stock_qty}</div>
                        <div className="col border py-2">{selectedMultiLangData?.incoming_stock_qty}</div>
                        <div className="col-3 border py-2">{selectedMultiLangData?.estimated_incoming_stock_date}</div>
                        <div className="col border py-2">{selectedMultiLangData?.additional_qty}</div>
                        <div className="col border py-2">{selectedMultiLangData?.available_on}</div>
                    </div>
                    {stockAvailabilityData?.length > 0 && stockAvailabilityData?.map((stock: any) => (
                        <div className='row text-center'>
                            <div className="col border h-100 py-2">{stock?.warehouse || '--'}</div>
                            <div className="col border h-100 py-2">{stock?.qty || '--'}</div>
                            <div className="col border h-100 py-2">{stock?.incoming_qty || '--'}</div>
                            <div className="col-3 border h-100 py-2">{stock?.incoming_date || '--'}</div>
                            <div className="col border h-100 py-2">{stock?.additional_qty || '--'}</div>
                            <div className="col border h-100 py-2">{stock?.available_on || '--'}</div>
                        </div>
                    ))}
                </>
            )}
        </>
    )
}

export default StockAvailabilityTable