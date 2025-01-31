import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import image from '../public/assets/images/404-page.svg';
import pageNotFoundStyles from '../styles/components/errorboundary.module.scss';

function PageNotFound() {
  const router = useRouter();

  return (
    <>
      {/* <div className="d-flex justify-content-center" style={{ height: '80vh', alignItems: 'center' }}>
        <div className="row">
          <div className="col-md-6"></div>
        </div>
        <div className={`${pageNotFoundStyles.error_content}`}>
          <div className="p-3" style={{ fontSize: '40px' }}>
            <Image src={image} width={376} height={461} alt="Error Image" />
          </div>
          <h4>Page not Found!</h4>
          <p className="grey">
            Sorry, We're having trouble processing your request right now.
            <br />
            Please try again later.
          </p>
          <button className={`btn btn-primary ${pageNotFoundStyles.error_button} `} onClick={() => router.push('/')}>
            Back to Home
          </button>
        </div>
      </div> */}

      <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
        <div
          className="container d-flex flex-column flex-md-row align-items-center justify-content-center text-center text-md-start"
          // style={{ maxWidth: '1100px' }}
        >
          {/* Error Image (Left - Centered) */}
          <div className={`d-flex justify-content-end pe-5  ${pageNotFoundStyles.error_img_container}`} style={{ flex: 1 }}>
            <Image src={image} width={376} height={461} alt="Error Image" />
          </div>

          {/* Error Content (Right - Centered) */}
          <div className={` ${pageNotFoundStyles.error_content} `} style={{ flex: 1, textAlign: 'start' }}>
            <h4 className="fw-bold text-start font-poppins">Page not Found!</h4>
            <p className="text-muted  text-start font-poppins">
              Sorry, we're having trouble processing your request right now.
              <br />
              <p className="font-poppins">Please try again later.</p>
            </p>
            <button className={`btn btn-primary ${pageNotFoundStyles.error_button}`} onClick={() => router.push('/')}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
