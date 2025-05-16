import Link from 'next/link';
import React from 'react';
import styles from '../styles/addon-styles/navbarWithoutCategoriesV2.module.scss';

export default function ESBreadCrumbs() {
  const breadCrumbData = window.location.pathname.split('/').filter(segment => segment !== '');
  const formattedBreadCrumbData = breadCrumbData.map((item: string, index: number) => {
    const link = `/${breadCrumbData.slice(0, index + 1).join('/')}`;
    return { name: item, link };
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-1">
        <li className={styles.breadCrumbItem}>
          <Link href="/" legacyBehavior>
            Home
          </Link>
        </li>
        {formattedBreadCrumbData?.length > 0 &&
          formattedBreadCrumbData?.map((item: any, index: number) => (
            <div key={index} className="d-flex">
              <span className={styles.breadCrumbItem}>&nbsp;/&nbsp;</span>
              <li className={styles.breadCrumbItem} aria-current="page">
                <Link href={item?.link} legacyBehavior>
                  {item?.name}
                </Link>
              </li>
            </div>
          ))}
      </ol>
    </nav>
  );
}
