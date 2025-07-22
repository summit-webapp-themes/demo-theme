import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import image from '../public/assets/images/404-page.svg';
import pageNotFoundStyles from '../styles/components/errorboundary.module.scss';
import { useTranslation } from 'react-i18next';

function PageNotFound() {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <>
      <div className={`d-flex justify-content-center align-items-center my-5 py-5 ${pageNotFoundStyles.page_not_found_main_container}`}>
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-md-start">
          {/* Error Image (Left - Centered) */}
          <div className={`d-flex justify-content-end  ${pageNotFoundStyles.error_img_container}`} style={{ flex: 1 }}>
            <Image src={image} width={376} height={461} alt="Error Image" />
          </div>

          {/* Error Content (Right - Centered) */}
          <div className={` ${pageNotFoundStyles.error_content} `} style={{ flex: 1, textAlign: 'start' }}>
            <h4 className="fw-bold text-start font-poppins">{t('page_not_found')}!</h4>
            <p className="text-muted  text-start font-poppins">
              {t('request_error_message')}
              <br />
              <p className="font-poppins">{t('try_again_later')}</p>
            </p>
            <button className={` ${pageNotFoundStyles.error_button} `} onClick={() => router.push('/')}>
              <div className={`${pageNotFoundStyles.error_button_text} font-poppins`}>{t('back_to_home')}</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PageNotFound;