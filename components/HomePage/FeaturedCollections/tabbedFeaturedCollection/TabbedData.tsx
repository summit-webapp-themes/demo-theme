import React, { useState } from 'react';
import styles from '../../../../styles/components/home.module.scss';
import CarouselCommonComponent from '../CarouselCommonComponent';

type Props = {
  data: any;
  addToCartItem: any;
  getPartyName: any;
  wishlistData: any;
};

const TabbedData = (props: Props) => {
  const [activeTab, setActivetab] = useState(0);
  const { data, addToCartItem, getPartyName, wishlistData } = props;
  const handleTabChange = (index: number) => {
    setActivetab(index);
  };
  return (
    <div className="my-3">
      <div className="text-center">
        <h4 className="fw-bold mb-0">Shop Our Products</h4>
      </div>
      <div className="text-center">
        <p className="fs-6">{data[activeTab]?.description}</p>
      </div>

      <div className="">
        <div className="text-center">
          <ul className="nav justify-content-center flex-row">
            {data?.map((item: any, index: any) => (
              <li className="nav-item" key={index}>
                <button
                  className={`nav-link ${activeTab === index ? styles.activeTabButton : ''} ${styles.tabButton} m-2`}
                  onClick={() => handleTabChange(index)}
                >
                  {item?.tag_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3">
          {data && data[activeTab]?.value?.length > 0 && (
            <CarouselCommonComponent
              item={data[activeTab]?.value}
              addToCartItem={addToCartItem}
              getPartyName={getPartyName}
              wishlistData={wishlistData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TabbedData;
