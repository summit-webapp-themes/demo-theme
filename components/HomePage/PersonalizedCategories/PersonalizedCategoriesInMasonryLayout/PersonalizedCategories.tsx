import Link from 'next/link';
import Image from 'next/image';
import style from '../../../../styles/components/personalizedCategories.module.scss';
import { Button } from 'react-bootstrap';
import { imageLoader } from '../../../../utils/image_loader';

const PersonalizedCategories = ({ homeTopCategories }: any) => {
  return (
    <div className="custom-container-xl  pt-4">
      <div className="row">
        <div
          className={`col-12 col-md-6 pb-3 pb-md-0 pe-0 ${style.masonryContainerImage} ${style.masonryContainerImage_wrapper}  ${style.masonryContainerImage_wrapper_women} `}
        >
          <Link
            href={`${homeTopCategories[0]?.category_url}`}
            className="banner-title text-white text-capitalize ls-25 homecategory_btnlink "
          >
            <div className={style.women_image_container}>
              <div className={style.image_wrapper}>
                <Image
                  loader={imageLoader}
                  className={`w-100 ${style.masonry_image_1} `}
                  src={homeTopCategories?.length > 0 && homeTopCategories[0]?.product_img}
                  alt={homeTopCategories[0]?.label}
                  objectFit="cover"
                  width={100}
                  height={630}
                  loading="eager"
                  priority={true}
                />
              </div>
            </div>
          </Link>
          <div className={`${style.masonryContainerButton} `}>
            <Button variant="dark" className={style.masonry_btn}>
              <div className={style.masonry_btn_text}>{homeTopCategories[0]?.label}</div>
            </Button>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="row">
            <div className={`col-6 m-0 px-4`}>
              <div className={` mb-md-4  ${style.masonryContainerImage_wrapper} ${style.masonryContainerImage}`}>
                <Link
                  href={`${homeTopCategories[1]?.category_url}`}
                  className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
                >
                  <div className={style.image_container}>
                    <div className={style.image_wrapper}>
                      <Image
                        loader={imageLoader}
                        className={`w-100 h-100`}
                        src={homeTopCategories?.length > 0 && homeTopCategories[1]?.product_img}
                        alt={homeTopCategories[1]?.label}
                        layout="responsive"
                        width={270}
                        height={320}
                        loading="eager"
                        priority={true}
                      />
                    </div>
                  </div>
                </Link>

                <div className={style.masonryContainerButton}>
                  <Button variant="dark" className={style.masonry_btn}>
                    <div className={style.masonry_btn_text}>{homeTopCategories[1]?.label}</div>
                  </Button>
                </div>
              </div>
              <div className={`${style.masonryContainerImage} ${style.masonryContainerImage_wrapper} `}>
                <Link
                  href={`${homeTopCategories[2]?.category_url}`}
                  className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
                >
                  <div className={style.image_container}>
                    <div className={style.image_wrapper}>
                      <Image
                        loader={imageLoader}
                        className={`w-100 h-100`}
                        src={homeTopCategories?.length > 0 && homeTopCategories[2]?.product_img}
                        alt={homeTopCategories[2]?.label}
                        layout="responsive"
                        width={270}
                        height={320}
                        loading="eager"
                        priority={true}
                      />
                    </div>
                  </div>
                </Link>

                <div className={style.masonryContainerButton}>
                  <Button variant="dark" className={style.masonry_btn}>
                    <div className={style.masonry_btn_text}>{homeTopCategories[2]?.label}</div>
                  </Button>
                </div>
              </div>
            </div>
            <div className={`col-6 p-md-0 w-50  ${style.masonryContainerImage} ${style.masonryContainerImage_wrapper} `}>
              <Link
                href={`${homeTopCategories[3]?.category_url}`}
                className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
              >
                <div className={style.watch_image_container}>
                  <div className={style.image_wrapper}>
                    <Image
                      loader={imageLoader}
                      className={`w-100 `}
                      style={{ maxWidth: '100%', objectFit: 'cover', zIndex: '3' }}
                      src={homeTopCategories?.length > 0 && homeTopCategories[3]?.product_img}
                      alt={homeTopCategories[3]?.label}
                      width={270}
                      height={630}
                      loading="eager"
                      priority={true}
                    />
                  </div>
                </div>
              </Link>
              <div className={style.masonryContainerButton}>
                <Button variant="dark" className={style.masonry_btn}>
                  <div className={style.masonry_btn_text}>{homeTopCategories[3]?.label}</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedCategories;
