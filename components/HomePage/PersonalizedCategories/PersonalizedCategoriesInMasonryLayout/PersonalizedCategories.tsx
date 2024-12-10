import Link from 'next/link';
import Image from 'next/image';
import style from '../../../../styles/components/personalizedCategories.module.scss';
import { Button } from 'react-bootstrap';
import { imageLoader } from '../../../../utils/image_loader';

const PersonalizedCategories = ({ homeTopCategories }: any) => {
  return (
    <div className="container slider-container mt-2">
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
                  alt={homeTopCategories[0]?.label}
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
              {homeTopCategories[0]?.label}
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
                    alt={homeTopCategories[1]?.label}
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
                {homeTopCategories[1]?.label}
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
                    alt={homeTopCategories[2]?.label}
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
                {homeTopCategories[2]?.label}
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
                  alt={homeTopCategories[3]?.label}
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
              {homeTopCategories[3]?.label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedCategories;
