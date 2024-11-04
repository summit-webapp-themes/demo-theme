import Link from 'next/link';
import Image from 'next/image';
import { CONSTANTS } from '../../../../services/config/app-config';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const BrandsData = ({ brandListing }: any) => {
  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const responsive: any = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <div className="container-fluid slider-container mt-5">
      <h4 className="mt-2 fw-bold">Our Top Brands</h4>
      <div className="row mt-3">
        <Carousel responsive={responsive}>
          {brandListing?.length > 0 &&
            brandListing?.map((val: any, j: any) => (
              <div key={`${j}`} className="card-wrapper mx-auto " style={{ width: '96%' }}>
                <Link href={val?.url} className="banner-title text-white text-capitalize ls-25 homecategory_btnlink">
                  <div className="category-banner banner banner-fixed ">
                    <Image loader={imageLoader} src={val?.image} alt="Brand Images" width={130} height={130} priority={false} />
                  </div>
                </Link>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BrandsData;
