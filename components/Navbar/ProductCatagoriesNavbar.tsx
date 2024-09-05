import { useRef, useState } from 'react';
import Link from 'next/link';
import { Overlay, Placeholder, Popover } from 'react-bootstrap';
import stylesHeader from '../../styles/components/header.module.scss';

function ProductCatagoriesNavbar({ navbarData, isLoading, errorMessage, multiLanguagesData }: any) {
  const [showPopoverIndex, setShowPopoverIndex] = useState<number | null>(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>, index: number) => {
    setTarget(e.currentTarget);
    setShowPopoverIndex(index);
  };
  const handleMouseLeave = () => {
    setShowPopoverIndex(null);
  };
  const popoverBottom = (item: any) => (
    <Popover id={`popover-${item.label}`} className={`p-2 ${stylesHeader.category_popover} shadow rounded`} onMouseLeave={handleMouseLeave}>
      <div className="row">
        {item?.values?.length > 0 &&
          item?.values !== null &&
          item?.values.map((itemL2: any, index: number) => {
            const columnCount = Math.ceil(itemL2?.values?.length / 8);
            return (
              <div className="col">
                <div className={stylesHeader.heading_category_l2}>
                  <Link
                    href={{
                      pathname: `${itemL2?.url}`,
                      query: { page: '1', currency: 'INR' },
                    }}
                    className="label text-dark text-decoration-none"
                    onClick={() => setShowPopoverIndex(null)}
                  >
                    {itemL2?.label}
                  </Link>
                </div>
                <hr className="m-1" />
                <div className={stylesHeader.col_container}>
                  {Array.from({ length: columnCount }, (_, columnIndex) => (
                    <div key={columnIndex} className={stylesHeader.column}>
                      {itemL2?.values?.slice(columnIndex * 8, (columnIndex + 1) * 8).map((itemL3: any, idx: number) => (
                        <div key={idx} className=" p-1">
                          <Link
                            href={{
                              pathname: `${itemL3?.url}`,
                              query: { page: '1', currency: 'INR' },
                            }}
                            className={stylesHeader.heading_category_l3}
                            onClick={() => setShowPopoverIndex(null)}
                          >
                            {itemL3?.label !== undefined ? itemL3?.label : `${idx}`}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </Popover>
  );
  const handleDataRendering = () => {
    if (isLoading) {
      return <h4>Loading</h4>;
    }
    if (navbarData?.length > 0) {
      return (
        <nav ref={ref}>
          <div className={`${stylesHeader.heading_container} py-2 row`} onMouseLeave={handleMouseLeave}>
            <div className='col-2 col-lg-2'></div>
            <div className='col-8 col-lg-8 d-flex justify-content-start'>

              {navbarData?.length > 0 &&
                navbarData.map((item: any, index: number) => (
                  <div key={index} className={`${stylesHeader.header_category_container}`}>
                    {navbarData === null ? (
                      <Placeholder xs={6} bg="dark" />
                    ) : (
                      <div
                        className={`heading-category-l1 ${showPopoverIndex === index && 'theme-gold'}`}
                        onMouseEnter={(e) => handleMouseEnter(e, index)}
                      >
                        {item.label}
                      </div>
                    )}
                    <Overlay
                      show={showPopoverIndex === index && item?.values?.length > 0}
                      // show={true}
                      target={target}
                      placement="bottom"
                      container={ref.current}
                      containerPadding={20}
                    >
                      {popoverBottom(item)}
                    </Overlay>
                  </div>
                ))}
            </div>
            <div className='col-2'>
              <div className='row'>

                <div className="col-6 ">
                  <select
                    // value={selectedLang}
                    // onChange={(e) => handleLanguageChange(e?.target?.value)}
                    className="select-field cursor_pointer"
                  >
                    {multiLanguagesData?.length > 0 &&
                      multiLanguagesData !== null &&
                      multiLanguagesData?.map((lang: any) => {
                        return <option value={lang?.lang_code}>{lang?.lang_name}</option>;
                      })}
                  </select>
                </div>
                <div className="col-6 ">
                  <select
                    className="select-field cursor_pointer"
                  // onChange={(e) => handleCurrencyValueChange(e.target.value)}
                  >
                    <option value="INR" className="price_font_family">
                      ₹
                    </option>
                    <option value="USD">$</option>
                    <option value="EUR">€</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    }
    // if (errorMessage !== '' && navbarData?.length <= 0 && isLoading === false) {
    //   return <ComponentErrorHandler error={errorMessage} />;
    // }
  };

  return <header>{handleDataRendering()}</header>;
}

export default ProductCatagoriesNavbar;
