import Link from 'next/link';
import React from 'react';
import UseBreadCrumbsHook from '../hooks/GeneralHooks/useBreadcrumbs';

function BreadCrumbs() {
  const { breadCrumbData, isLoading, errorMessage } = UseBreadCrumbsHook();
  return (
    <section className="breadcrumb_section product-font-family ">
      <div className="container pt-0">
        <div className="row">
          <div className="col-lg-9">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/" legacyBehavior>
                    <a href="">
                      <i className="fa fa-home bredcrumb_home_icon" aria-hidden="true"></i>
                    </a>
                  </Link>
                </li>
                {breadCrumbData?.length > 0 &&
                  breadCrumbData?.map((item: any, index: number) => (
                    <>
                      <li key={index} className="breadcrumb-item active text-color-black" aria-current="page">
                        <Link href={`${item?.link}?page=1`} legacyBehavior className="text-color-black">
                          {item?.name}
                        </Link>
                      </li>
                    </>
                  ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreadCrumbs;
