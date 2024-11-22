import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import CarouselItem from 'react-bootstrap/CarouselItem';
import style from '../../../../styles/components/home.module.scss';
import { CONSTANTS } from '../../../../services/config/app-config';

const BannerCarousel = ({ bannersList }: any) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}/${src}?w=${width}&q=${quality || 75}`;
  };
  console.log(bannersList, 'bannersList');
  return (
    <Carousel controls={false}>
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
                width={1920}
                height={700}
                // style={{ width: '100%' }}
              />
              <CarouselCaption className="corousel-captionn">
                <div className={``} key={index}>
                  <p className={style.banner_p_tag}>Summer 2023</p>
                  <h2 className={style.bannerTitle}>{banners?.heading}</h2>
                  <a href={banners.button_1_url} className="text-white">
                    <span className={`btn btn-primary ${style.banner_btn}`}>
                      {banners?.button_1_title} &nbsp; <i className="fa fa-forward text-light align-items-center"></i>
                    </span>
                  </a>
                </div>
              </CarouselCaption>
            </Link>
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};

export default BannerCarousel;
