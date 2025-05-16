import { useState, useEffect } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import useCart from '../../../../hooks/addon-hooks/useCart';
import styles from '../../../../styles/addon-styles/productPageV2Components.module.scss';
import { getPriceList } from "../../../../services/addon-services/api/emr-api's/price-api/get-price-list";
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import useHandleProductData from '../../../../hooks/addon-hooks/useHandleProductData';

export default function FallbackProductInformation({
  productDetailData,
  cartData,
  error,
  handleMainQuantityChange,
  quantity,
  handleAddToCart,
  btnLoader,
}: any) {
  const TokenFromStore: any = useSelector(get_access_token);
  const [price, setPrice] = useState<number>(0);
  const [priceList, setPriceList] = useState<any>({});

  const {
    setSelectedMetal,
    selectedMetal,
    setSelectedPurity,
    selectedPurity,
    setSelectedTone,
    selectedTone,
    setSelectedDiamond,
    selectedDiamond,
    setSelectedSize,
    selectedSize,
    setClearSelectedState,
  } = useHandleProductData(productDetailData);

  useEffect(() => {
    const fetchPriceListData = async () => {
      const priceList = await getPriceList('GET', 'price-list-api', undefined, TokenFromStore?.token);
      if (priceList?.status === 200 && priceList?.data?.msg === 'success') {
        setPriceList({ ...priceList?.data?.data });
      } else {
        setPriceList({});
      }
    };
    setPrice(productDetailData?.OdSalPrc);
    fetchPriceListData();
  }, []);
  type Variant = {
    variant_code: string;
    slug: string;
    Metal: string;
    Purity: string | null;
    Diamond: string;
    stock: boolean;
    image: any[];
  };

  type Attribute = {
    field_name: string;
    label: string;
    values: (string | number)[];
    default_value: string | number | null;
    display_thumbnail: boolean;
  };

  type VariantsData = {
    item_code: string;
    variants: Variant[];
    attributes: Attribute[];
  };

  const variantsData: VariantsData = {
    item_code: 'PD005017A',
    variants: [
      {
        variant_code: 'Gold-9Kt-I1',
        slug: 'gold-9kt-i1',
        Metal: 'Gold',
        Purity: '9Kt',
        Diamond: 'I1',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-9Kt-SI',
        slug: 'gold-9kt-si',
        Metal: 'Gold',
        Purity: '9Kt',
        Diamond: 'SI',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-9Kt-VS',
        slug: 'gold-9kt-vs',
        Metal: 'Gold',
        Purity: '9Kt',
        Diamond: 'VS',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-9Kt-LGD',
        slug: 'gold-9kt-lgd',
        Metal: 'Gold',
        Purity: '9Kt',
        Diamond: 'LGD',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-10Kt-I1',
        slug: 'gold-10kt-i1',
        Metal: 'Gold',
        Purity: '10Kt',
        Diamond: 'I1',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-10Kt-SI',
        slug: 'gold-10kt-si',
        Metal: 'Gold',
        Purity: '10Kt',
        Diamond: 'SI',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-10Kt-VS',
        slug: 'gold-10kt-vs',
        Metal: 'Gold',
        Purity: '10Kt',
        Diamond: 'VS',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-10Kt-LGD',
        slug: 'gold-10kt-lgd',
        Metal: 'Gold',
        Purity: '10Kt',
        Diamond: 'LGD',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-14Kt-I1',
        slug: 'gold-14kt-i1',
        Metal: 'Gold',
        Purity: '14Kt',
        Diamond: 'I1',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-14Kt-SI',
        slug: 'gold-14kt-si',
        Metal: 'Gold',
        Purity: '14Kt',
        Diamond: 'SI',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-14Kt-VS',
        slug: 'gold-14kt-vs',
        Metal: 'Gold',
        Purity: '14Kt',
        Diamond: 'VS',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-14Kt-LGD',
        slug: 'gold-14kt-lgd',
        Metal: 'Gold',
        Purity: '14Kt',
        Diamond: 'LGD',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-18Kt-I1',
        slug: 'gold-18kt-i1',
        Metal: 'Gold',
        Purity: '18Kt',
        Diamond: 'I1',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-18Kt-SI',
        slug: 'gold-18kt-si',
        Metal: 'Gold',
        Purity: '18Kt',
        Diamond: 'SI',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-18Kt-VS',
        slug: 'gold-18kt-vs',
        Metal: 'Gold',
        Purity: '18Kt',
        Diamond: 'VS',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Gold-18Kt-LGD',
        slug: 'gold-18kt-lgd',
        Metal: 'Gold',
        Purity: '18Kt',
        Diamond: 'LGD',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Platinum-I1',
        slug: 'platinum-i1',
        Metal: 'Platinum',
        Purity: null,
        Diamond: 'I1',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Platinum-SI',
        slug: 'platinum-si',
        Metal: 'Platinum',
        Purity: null,
        Diamond: 'SI',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Platinum-VS',
        slug: 'platinum-vs',
        Metal: 'Platinum',
        Purity: null,
        Diamond: 'VS',
        stock: false,
        image: [],
      },
      {
        variant_code: 'Platinum-LGD',
        slug: 'platinum-lgd',
        Metal: 'Platinum',
        Purity: null,
        Diamond: 'LGD',
        stock: false,
        image: [],
      },
    ],
    attributes: [
      {
        field_name: 'Metal',
        label: 'Metal',
        values: ['Gold', 'Platinum'],
        default_value: null,
        display_thumbnail: false,
      },
      {
        field_name: 'Purity',
        label: 'Select Purity',
        values: ['9KT', '10KT', '14KT', '18KT'],
        default_value: null,
        display_thumbnail: false,
      },

      {
        field_name: 'Tone',
        label: 'Select Tone',
        values: ['Yellow', 'White', 'Pink'],
        default_value: null,
        display_thumbnail: false,
      },
      {
        field_name: 'Diamond',
        label: 'Diamond',
        values: ['I1', 'SI', 'VS', 'LGD'],
        default_value: null,
        display_thumbnail: false,
      },
      {
        field_name: 'Size',
        label: 'Size',
        values: [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5],
        default_value: null,
        display_thumbnail: false,
      },
    ],
  };
  const handleAttributeChange = (field: string, value: any) => {
    console.log('values', field, value);
    const setterMap: any = {
      Metal: setSelectedMetal,
      Purity: setSelectedPurity,
      Tone: setSelectedTone,
      Diamond: setSelectedDiamond,
      Size: setSelectedSize,
    };

    setterMap[field]?.(value);

    // Update price on Metal/Purity/Diamond changes
    if (['Metal', 'Purity', 'Diamond'].includes(field)) {
      const updatedValues = {
        Metal: field === 'Metal' ? value : selectedMetal,
        Purity: field === 'Purity' ? value : selectedPurity,
        Diamond: field === 'Diamond' ? value : selectedDiamond,
      };

      const metal = updatedValues.Metal?.toLowerCase() || '';
      const purity = updatedValues.Metal === 'Gold' ? updatedValues.Purity?.toLowerCase() || '' : 'x';
      const diamond = updatedValues.Diamond?.toLowerCase() || '';

      const key = updatedValues.Metal === 'Gold' ? `${metal}-${purity}-x-${diamond}-x` : `${metal}-x-x-${diamond}-x`;

      console.log('key', key);
      console.log('priceList[key]', priceList[key]);

      if (key && priceList[key]) {
        setPrice(priceList[key]);
      } else {
        console.log('in else');
      }
    }
  };
  return (
    <div className="bg-white" style={{ border: '1px solid #DADADA', borderRadius: '10px', padding: '28px' }}>
      <h3 className="fw-semibold m-0" style={{ fontSize: '22px', color: '#2B2B2B' }}>
        {productDetailData?.OdDmCd}
      </h3>
      <p className="fw-bold mb-2" style={{ fontSize: '20px', color: '#E69E17' }}>
        €{price}
      </p>
      <div style={{ borderBottom: '1px solid #E3E3E3', paddingBottom: '8px' }}>
        {error && <div className="alert alert-danger py-1">{error}</div>}

        {/* Dynamically Render All Attributes */}
        {variantsData.attributes.map((attribute, index) => {
          // Skip Purity and Tone if selectedMetal is not Gold
          if ((attribute.field_name === 'Purity' || attribute.field_name === 'Tone') && selectedMetal !== 'Gold') {
            return null;
          }

          const selectedValueMap: any = {
            Metal: selectedMetal,
            Purity: selectedPurity,
            Tone: selectedTone,
            Diamond: selectedDiamond,
            Size: selectedSize,
          };

          const setterMap: any = {
            Metal: setSelectedMetal,
            Purity: setSelectedPurity,
            Tone: setSelectedTone,
            Diamond: setSelectedDiamond,
            Size: setSelectedSize,
          };

          return (
            <div key={index} className="d-flex flex-column align-items-start gap-1" style={{ marginTop: '0' }}>
              <p className="fs-12 m-0" style={{ color: '#909090' }}>
                {attribute.label}
              </p>
              <div className="d-flex flex-wrap align-items-center justify-content-start gap-2 mb-2">
                {attribute.values.map((value: any, idx: number) => (
                  <button
                    key={idx}
                    className={`btn btn-sm ${styles.detailsButton}`}
                    onClick={() => handleAttributeChange(attribute.field_name, value)}
                    style={{
                      padding: attribute.label === 'Size' ? '8px 16px' : '8px 24px',
                      minWidth: attribute.label === 'Size' ? '58px' : 'fit-content',
                      color: selectedValueMap[attribute.field_name] === value ? '#E69E17' : '#2B2B2B',
                      backgroundColor: selectedValueMap[attribute.field_name] === value ? '#FFF4E0' : '#F2F5F6',
                      border: selectedValueMap[attribute.field_name] === value ? '1px solid #F0CC88' : '1px solid #DADDDF',
                    }}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" d-flex mt-3 justify-content-between align-items-center flex-wrap gap-2">
        {/* Quantity Controls */}
        <div
          className="input-group flex-nowrap"
          style={{ width: 'fit-content', border: '1px solid #EBEBEB', borderRadius: '6px', color: 'black' }}
        >
          <button
            className="btn d-flex border-0 border-end justify-content-center align-items-center"
            style={{ backgroundColor: '#F5F5F5', padding: '8px 11px' }}
            onClick={() => handleMainQuantityChange(quantity, -1)}
          >
            <FiMinus size={18} />
          </button>
          <div className="form-control text-center border-0 text-black" style={{ width: '80px', padding: '8px 11px' }}>
            {quantity}
          </div>
          <button
            className="btn d-flex border-0 border-start justify-content-center align-items-center"
            style={{ backgroundColor: '#F5F5F5', padding: '8px 11px' }}
            onClick={() => handleMainQuantityChange(quantity, 1)}
          >
            <FiPlus size={18} />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          className={` btn btn-sm ${styles.addToCartButton}`}
          onClick={() =>
            handleAddToCart(
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
                price: price,
              },
              setClearSelectedState
            )
          }
          disabled={cartData?.length > 0 && cartData?.some((item: any) => item === productDetailData?.name)}
        >
          {btnLoader ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : cartData?.length > 0 && cartData?.some((item: any) => item === productDetailData?.name) ? (
            'Added to Cart'
          ) : (
            'Add To Cart'
          )}
        </button>
      </div>
    </div>
  );
}
