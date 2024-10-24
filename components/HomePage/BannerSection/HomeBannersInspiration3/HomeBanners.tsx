import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';

type BannersProps = {
  bannersList: BannerData[];
};

type BannerData = {
  img: string;
  sequence: number;
  button_1_url: string;
};

const BannersData = ({ bannersList }: BannersProps) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  // Initialize leftBanner, rightBanner, and middleCarouselBannersList
  let leftBanner: any = null;
  let rightBanner: any = null;
  const carouselBannersList: any = [];

  // Iterate through banners and assign them based on their sequence
  bannersList.forEach((banner) => {
    if (banner.sequence === 1) {
      leftBanner = banner;
    } else if (banner.sequence === Math.max(...bannersList.map((b) => b.sequence))) {
      rightBanner = banner;
    } else {
      carouselBannersList.push(banner);
    }
  });

  // Sort the carouselBannersList by sequence
  carouselBannersList.sort((a: any, b: any) => a.sequence - b.sequence);
  return (
    <div className="main-carousel-data row">
      <div className="col-md-3 col-sm-12">
        <Image loader={myLoader} src={leftBanner?.img} className={`d-block w-100`} alt="Banner Imgs" width={400} height={400} />
      </div>
      <div className="col-md-6 col-sm-12">
        <Carousel>
          {carouselBannersList?.length > 0 &&
            carouselBannersList?.map((banners: any, index: number) => {
              return (
                <CarouselItem key={index}>
                  <Link href={`${banners.button_1_url}`}>
                    <Image
                      loader={myLoader}
                      className={`d-block w-100`}
                      src={banners?.img}
                      alt="Banner Images"
                      loading="eager"
                      priority={true}
                      width={400}
                      height={400}
                    />
                  </Link>
                </CarouselItem>
              );
            })}
        </Carousel>
      </div>
      <div className="col-md-3 col-sm-12">
        <Image loader={myLoader} src={rightBanner?.img} className={`d-block w-100`} alt="Banner Imgs" width={400} height={400} />
      </div>
    </div>
  );
};

export default BannersData;
