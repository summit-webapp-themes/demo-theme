import React, { useState } from 'react'
import styles from '../../../../styles/addon-styles/cartStyles.module.scss';
import useCurrencyLanguageHandler from '../../../../hooks/GeneralHooks/KCLanguageHandler';
import { Accordion, Form } from 'react-bootstrap';
import { ProductDataState } from '../../../../hooks/addon-hooks/kc-hooks/useHandleProductData';
import { useTranslation } from 'react-i18next';

export default function FallbackProductDetails({ 
  productDetailData, 
  stmpInst,
  dmPrdInst,
  szInst,
  spcRem,
  subRem,
  setProductState,
}: any) {
  const { t } = useTranslation('common');
  const { selectedCurrency } = useCurrencyLanguageHandler();
  const metalDetails = productDetailData?.bomDetails?.Metal;
  const diamondDetails = productDetailData?.bomDetails?.Diamond;
  const colorStoneDetails = productDetailData?.bomDetails?.ColorStone;
  const accessoriesDetails = productDetailData?.bomDetails?.Accessories;
  const labourDetails = productDetailData?.labourDetails;

  const bomDetails = [
    {
      tableLabel: t('metal_details'),
      tableHeaders: [
        t('metal'), 
        t('kt'), 
        t('colour'), 
        t('weight'), 
        // t('rate'), 
        // t('value')
      ],
      keys: [
        'metal', 
        'kt', 
        'color', 
        'weight', 
        // 'rate', 
        // 'value'
      ],
      tableData: metalDetails?.map((item: any) => ({
        metal: item.Pdesc || '-',
        kt: item.OdKt || '-',
        color: item.OdDmColDesc || '-',
        weight: item.OrWt ? `${item.OrWt.toFixed(2)} g` : '-',
        // rate: item.OrSalRt ? `${selectedCurrency?.symbol}${item.OrSalRt.toFixed(2)}` : '-',
        // value: item.OrSalVal ? `${selectedCurrency?.symbol}${item.OrSalVal.toFixed(2)}` : '-',
      })),
    },
    {
      tableLabel: t('diamond_details'),
      tableHeaders: [
        // t('category'), 
        t('shape'), 
        t('size 1 (mm)'), 
        t('size 2 (mm)'), 
        t('qty'), 
        t('carats'), 
        // t('rate'), 
        // t('value'),
      ],
      keys: [
        // 'category', 
        'shape', 
        'size1', 
        'size2', 
        'qty', 
        'carats', 
        // 'rate', 
        // 'value',
      ],
      tableData:diamondDetails?.map((item: any) => ({
        // category: item.OrRmCtg || '-',
        shape: item.OrRmSCtgDesc || '-',
        size1: item.OrLn1 !== null && item.OrLn1 !== undefined ? item.OrLn1 : '-',
        size2:  item.OrLn2 !== null && item.OrLn2 !== undefined ? item.OrLn2 : '-',
        qty: item.OrQty || '-',
        carats: item.OrWt ? `${item.OrWt.toFixed(2)} ct` : '-',
        // rate: item.OrSalRt ? `${selectedCurrency?.symbol}${item.OrSalRt.toFixed(2)}` : '-',
        // value: item.OrSalVal ? `${selectedCurrency?.symbol}${item.OrSalVal.toFixed(2)}` : '-',
      })),
    },
    {
      tableLabel: t('colour_stone_details'),
      tableHeaders: [
        // t('category'), 
        t('shape'), 
        t('size 1 (mm)'), 
        t('size 2 (mm)') , 
        t('qty'), 
        t('carats'), 
        // t('Rate'), 
      ],
      keys: [
        // 'category', 
        'shape', 
        'size1', 
        'size2', 
        'qty', 
        'carats', 
        // 'rate', 
      ],
      tableData: colorStoneDetails?.map((item: any) => ({
        // category: item.OrRmCtg || '-',
        shape: item.OrRmSCtgDesc || '-',
        size1: item.OrLn1 !== null && item.OrLn1 !== undefined ? item.OrLn1 : '-',
        size2: item.OrLn2 !== null && item.OrLn2 !== undefined ? item.OrLn2 : '-',
        qty: item.OrQty || '-',
        carats: item.OrWt ? `${item.OrWt} ct` : '-',
        // rate: item.OrSalVal ? `${selectedCurrency?.symbol}${item.OrSalVal.toFixed(2)}` : '-',
      })),
    },
    {
      tableLabel: t('accessories_details'),
      tableHeaders: [
        // t('category'), 
        t('name'), 
        // t('size 1 (mm)'), 
        // t('size 2 (mm)'), 
        t('qty'), 
        t('weight'), 
        // t('rate'), 
        // t('value')
      ],
      keys: [
        // 'category', 
        'name', 
        // 'size1', 
        // 'size2', 
        'qty', 
        'weight', 
        // 'rate', 
        // 'value'
      ],
      tableData: accessoriesDetails?.map((item: any) => ({
        // category: item.OrRmCtg || '-',
        name: item.OrRmSCtgDesc || '-',
        // size1: item.OrLn1 !== null && item.OrLn1 !== undefined ? item.OrLn1 : '-',
        // size2: item.OrLn2 !== null && item.OrLn2 !== undefined ? item.OrLn2 : '-',
        qty: item.OrQty || '-',
        weight: item.OrWt ? `${item.OrWt.toFixed(2)} g` : '-',
        // rate: item.OrSalRt
        //   ? `${selectedCurrency?.symbol}${item.OrSalRt.toFixed(2)}`
        //   : '-',
        // value: item.OrSalVal
        //   ? `${selectedCurrency?.symbol}${item.OrSalVal.toFixed(2)}`
        //   : '-',
      })),
    },
    // {
    //   tableLabel: t('labour_details'),
    //   tableHeaders: [t('main_code'), t('sub_code'), t('qty_wt'), t('rate'), t('value')],
    //   keys: ['mainCd', 'subCd', 'qtyOrWt', 'rate', 'value'],
    //   tableData: labourDetails?.map((item: any) => ({
    //     mainCd: item.OlMcd || '',
    //     subCd: item.OlScd || '',
    //     qtyOrWt: item.OlQw || '',
    //     rate: item.OlSalRt ? `${selectedCurrency?.symbol}${item.OlSalRt.toFixed(2)}` : '',
    //     value: item.OlSalVal ? `${selectedCurrency?.symbol}${item.OlSalVal.toFixed(2)}` : '',
    //   })),
    // },
  ];

  const instructionsDetails = [
    {
      label: t('stamping_instructions'),
      name: 'stampingInst',
      placeholderText: `${t('enter')} ${t('stamping_instructions')}`,
      value: stmpInst,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setProductState((prev: ProductDataState) => ({ ...prev, stmpInst: e.target.value })),
    },
    {
      label: t('dsg_production_instructions'),
      name: 'dsgProductionInst',
      placeholderText: `${t('enter')} ${t('dsg_production_instructions')}`,
      value: dmPrdInst,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setProductState((prev: ProductDataState) => ({ ...prev, dmPrdInst: e.target.value })),
    },
    {
      label: t('size_instructions'),
      name: 'sizeInst',
      placeholderText: `${t('enter')} ${t('size_instructions')}`,
      value: szInst,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setProductState((prev: ProductDataState) => ({ ...prev, szInst: e.target.value })),
    },
    {
      label: t('special_remarks'),
      name: 'specialRemarks',
      placeholderText: `${t('enter')} ${t('special_remarks')}`,
      value: spcRem,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setProductState((prev: ProductDataState) => ({ ...prev, spcRem: e.target.value })),
    },
    {
      label: t('sub_remarks'),
      name: 'subRemarks',
      placeholderText: `${t('enter')} ${t('sub_remarks')}`,
      value: subRem,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setProductState((prev: ProductDataState) => ({ ...prev, subRem: e.target.value })),
    },
  ]
  return (
    <div className='row'>
      <div className=' col-md-7 col-lg-8 d-flex gap-1 flex-column'>
        {bomDetails.map((detail: any, index: number) => (
          detail?.tableData?.length > 0 && ( 
            <div key={`product-detail-${detail.tableLabel}-${index}`}>
              <p className={`m-0 fw-semibold`} style={{ color: '#000000', fontSize: '16px', lineHeight: '16px'}}>{detail.tableLabel}</p>
              <div className={styles.cartTableContainer}>
              <table className={styles.productTable}>
                <thead>
                  <tr className={styles.productTableHeader}>
                    {detail.tableHeaders.map((header: string, index: number) => (
                      <th key={`detail-table-header-${header}-${index}`} className={header === 'Rate' ? ' text-center pe-5 pe-xxl-3': ''}>{header}</th>
                    ))}
                    <th style={{ width: '6%' }}></th>
                  </tr>
                </thead>
                <tbody className={styles.productTableBody}>
                  {detail.tableData.map((item: any, index: number) => (
                    <tr key={`detail-table-item-${index}`} className={styles.productTableBodyRow} style={{ position: 'relative' }}>
                      {detail.keys.map((key: string, keyIndex: number) => (
                        <td key={`item-table-data-${index}-${keyIndex}`} className={key === 'rate' ? ' text-center pe-5 pe-xxl-3': ''}>{item?.[key]}</td>
                      ))}
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
        )))}
      </div>
      <div className='col-md-5 col-lg-4 pt-1 pb-3'>
        <p className={`m-0 fw-semibold`} style={{ color: '#000000', fontSize: '16px', lineHeight: '16px'}}>{t('product_details')}</p>
        <Accordion defaultActiveKey="0" className='productDetailsAccordian'>
          {instructionsDetails?.map((item, index) => (
            <Accordion.Item key={`instruction-item-${item.name}-${index}`} eventKey={index.toString()}>
              <Accordion.Header>{item.label}</Accordion.Header>
              <Accordion.Body>
                <Form.Group className={styles.inputGroup}>
                  <Form.Control
                    type="text"
                    as={'textarea'}
                    rows={1}
                    name={item.name}
                    placeholder={item.placeholderText}
                    value={item.value}
                    onChange={item.onChange}
                    className={styles.inputField}
                  />
                </Form.Group>                    
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
