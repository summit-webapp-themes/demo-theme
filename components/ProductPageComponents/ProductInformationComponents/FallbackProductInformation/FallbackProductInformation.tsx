import { Button, Popover } from "react-bootstrap";
import styles from '../../../../styles/addon-styles/productPageV2Components.module.scss';
import { FiMinus, FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import useKCLayoutHandler from "../../../../hooks/addon-hooks/kc-hooks/useKCLayoutHandler";
import { ProductDataState } from "../../../../hooks/addon-hooks/kc-hooks/useHandleProductData";
import fetchItemPriceUtility from "../../../../utils/addon-utils/fetch-price";
import { useDispatch, useSelector } from "react-redux";
import { get_access_token } from "../../../../store/slices/auth/token-login-slice";
import { decodeWithSalt } from "../../../../utils/addon-utils/encode-data";
import useCurrencyLanguageHandler from "../../../../hooks/GeneralHooks/KCLanguageHandler";
import { useTranslation } from "react-i18next";
import { KCFromStore, setMetalRateSidebar } from '../../../../store/slices/general_slices/kc-slice';
import { formatPriceBasedOnCurrency } from "../../../../utils/addon-utils/currency-map";
import ReactSelectDropdown from "../../../addon-components/TwoLevelSidebar/Sidebar/SidebarExtension/ReactSelectDropdown";
import { Option } from "../../../../store/slices/general_slices/multilingual-slice";
import SingleSelectComponent from "../../../addon-components/TwoLevelSidebar/Sidebar/SidebarExtension/SingleSelect";
import SingleSelectDropDown from "../../../addon-components/KCTopFilterSection/SingleSelectDropDown";
import { showErrorToast } from "../../../addon-components/Toasts/show-toast";

export default function FallbackProductInformation({
  productDetailData,
  setProductDetailData,
  cartData,
  setError,
  error,
  handleMainQuantityChange,
  quantity,
  handleAddToCart,
  btnLoader,
  stockBtnLoader,
  getImageUrlBasedOnSelectedTone,
  selectedMetal,
  selectedPurity,
  selectedTone,
  selectedDiamond,
  selectedSize,
  selectedColorStone,
  stmpInst,
  dmPrdInst,
  szInst,
  spcRem,
  subRem,
  setProductState,
  setClearSelectedState,
  odChr,
  gradeChangeList,
  currentScope,
  diamondChangeList,
  fetchCartData,
  colorStoneChangeList,
} : any) {
  const { goldRate, platinumRate, palladiumRate, silverRate } = useSelector(KCFromStore);
  const {
    designSizes,
    attributesData,
    loadingAttributeData,
    getProductDesignOptions,
    getGradeChangeParamsList,
    getDiamondChangeParamsList,
    getColorStoneChangeParamsList,
    getSizes,
  } = useKCLayoutHandler();
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const TokenFromStore: any = useSelector(get_access_token);
  const { selectedCurrency } = useCurrencyLanguageHandler();
  const [price, setPrice] = useState<number>(0);
  const [updatedSfx, setUpdatedSfx] = useState<string>(productDetailData?.OdSfx || '');
  const [fetchPriceBtnLoader, setFetchPriceBtnLoader] = useState(false);
  const [isAttributeValueChanged, setIsAttributeValueChanged] = useState(false);
  const [grossWeight, setGrossWeight] = useState(parseFloat(productDetailData?.GrWt) || 0);
  const [diamondWeight, setDiamondWeight] = useState(parseFloat(productDetailData?.DiaWt) || 0);
  const [goldWeight, setGoldWeight] = useState(parseFloat(productDetailData?.GldWt) || 0);
  const [metWeight, setMetWeight] = useState(parseFloat(productDetailData?.MetWt) || 0);
  const [csWeight, setCsWeight] = useState(parseFloat(productDetailData?.CsWt) ||0);
  const [customerCode, setCustomerCode] = useState<{label: string, value: string}>();
  const encodedCustomerData = localStorage.getItem('customer');
  const [gradeChange, setGradeChange] = useState<Option | null>(null);
  const [diamondChange, setDiamondChange] = useState<Option | null>(null);
  const [colorStoneChange, setColorStoneChange] = useState<Option | null>(null);

  const topProductInfo = [
    {
      label: 'Gr Wt',
      value: grossWeight ? `${grossWeight.toFixed(2)}gm` : '',
    },
    {
      label: 'Dia Wt',
      value: diamondWeight ? `${diamondWeight.toFixed(2)}ct` : '',
    },
  ].filter(info => info.value);

  const bottomProductInfo = [
    {
      label: 'Net Wt',
      value: metWeight ? `${metWeight.toFixed(2)}gm` : '',
    },
    {
      label: 'Cs Wt',
      value: csWeight ? `${csWeight.toFixed(2)}ct` : '',
    },
  ].filter(info => info.value);

  const sizeInfoPopOver = (
    <Popover id="popover-trigger-hover" title="Size guide" className={styles.sizeInfoPopOver}>
      <p>S = 16 cm</p>
      <p>M = 17 cm</p>
      <p>L = 18 cm</p>
    </Popover>
  );

  const handleAttributeChange = (field: string, value: string) => {
    // const setter = setterMap[field as AttributeField];
    // if (typeof setter === 'function') {
    //   setter(value);
    //   setIsAttributeValueChanged(true);
    // } else {
    //   console.error(`❌ Invalid setter for ${field}`);
    // }

    switch (field) {
      case 'Metal':
        setProductState((prev: ProductDataState) => ({ ...prev, selectedMetal: value }));
        setError('');
        break;
      case 'Purity':
        setProductState((prev: ProductDataState) => ({ ...prev, selectedPurity: value }));
        setError('');
        break;
      case 'Tone':
        getImageUrlBasedOnSelectedTone(value);
        setProductState((prev: ProductDataState) => ({ ...prev, selectedTone: value }));
        setError('');
        break;
      case 'Diamond':
        setProductState((prev: ProductDataState) => ({ ...prev, selectedDiamond: value }));
        setDiamondChange({ label: value, value});
        setError('');
        break;
      case 'Size':
        setProductState((prev: ProductDataState) => ({ ...prev, selectedSize: value }));
        setError('');
        break;
      case 'ColorStone':
        setProductState((prev: ProductDataState) => ({ ...prev, selectedColorStone: value }));
        setColorStoneChange({ label: value, value});
        setError('');
        break;
      default:
        break;
    }
    setIsAttributeValueChanged(true);
  };

  const refreshPrice = async () => {
    setFetchPriceBtnLoader(true);
    try {
      const rateMap: Record<string, number> = {
        G: goldRate ?? 0,
        L: palladiumRate ?? 0,
        P: platinumRate ?? 0,
        S: silverRate ?? 0,
      };
      const selectedRate = rateMap[selectedMetal ?? 'G'] ?? 0;
      const productPriceResponse: any = await fetchItemPriceUtility(
        selectedMetal,
        selectedDiamond,
        '',
        selectedPurity,
        selectedTone,
        selectedRate,
        [{
          inpDmSz: selectedSize,
          OdIdNo: productDetailData?.OdIdNo,
          OdCoCd: productDetailData?.OdCoCd,
          OdTc: productDetailData?.OdTc,
          OdYy: productDetailData?.OdYy,
          OdChr: productDetailData?.OdChr,
          OdNo: productDetailData?.OdNo,
          OdSr: productDetailData?.OdSr,
          OdSfx: updatedSfx,
          OdDmCd: productDetailData?.OdDmCd,
          OdDmSz: productDetailData?.OdDmSz,
          quantity: quantity,
        }],
        TokenFromStore?.token,
        customerCode?.value,
        selectedCurrency?.value,
        gradeChange?.value,
        diamondChange?.value,
        colorStoneChange?.value,
      );
  
      if (productPriceResponse?.status === 200) {
        const productPrice = parseFloat(productPriceResponse?.data?.data?.[0]?.OdSalPrc)
        setPrice(productPrice);
        setUpdatedSfx(productPriceResponse?.data?.data?.[0]?.OdSfx || '');
        setGrossWeight(productPriceResponse?.data?.data?.[0]?.GrWt || 0);
        setDiamondWeight(productPriceResponse?.data?.data?.[0]?.DiaWt || 0);
        setGoldWeight(productPriceResponse?.data?.data?.[0]?.GldWt || 0);
        setMetWeight(productPriceResponse?.data?.data?.[0]?.MetWt || 0);
        setCsWeight(productPriceResponse?.data?.data?.[0]?.CsWt || 0);
        setProductDetailData(productPriceResponse?.data?.data[0]);
        if (odChr === 'CT' || 'SCT') {
          fetchCartData(odChr, customerCode?.value,);
        };
        setIsAttributeValueChanged(false);
        setFetchPriceBtnLoader(false);
      } else {
        setError(productPriceResponse?.response?.data?.error || 'Failed to fetch price');
        setPrice(0);
        setFetchPriceBtnLoader(false);
      }
    } catch {
      setError('Failed to fetch price');
      setPrice(0);
      setFetchPriceBtnLoader(false);
    }
  };

  useEffect(() => {
    const productPrice = productDetailData?.OdSalPrc
    setPrice(productPrice);
    getProductDesignOptions(productDetailData?.DmCtg);
    getGradeChangeParamsList();
    getDiamondChangeParamsList();
    getColorStoneChangeParamsList();
    getSizes();
    setDiamondChange(diamondChangeList.find((item: any) => item?.value === selectedDiamond));
    setColorStoneChange(colorStoneChangeList.find((item: any) => item?.value === selectedColorStone));
    if (encodedCustomerData) {
      const decodedCustomer = encodedCustomerData ? decodeWithSalt(encodedCustomerData, TokenFromStore?.token) : null;
      setCustomerCode(decodedCustomer);
    }
  }, [productDetailData, encodedCustomerData]);

  useEffect(() => {
    if (!selectedMetal || !productDetailData) return;

    // The metal that arrived from backend
    const originalMetal = productDetailData?.OdMainMet;

    // Only run this effect when metal actually changes (not on mount)
    if (!isAttributeValueChanged) return;

    const purityAttr = attributesData?.find((a: any) => a.field_name === 'Purity');
    const toneAttr = attributesData?.find((a: any) => a.field_name === 'Tone');

    const purityOptions = purityAttr?.[selectedMetal] || [];
    const toneOptions = toneAttr?.[selectedMetal] || [];

    const firstPurity = purityOptions[0]?.id;
    const firstTone = toneOptions[0]?.id;

    setProductState((prev: ProductDataState) => {
      // Reset to product defaults if metal matches product data metal
      if (selectedMetal === originalMetal) {
        return {
          ...prev,
          selectedPurity: productDetailData?.OdKt || prev.selectedPurity,
          selectedTone: productDetailData?.OdDmCol || prev.selectedTone,
        };
      }

      // Auto-select first purity & tone for the new metal
      return {
        ...prev,
        selectedPurity: firstPurity || prev.selectedPurity,
        selectedTone: firstTone || prev.selectedTone,
      };
    });

    setIsAttributeValueChanged(true);
  }, [selectedMetal]);

  return (
    <div className="bg-white h-100" style={{ border: '1px solid #DADADA', borderRadius: '10px', padding: '12px 28px' }}>
      <div className="d-flex w-100 justify-content-between align-items-center gap-1 flex-wrap">
        {/* <div className="d-flex justify-content-between align-items-center"> */}
          <h3 className="fw-semibold mb-0 me-2" style={{ fontSize: '22px', color: '#2B2B2B' }}>
            {productDetailData?.OdDmCd}
          </h3>
          {(currentScope === 'Stock' || currentScope === 'Stock Cart' || currentScope === 'Voucher') && productDetailData?.stkId && 
            <span style={{ padding: '0' }} className="fs-14">
              {t('Stock ID')}: <span className="fw-bold">{productDetailData.stkId}</span>
            </span>
          }
        {/* </div> */}
        {/* {(odChr === 'PL' || odChr === 'CT') && ( 
          <Button
            className={` px-3 ${styles.fetchPriceButton}`}
            onClick={() => {
              dispatch(setMetalRateSidebar(true));
            }}          
          >
            <p className="m-0 lh-sm">{t('edit')} {t('metal_rates')}</p>
          </Button>
        )} */}
      </div>
      <p style={{ color: '#2B2B2BB8', fontSize: '14px', margin: '0px' }}>
        {topProductInfo.map((info, index) => (
          info.value && (
            <span key={index} style={{ borderRight: index < topProductInfo.length - 1 && index !== topProductInfo.length - 1 ? '1px solid #D1D1D1' : 'none', padding: index !== 0 && index < topProductInfo.length ? '0 6px 0' : '0 6px 0 0' }}>
              {info.label}: <span className="fw-bold lato-regular">{info.value}</span>
            </span>
          )
        ))}
      </p>

      {attributesData?.length > 0 && !loadingAttributeData ? (
        attributesData.map((attribute: any, index: number) => {
          const selectedValueMap: any = {
            Metal: selectedMetal,
            Purity: selectedPurity,
            Tone: selectedTone,
            Diamond: selectedDiamond,
            Size: selectedSize,
            ColorStone: selectedColorStone,
          };

          const attributeValues =
            attribute.field_name === 'Purity' || attribute.field_name === 'Tone'
              ? selectedMetal && attribute[selectedMetal]
              : attribute.values;

          if (!attributeValues?.length) return null;

          // show all options if OdChr is CS, else only selected value
          const valuesToRender = odChr
            ? attributeValues.filter((val: any) => {
                if (!val?.value || val.value === '') return false; // remove empty
                return (odChr === 'CT') ? true : val.id === selectedValueMap[attribute.field_name];
              })
            : attributeValues.filter((val: any) => val?.value && val.value !== '');

          if (!valuesToRender?.length) return null;

          return (
            <div key={index} className="d-flex justify-content-between gap-1" style={{ marginTop: "0" }}>
              <div className="d-flex flex-column flex-wrap flex-md-nowrap align-items-start justify-content-center gap-1 mb-1">
                <div className="d-flex justify-content-center align-items-start gap-1" style={{ color: "#909090" }}>
                  <p className="fs-12 m-0">{t(attribute.field_name?.toLowerCase())}</p>
                </div>

                <div className="d-flex flex-wrap align-items-center justify-content-start gap-2">
                  {valuesToRender.map((value: any, idx: number) => (
                    <button
                      key={idx}
                      className={`btn btn-sm ${
                        selectedValueMap[attribute.field_name] === value.id
                          ? styles.detailsButtonActive
                          : styles.detailsButton
                      }`}
                      onClick={() => (odChr && odChr && odChr === 'CT') && handleAttributeChange(attribute.field_name, value.id)}
                    >
                      {attribute.field_name === "Metal" || attribute.field_name === "Tone"
                        ? t(value.value)
                        : value.value}
                    </button>
                  ))}
                </div>
              </div>
              <div className="d-flex flex-wrap flex-md-nowrap align-items-start justify-content-start mb-1">
                {attribute.field_name === 'Tone' && (
                  <div className="d-flex flex-column justify-content-start align-items-start gap-1">
                    <div className="d-flex justify-content-start align-items-start gap-1 ms-1" style={{ color: "#909090" }}>
                      <p className="fs-12 m-0">{t("metal_grade")}</p>
                    </div>
                    <SingleSelectDropDown 
                      options={gradeChangeList} 
                      value={gradeChange} 
                      placeholder={t('select')} 
                      onChange={(value: Option | null) => {
                        setGradeChange(value);
                        setIsAttributeValueChanged(true);
                      }} 
                      disabled={odChr === 'CT' ? false : true}
                    />
                  </div>
                )}
                {attribute.field_name === 'Diamond' && (
                  <div className="d-flex flex-column justify-content-start align-items-start gap-1">
                    <div className="d-flex justify-content-start align-items-start gap-1 ms-1" style={{ color: "#909090" }}>
                      <p className="fs-12 m-0">{t("diamond")}</p>
                    </div>
                    <SingleSelectDropDown 
                      options={diamondChangeList} 
                      value={diamondChange} 
                      placeholder={t('select')} 
                      onChange={(value: Option | null) => {
                        setDiamondChange(value);
                        value?.value && handleAttributeChange(attribute.field_name, value?.value.toString());
                        setIsAttributeValueChanged(true);
                      }} 
                      disabled={odChr === 'CT' ? false : true}
                    />
                  </div>
                )}
                {attribute.field_name === 'ColorStone' && (
                  <div className="d-flex flex-column justify-content-start align-items-start gap-1">
                    <div className="d-flex justify-content-start align-items-start gap-1 ms-1" style={{ color: "#909090" }}>
                      <p className="fs-12 m-0">{t("ColorStone")}</p>
                    </div>
                    <SingleSelectDropDown 
                      options={colorStoneChangeList} 
                      value={colorStoneChange} 
                      placeholder={t('select')} 
                      onChange={(value: Option | null) => {
                        setColorStoneChange(value);
                        value?.value && handleAttributeChange(attribute.field_name, value?.value.toString());
                        setIsAttributeValueChanged(true);
                      }} 
                      disabled={odChr === 'CT' ? false : true}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
          <span className="spinner-border spinner-border-sm text-kc-primary-brown" role="status" aria-hidden="true"></span>
        </div>
      )}


      <div className={` d-flex mt-2 align-items-center flex-wrap gap-2 ${(odChr === 'PL') ? 'justify-content-between' : 'justify-content-end'}`}>
        {/* Quantity Controls */}
        {(odChr === 'PL') && ( 
          <div
            className="input-group flex-nowrap z-0"
            style={{ width: 'fit-content', border: '1px solid #EBEBEB', borderRadius: '6px', color: 'black', height: '30px' }}
          >
            <button
              className="btn d-flex border-0 border-end justify-content-center align-items-center"
              style={{ backgroundColor: '#F5F5F5', padding: '2px 6px' }}
              onClick={() => handleMainQuantityChange(quantity, -1)}
            >
              <FiMinus size={18} />
            </button>
            <div className="form-control text-center border-0 text-black lato-regular" style={{ width: '60px', padding: '2px 6px' }}>
              {quantity}
            </div>
            <button
              className="btn d-flex border-0 border-start justify-content-center align-items-center"
              style={{ backgroundColor: '#F5F5F5', padding: '2px 6px' }}
              onClick={() => handleMainQuantityChange(quantity, 1)}
            >
              <FiPlus size={18} />
            </button>
          </div>
        )}

        {/* Add to Cart Button */}
        {!isAttributeValueChanged ? (
          <div className="d-flex gap-2 align-items-center">
            {/* {(currentScope === 'Stock') && productDetailData?.availableQty && (
              <p style={{ color: '#2B2B2BB8', fontSize: '14px', margin: '0 0 4px' }}>
                <span style={{ padding: '0 6px 0' }}>
                  {t('Available Quantity')}: <span className="fw-bold lato-regular">{productDetailData?.availableQty}</span>
                </span>
              </p>
            )} */}
            {(odChr === 'PL') && (
              <button
                className={` btn btn-sm ${styles.addToCartButton}`}
                onClick={() => {
                  // if (currentScope !== 'PDCM Design Bank' && currentScope !== 'Stock' && productDetailData?.hasSalPrc !== 0) {
                  //   showErrorToast({ title: `Items with "Price Not Available" cannot be added to Cart.`});
                  //   return;
                  // }
                  handleAddToCart(
                    'CT',
                    { stmpInst, dmPrdInst, szInst, spcRem, subRem },
                    { selectedMetal, selectedDiamond, selectedPurity, selectedTone, selectedSize },
                    {
                      OdCoCd: productDetailData?.OdCoCd,
                      OdTc: productDetailData?.OdTc,
                      OdYy: productDetailData?.OdYy,
                      OdChr: productDetailData?.OdChr,
                      OdNo: productDetailData?.OdNo,
                      OdSr: productDetailData?.OdSr,
                      OdDmCd: productDetailData?.OdDmCd,
                      OdSalPrc: productDetailData?.OdSalPrc,
                      OdSfx: productDetailData?.OdSfx,
                      OdDmSz: productDetailData?.OdDmSz,
                      price: price,
                      OdIdNo: productDetailData?.OdIdNo,
                    },
                    setClearSelectedState,
                    designSizes.find((obj: any) => obj[productDetailData?.DmCtg] !== undefined)?.isEditable === 'Y' ? true : false,
                    customerCode?.value,
                  );
                }}
                disabled={(cartData?.length > 0 && cartData?.some((item: any) => item === productDetailData?.name)) || isAttributeValueChanged}
              >
                {btnLoader ? (
                  <span className="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>
                ) : 
                cartData?.length > 0 && cartData?.some((item: any) => item === productDetailData?.name) ? (
                  'Added to Cart'
                ) : (
                  t('add_to_cart')
                )}
              </button>
            )}
            {odChr === 'IQT' && (
              <button
                className={` btn btn-sm ${styles.addToCartButton}`}
                onClick={() => {
                  if (currentScope !== 'Database' && currentScope !== 'Stock' && productDetailData?.hasSalPrc !== 0) {
                    showErrorToast({ title: `Items with "Price Not Available" cannot be added to Stock Cart.`});
                    return;
                  }
                  handleAddToCart(
                    'SCT',
                    { stmpInst, dmPrdInst, szInst, spcRem, subRem },
                    { selectedMetal, selectedDiamond, selectedPurity, selectedTone, selectedSize },
                    {
                      OdCoCd: productDetailData?.OdCoCd,
                      OdTc: productDetailData?.OdTc,
                      OdYy: productDetailData?.OdYy,
                      OdChr: productDetailData?.OdChr,
                      OdNo: productDetailData?.OdNo,
                      OdSr: productDetailData?.OdSr,
                      OdDmCd: productDetailData?.OdDmCd,
                      OdSalPrc: productDetailData?.OdSalPrc,
                      OdSfx: productDetailData?.OdSfx,
                      OdDmSz: productDetailData?.OdDmSz,
                      price: price,
                      OdIdNo: productDetailData?.OdIdNo,
                      stkId: productDetailData?.stkId,
                      OdMainMet: productDetailData?.OdMainMet,
                      StnCls: productDetailData?.StnCls,
                    },
                    setClearSelectedState,
                    designSizes.find((obj: any) => obj[productDetailData?.DmCtg] !== undefined)?.isEditable === 'Y' ? true : false,
                    customerCode?.value,
                  );
                }}
                disabled={(cartData?.length > 0 && cartData?.some((item: any) => item === productDetailData?.name)) || isAttributeValueChanged}
              >
                {stockBtnLoader ? (
                  <span className="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>
                ) :  
                cartData?.length > 0 && cartData?.some((item: any) => item === productDetailData?.name) ? (
                  'Added to Stock Cart'
                ) : (
                  t('add_to_stock_cart')
                )}
              </button>
            )}
          </div>
        ) : (
          <button
            className={` btn btn-sm ${styles.fetchPriceButton}`}
            onClick={refreshPrice}
            disabled={
              selectedMetal === '' || selectedDiamond === '' || selectedPurity === '' || selectedTone === '' || !isAttributeValueChanged
            }
          >
            {fetchPriceBtnLoader ? (
              <span className="spinner-border spinner-border-sm text-kc-primary-brown" role="status" aria-hidden="true"></span>
            ) : (odChr === 'CT' || odChr === 'SCT') ? (
              `${t('update')} ${t('cart')}`
            ) :(
              t('get_price')
            )}
          </button>
        )}
      </div>
      <div className="mt-2 d-flex justify-content-between align-items-end">
        <p style={{ color: '#2B2B2BB8', fontSize: '14px', margin: '0 0 4px' }}>
          {bottomProductInfo.map((info, index) => (
            info.value && (
              <span key={index} style={{ borderRight: index < bottomProductInfo.length - 1 && index !== bottomProductInfo.length - 1 ? '1px solid #D1D1D1' : 'none', padding: index !== 0 && index < bottomProductInfo.length ? '0 6px 0' : '0 6px 0 0' }}>
                {info.label}: <span className="fw-bold">{info.value}</span>
              </span>
            )
          ))}
        </p>
        <p className="fw-bold m-0 lato-regular" style={{ fontSize: '20px', color: '#FC9159' }}>
          {productDetailData?.hasSalPrc === 0 ? formatPriceBasedOnCurrency(selectedCurrency?.symbol, price) : "Price Not Available"}
        </p>
      </div>
      {error && <div className="alert alert-danger py-1 w-100">{error}</div>}
    </div>
  );
}
