import React from 'react';
import useBanner from '../../hooks/HomePageHooks/BannerHook';
import { Carousel } from 'react-bootstrap';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { CONSTANTS } from '../../services/config/app-config';
import Image from 'next/image';
import Link from 'next/link';

const HomeBanner = () => {
  const { allBannerData, isLoading, errorMessage } = useBanner();
  console.log(allBannerData, 'allBannerData');
  const myLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <Carousel>
      {allBannerData?.map((banners: any, index: number) => {
        return (
          <CarouselItem key={index}>
            <Link href={`${banners.button_1_url}`}>
              <Image
                loader={myLoader}
                className="d-block w-100"
                src={banners?.img}
                alt="Banner Images"
                priority
                width={1400}
                height={400}
              />

              <CarouselCaption className="corousel-captionn">
                {banners?.btn_info?.map((btn_item: any, index: number) => (
                  <div className={`text-end carousel_capt`} key={index}>
                    <a href={btn_item?.btn_url} className="text-white">
                      <span className="btn btn-primary banner-btn px-3">
                        {btn_item?.btn_title} &nbsp; <i className="fa fa-forward text-light align-items-center"></i>
                      </span>
                    </a>
                  </div>
                ))}
              </CarouselCaption>
            </Link>
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};

export default HomeBanner;
