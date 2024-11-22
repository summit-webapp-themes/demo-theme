import Link from 'next/link';
import Image from 'next/image';
import { CONSTANTS } from '../../../../services/config/app-config';
import style from '../../../../styles/components/home.module.scss';
import { Button } from 'react-bootstrap';

const PersonalizedCategories = ({ homeTopCategories }: any) => {
  console.log(homeTopCategories, 'homeTopCategories');
  const imageLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className="container slider-container mt-4">
      {/* <h4 className="mt-2 fw-bold">Our Handpicked Categories for You</h4> */}
      <div className="row mt-3">
        <div className={`col-sm-12 col-md-6 col-lg-6 col-xl-5 ${style.masonryContainerImage}`}>
          <div>
            <Link
              href={`${homeTopCategories[0]?.category_url}`}
              className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
            >
              <div className="category-banner banner banner-fixed " style={{ maxWidth: '100%', height: 'auto' }}>
                <Image
                  loader={imageLoader}
                  className={`w-100 ${style.catagoryImg}`}
                  src={homeTopCategories?.length > 0 && homeTopCategories[0]?.product_img}
                  alt="Picture of the author"
                  width={570}
                  height={630}
                  loading="eager"
                  priority={true}
                />
              </div>
            </Link>
          </div>
          <div className={style.masonryContainerButton}>
            <Button variant="dark" className={style.masonry_btn}>
              Women
            </Button>
          </div>
        </div>
        <div className={`col-sm-12 col-md-4 d-md-none d-lg-block col-lg-3 col-xl-3`}>
          <div className={`mb-4 ${style.masonryContainerImage}`}>
            <div>
              <Link
                href={`${homeTopCategories[1]?.category_url}`}
                className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
              >
                <div className="category-banner banner banner-fixed " style={{ maxWidth: '100%', height: 'auto' }}>
                  <Image
                    loader={imageLoader}
                    className={`w-100 ${style.catagoryImg}`}
                    src={homeTopCategories?.length > 0 && homeTopCategories[1]?.product_img}
                    alt="Picture of the author"
                    width={270}
                    height={303}
                    loading="eager"
                    priority={true}
                  />
                </div>
              </Link>
            </div>
            <div className={style.masonryContainerButton}>
              <Button variant="dark" className={style.masonry_btn}>
                Accessories
              </Button>
            </div>
          </div>
          <div className={style.masonryContainerImage}>
            <div>
              <Link
                href={`${homeTopCategories[2]?.category_url}`}
                className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
              >
                <div className="category-banner banner banner-fixed " style={{ maxWidth: '100%', height: 'auto' }}>
                  <Image
                    loader={imageLoader}
                    className={`w-100 ${style.catagoryImg}`}
                    src={homeTopCategories?.length > 0 && homeTopCategories[2]?.product_img}
                    alt="Picture of the author"
                    width={270}
                    height={303}
                    loading="eager"
                    priority={true}
                  />
                </div>
              </Link>
            </div>
            <div className={style.masonryContainerButton}>
              <Button variant="dark" className={style.masonry_btn}>
                Footwear
              </Button>
            </div>
          </div>
        </div>
        <div className={`col-sm-12 col-md-6 col-lg-3 col-xl-4 ${style.masonryContainerImage}`}>
          <div>
            <Link
              href={`${homeTopCategories[3]?.category_url}`}
              className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
            >
              <div className="category-banner banner banner-fixed " style={{ maxWidth: '100%', height: 'auto' }}>
                <Image
                  loader={imageLoader}
                  className={`w-100 ${style.catagoryImg}`}
                  src={homeTopCategories?.length > 0 && homeTopCategories[3]?.product_img}
                  alt="Picture of the author"
                  width={570}
                  height={630}
                  loading="eager"
                  priority={true}
                />
              </div>
            </Link>
          </div>
          <div className={style.masonryContainerButton}>
            <Button variant="dark" className={style.masonry_btn}>
              Watches
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedCategories;
