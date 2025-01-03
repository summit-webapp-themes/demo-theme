import Link from 'next/link';
import Image from 'next/image';
import style from '../../../../styles/components/personalizedCategoriesShowcaseLayout.module.scss';
import { Button } from 'react-bootstrap';
import { imageLoader } from '../../../../utils/image_loader';

const PersonalizedCategories = ({ homeTopCategories }: any) => {
  return (
    <div className="custom-container-xl px-4  mt-2 ">
      <div className="row mt-3 mb-5" style={{ height: '528px' }}>
        <div className="col-lg-3">
          <div className="d-flex flex-lg-column ">
            <div className="position-relative w-100 w-md-50" style={{ height: '252px' }}>
              <Link
                href={`${homeTopCategories[0]?.category_url}`}
                className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
              >
                <Image
                  loader={imageLoader}
                  className={`w-100 ${style.showcase_image_1}`}
                  src={homeTopCategories?.length > 0 && homeTopCategories[0]?.product_img}
                  alt={homeTopCategories[0]?.label}
                  width={500}
                  height={500}
                  loading="eager"
                  priority={true}
                />
              </Link>
              <div className={style.showCaseContainerButton}>
                <Button variant="dark" className={style.showCase_btn}>
                  {homeTopCategories[0]?.label}
                </Button>
              </div>
            </div>
            <div className="position-relative mt-lg-4 w-100 w-md-50" style={{ height: '252px' }}>
              <Link
                href={`${homeTopCategories[1]?.category_url}`}
                className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
              >
                <Image
                  loader={imageLoader}
                  className={`w-100 ${style.showcase_image_1}`}
                  src={homeTopCategories?.length > 0 && homeTopCategories[1]?.product_img}
                  alt={homeTopCategories[1]?.label}
                  width={500}
                  height={500}
                  loading="eager"
                  priority={true}
                />
              </Link>
              <div className={style.showCaseContainerButton}>
                <Button variant="dark" className={style.showCase_btn}>
                  {homeTopCategories[1]?.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-column ">
            <div style={{ height: '252px' }}>
              <Link
                href={`${homeTopCategories[2]?.category_url}`}
                className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
              >
                <Image
                  loader={imageLoader}
                  className={`w-100 ${style.showcase_image_1}`}
                  src={homeTopCategories?.length > 0 && homeTopCategories[2]?.product_img}
                  alt={homeTopCategories[2]?.label}
                  width={500}
                  height={500}
                  loading="eager"
                  priority={true}
                />
              </Link>
            </div>
            <div className="position-relative mt-lg-4" style={{ height: '252px' }}>
              <Link
                href={`${homeTopCategories[3]?.category_url}`}
                className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
              >
                <Image
                  loader={imageLoader}
                  className={`w-100 ${style.showcase_image_1}`}
                  src={homeTopCategories?.length > 0 && homeTopCategories[3]?.product_img}
                  alt={homeTopCategories[3]?.label}
                  width={500}
                  height={500}
                  loading="eager"
                  priority={true}
                />
              </Link>
              <div className={style.showCaseContainerButton}>
                <Button variant="dark" className={style.showCase_btn}>
                  {homeTopCategories[3]?.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 position-relative" style={{ height: '528px' }}>
          <Link
            href={`${homeTopCategories[4]?.category_url}`}
            className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
          >
            <Image
              loader={imageLoader}
              className={`w-100 ${style.showcase_image_acc}`}
              src={homeTopCategories?.length > 0 && homeTopCategories[4]?.product_img}
              alt={homeTopCategories[4]?.label}
              width={500}
              height={500}
              loading="eager"
              priority={true}
            />
          </Link>
          <div className={style.showCaseContainerButton}>
            <Button variant="dark" className={style.showCase_btn}>
              {homeTopCategories[4]?.label}
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="row mt-3">
        <div className={`col-12 col-md-6 pb-3 pb-md-0 ${style.masonryContainerImage}`}>
          <Link
            href={`${homeTopCategories[0]?.category_url}`}
            className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
          >
            <div style={{ width: '100%', height: '100%' }}>
              <Image
                loader={imageLoader}
                className={`w-100 ${style.image_1}`}
                src={homeTopCategories?.length > 0 && homeTopCategories[0]?.product_img}
                alt={homeTopCategories[0]?.label}
                objectFit="cover"
                width={100}
                height={100}
                loading="eager"
                priority={true}
              />
            </div>
          </Link>
          <div className={style.masonryContainerButton}>
            <Button variant="dark" className={style.masonry_btn}>
              {homeTopCategories[0]?.label}
            </Button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className={`col-6 m-0 h-100`}>
              <div className={`pb-3  mb-md-2 pb-md-1 ${style.masonryContainerImage}`}>
                <Link
                  href={`${homeTopCategories[1]?.category_url}`}
                  className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
                >
                  <div className="" style={{ maxWidth: '100%', height: '100% ' }}>
                    <Image
                      loader={imageLoader}
                      className={`w-100 `}
                      src={homeTopCategories?.length > 0 && homeTopCategories[1]?.product_img}
                      alt={homeTopCategories[1]?.label}
                      layout="responsive"
                      width={270}
                      height={303}
                      loading="eager"
                      priority={true}
                    />
                  </div>
                </Link>

                <div className={style.masonryContainerButton}>
                  <Button variant="dark" className={style.masonry_btn}>
                    {homeTopCategories[1]?.label}
                  </Button>
                </div>
              </div>
              <div className={style.masonryContainerImage}>
                <Link
                  href={`${homeTopCategories[2]?.category_url}`}
                  className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
                >
                  <div className=" " style={{ maxWidth: '100%', height: '100%' }}>
                    <Image
                      loader={imageLoader}
                      className={`w-100 `}
                      src={homeTopCategories?.length > 0 && homeTopCategories[2]?.product_img}
                      alt={homeTopCategories[2]?.label}
                      layout="responsive"
                      width={270}
                      height={303}
                      loading="eager"
                      priority={true}
                    />
                  </div>
                </Link>

                <div className={style.masonryContainerButton}>
                  <Button variant="dark" className={style.masonry_btn}>
                    {homeTopCategories[2]?.label}
                  </Button>
                </div>
              </div>
            </div>
            <div className={`col-6 p-md-0 w-50 ${style.masonryContainerImage}`}>
              <Link
                href={`${homeTopCategories[3]?.category_url}`}
                className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
              >
                <div style={{ maxWidth: '100%', height: '100%' }}>
                  <Image
                    loader={imageLoader}
                    className={`w-100`}
                    style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
                    src={homeTopCategories?.length > 0 && homeTopCategories[3]?.product_img}
                    alt={homeTopCategories[3]?.label}
                    width={100}
                    height={100}
                    loading="eager"
                    priority={true}
                  />
                </div>
              </Link>
              <div className={style.masonryContainerButton}>
                <Button variant="dark" className={style.masonry_btn}>
                  {homeTopCategories[3]?.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PersonalizedCategories;
