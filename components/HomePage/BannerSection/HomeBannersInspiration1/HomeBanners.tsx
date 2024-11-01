import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import CarouselItem from 'react-bootstrap/CarouselItem';
import style from '../../../../styles/components/home.module.scss';

const BannerCarousel = ({ bannersList }: any) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <Carousel>
      {bannersList?.map((banners: any, index: number) => {
        return (
          <CarouselItem key={index}>
            <Link href={`${banners.button_1_url}`}>
              <Image
                loader={myLoader}
                className={`d-block image-fluid ${style.catagoryImg}`}
                src={banners?.img}
                alt="Banner Images"
                loading="eager"
                priority={true}
                width={1600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
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

export default BannerCarousel;
