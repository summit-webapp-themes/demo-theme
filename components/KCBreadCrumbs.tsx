import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/addon-styles/loginV2.module.scss';
import { useTranslation } from 'react-i18next';
import useCurrencyLanguageHandler from '../hooks/GeneralHooks/KCLanguageHandler';

export default function KCBreadCrumbs() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { selectedCurrency } = useCurrencyLanguageHandler();

  const { pathname, query, asPath } = router;

  let breadcrumbItems: { name: string; link: string }[] = [];

  if (pathname === '/cart') {
    breadcrumbItems = [{ name: t('cart'), link: '/cart' }];
  } else if (pathname === '/product-category/[category]') {
    const category = query.category as string;
    if (category) {
      breadcrumbItems = [{ name: t(category), link: `/product-category/${category}` }];
    }
  } else if (pathname === '/product/[category-slug]/[productId]') {
    const category = query['category-slug'] as string;
    const productId = query.productId as string;
    if (category && productId) {
      breadcrumbItems = [
        { name: productId, link: `/product/${category}/${productId}` },
      ];
    }
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb m-0">
        <li className={styles.breadCrumbItem}>
          <Link href={`/product-category?page=1&currency=${selectedCurrency?.value}`} legacyBehavior>
            <a>{t('home')}</a>
          </Link>
        </li>
        {breadcrumbItems.map((item, index) => {
          const isCurrent = asPath.replace('%20', ' ').split('?')[0] === item.link;
          return (
            <div key={index} className="d-flex">
              <span className={styles.breadCrumbItem}>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
              <li
                className={isCurrent ? styles.breadCrumbItemCurrent : styles.breadCrumbItem}
                aria-current={isCurrent ? 'page' : undefined}
              >
                {isCurrent ? (
                  <span>{item.name}</span>
                ) : (
                  <Link href={item.link} legacyBehavior>
                    <a>{item.name}</a>
                  </Link>
                )}
              </li>
            </div>
          );
        })}
      </ol>
    </nav>
  );
}
