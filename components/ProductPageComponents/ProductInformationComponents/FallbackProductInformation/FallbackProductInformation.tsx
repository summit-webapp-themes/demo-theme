import { t } from "i18next";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { MdOutlineInfo } from "react-icons/md";
import styles from '../../../../styles/addon-styles/productPageV2Components.module.scss';
import { FiMinus, FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import useKCLayoutHandler from "../../../../hooks/addon-hooks/kc-hooks/useKCLayoutHandler";
import { ProductDataState } from "../../../../hooks/addon-hooks/kc-hooks/useHandleProductData";
import fetchItemPriceUtility from "../../../../utils/addon-utils/fetch-price";
import { useSelector } from "react-redux";
import { get_access_token } from "../../../../store/slices/auth/token-login-slice";
import { decodeWithSalt } from "../../../../utils/addon-utils/encode-data";
import useCurrencyLanguageHandler from "../../../../hooks/GeneralHooks/KCLanguageHandler";
import { KCFromStore } from "../../../../store/slices/general_slices/kc-slice";
import { useTranslation } from "react-i18next";

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
  stmpInst,
  dmPrdInst,
  szInst,
  spcRem,
  subRem,
  setProductState,
  setClearSelectedState,
} : any) {
  const { goldRate, platinumRate, palladiumRate, silverRate } = useSelector(KCFromStore);
  const {
    designSizes,
    attributesData,
    loadingAttributeData,
  } = useKCLayoutHandler();
  const { t } = useTranslation('common');
  const TokenFromStore: any = useSelector(get_access_token);
  const { selectedCurrency } = useCurrencyLanguageHandler();
  const [price, setPrice] = useState<number>(0);
  const [updatedSfx, setUpdatedSfx] = useState<string>(productDetailData?.OdSfx || '');
  const [fetchPriceBtnLoader, setFetchPriceBtnLoader] = useState(false);
  const [isAttributeValueChanged, setIsAttributeValueChanged] = useState(false);
  const [grossWeight, setGrossWeight] = useState(parseFloat(productDetailData?.GrWt) || 0);
  const [diamondWeight, setDiamondWeight] = useState(parseFloat(productDetailData?.DiaWt) || 0);
  const [goldWeight, setGoldWeight] = useState(parseFloat(productDetailData?.GldWt) || 0);
  const [csWeight, setCsWeight] = useState(parseFloat(productDetailData?.CsWt) ||0);
  const [customerCode, setCustomerCode] = useState<{label: string, value: string}>();
  const encodedCustomerData = localStorage.getItem('customer');

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
      value: goldWeight ? `${goldWeight.toFixed(2)}gm` : '',
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
        setError('');
        break;
      case 'Size':
        setProductState((prev: ProductDataState) => ({ ...prev, selectedSize: value }));
        setError('');
        break;
      default:
        break;
    }
    setIsAttributeValueChanged(true);
  };

  console.log(goldRate, platinumRate, palladiumRate, silverRate, 'rates');
  const refreshPrice = async () => {
    setFetchPriceBtnLoader(true);
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
    );

    if (productPriceResponse?.status === 200) {
      const productPrice = parseFloat(productPriceResponse?.data?.data?.[0]?.OdSalPrc)
      setPrice(productPrice);
      setUpdatedSfx(productPriceResponse?.data?.data?.[0]?.OdSfx || '');
      setGrossWeight(productPriceResponse?.data?.data?.[0]?.GrWt || 0);
      setDiamondWeight(productPriceResponse?.data?.data?.[0]?.DiaWt || 0);
      setGoldWeight(productPriceResponse?.data?.data?.[0]?.GldWt || 0);
      setCsWeight(productPriceResponse?.data?.data?.[0]?.CsWt || 0);
      setProductDetailData(productPriceResponse?.data?.data[0]);

      setIsAttributeValueChanged(false);
      setFetchPriceBtnLoader(false);
    } else {
      setError(productPriceResponse || 'Failed to fetch price');
      setPrice(0);
      setFetchPriceBtnLoader(false);
    }
  };

  useEffect(() => {
    const productPrice = productDetailData?.OdSalPrc
    setPrice(productPrice);
    if (encodedCustomerData) {
      const decodedCustomer = encodedCustomerData ? decodeWithSalt(encodedCustomerData, TokenFromStore?.token) : null;
      setCustomerCode(decodedCustomer);
    }
  }, [productDetailData, encodedCustomerData]);

  return (
    <div className="bg-white h-100" style={{ border: '1px solid #DADADA', borderRadius: '10px', padding: '12px 28px' }}>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <h3 className="fw-semibold mb-0" style={{ fontSize: '22px', color: '#2B2B2B' }}>
          {productDetailData?.OdDmCd}
        </h3>
      </div>
      <p style={{ color: '#2B2B2BB8', fontSize: '14px', margin: '0px' }}>
        {topProductInfo.map((info, index) => (
          info.value && (
            <span key={index} style={{ borderRight: index < topProductInfo.length - 1 && index !== topProductInfo.length - 1 ? '1px solid #D1D1D1' : 'none', padding: index !== 0 && index < topProductInfo.length ? '0 6px 0' : '0 6px 0 0' }}>
              {info.label}: <span className="fw-bold">{info.value}</span>
            </span>
          )
        ))}
      </p>

      <div style={{ borderBottom: '1px solid #E3E3E3', paddingBottom: '8px' }}>
        {/* Dynamically Render All Attributes */}
        {attributesData?.length > 0 && !loadingAttributeData ? (
          attributesData?.map((attribute: any, index: number) => {

            const selectedValueMap: any = {
              Metal: selectedMetal,
              Purity: selectedPurity,
              Tone: selectedTone,
              Diamond: selectedDiamond,
              Size: selectedSize,
            };

            const attributeValues =
              attribute.field_name === 'Purity' || attribute.field_name === 'Tone' ? selectedMetal && attribute[selectedMetal] : attribute.values;

            return (
              attributeValues?.length > 0 && (
                <div
                  key={index}
                  className="d-flex flex-column align-items-start gap-1"
                  style={{ marginTop: "0" }}
                >
                  {attribute.field_name !== "Size" ? (
                    <>
                      <div
                        className="d-flex justify-content-center align-items-start gap-1"
                        style={{ color: "#909090" }}
                      >
                        <p className="fs-12 m-0">{t(attribute.field_name?.toLowerCase())}</p>
                      </div>

                      <div className="d-flex flex-wrap align-items-center justify-content-start gap-2 mb-1">
                        {attributeValues?.map((value: any, idx: number) => (
                          <button
                            key={idx}
                            className={`btn btn-sm ${
                              selectedValueMap[attribute.field_name] === value.id
                                ? styles.detailsButtonActive
                                : styles.detailsButton
                            }`}
                            onClick={() => handleAttributeChange(attribute.field_name, value.id)}
                          >
                            {attribute.field_name === "Metal" || attribute.field_name === "Tone"
                              ? t(value.value)
                              : value.value}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    // Size attribute → only render if sizes exist for this DmCtg
                    (() => {
                      const matchedCtg = designSizes.find((obj: any) => obj[productDetailData?.DmCtg] !== undefined);

                      if (matchedCtg?.isEditable !== "Y") {
                        return null;
                      } else {
                        return (
                          <>
                            <div
                              className="d-flex justify-content-center align-items-start gap-1"
                              style={{ color: "#909090" }}
                            >
                              <p className="fs-12 m-0">{t(attribute.field_name?.toLowerCase())}</p>
  
                              {(productDetailData?.DmCtg === "BNG" ||
                                productDetailData?.DmCtg === "BRC") && (
                                <OverlayTrigger
                                  trigger={"hover"}
                                  rootClose
                                  placement="right"
                                  overlay={sizeInfoPopOver}
                                >
                                  <button
                                    className=" bg-transparent border-0 p-0"
                                    style={{ maxHeight: "16px" }}
                                  >
                                    <MdOutlineInfo
                                      size={16}
                                      style={{ color: "#909090", verticalAlign: "text-top" }}
                                    />
                                  </button>
                                </OverlayTrigger>
                              )}
                            </div>
  
                            <div className="d-flex flex-wrap align-items-center justify-content-start gap-2 mb-1">
                              {matchedCtg[productDetailData.DmCtg].map((size: string, idx: number) => (
                                <button
                                  key={idx}
                                  className={`btn btn-sm ${
                                    selectedSize === size
                                      ? styles.detailsButtonActive
                                      : styles.detailsButton
                                  } ${styles.sizeDetailButton}`}
                                  onClick={() => handleAttributeChange("Size", size)}
                                >
                                  {size}
                                </button>
                              ))}
                            </div>
                          </>
                        );
                      }
                    })()
                  )}
                </div>
              )
            );
          })
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </div>
        )}
      </div>
      <div className=" d-flex mt-2 justify-content-between align-items-center flex-wrap gap-2">
        {/* Quantity Controls */}
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
          <div className="form-control text-center border-0 text-black" style={{ width: '60px', padding: '2px 6px' }}>
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

        {/* Add to Cart Button */}
        {!isAttributeValueChanged ? (
          <div className="d-flex gap-2 align-items-center">
            <button
              className={` btn btn-sm ${styles.addToCartButton}`}
              onClick={() => {
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
                  designSizes.find((obj: any) => obj[productDetailData?.DmCtg] !== undefined).isEditable === 'Y' ? true : false,
                  customerCode?.value,
                );
              }}
              disabled={(cartData?.length > 0 && cartData?.some((item: any) => item === productDetailData?.name)) || isAttributeValueChanged}
            >
              {btnLoader ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : cartData?.length > 0 && cartData?.some((item: any) => item === productDetailData?.name) ? (
                'Added to Cart'
              ) : (
                t('add_to_cart')
              )}
            </button>
            <button
              className={` btn btn-sm ${styles.addToCartButton}`}
              onClick={() => {
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
                  },
                  setClearSelectedState,
                  designSizes.find((obj: any) => obj[productDetailData?.DmCtg] !== undefined)?.isEditable === 'Y' ? true : false,
                  customerCode?.value,
                );
              }}
              disabled={(cartData?.length > 0 && cartData?.some((item: any) => item === productDetailData?.name)) || isAttributeValueChanged}
            >
              {stockBtnLoader ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : cartData?.length > 0 && cartData?.some((item: any) => item === productDetailData?.name) ? (
                'Added to Stock Cart'
              ) : (
                t('add_to_stock_cart')
              )}
            </button>
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
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
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
        <p className="fw-bold m-0" style={{ fontSize: '20px', color: '#A69476' }}>
          {selectedCurrency?.symbol}
          {price?.toFixed(2)}
        </p>
      </div>
      {error && <div className="alert alert-danger py-1 w-100">{error}</div>}
    </div>
  );
}
