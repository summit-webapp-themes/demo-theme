import Head from 'next/head';

const PageMetaData = ({ meta_data }: any) => {
  let isDealer: any;
  // if (typeof window !== 'undefined') {
  //   isDealer = localStorage.getItem('isDealer');
  // }
  return (
    <Head>
      <title>
        {meta_data && Object?.keys(meta_data)?.length > 0
          ? meta_data?.meta_title
          : 'Summit E-Commerce - A Comprehensive E-Commerce Solution'}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={meta_data && Object?.keys(meta_data)?.length > 0 && 'Ecommerce, ERP, ERPNext, Summit'} />
      <meta
        name="description"
        content={
          meta_data && Object?.keys(meta_data)?.length > 0
            ? meta_data?.description
            : 'Summit E-Commerce - A Comprehensive E-Commerce Solution'
        }
      />
      <meta name="robots" content={meta_data && Object?.keys(meta_data)?.length > 0 ? meta_data?.robot_name : 'index'} />
      <meta property="og:image" content={meta_data && Object?.keys(meta_data)?.length > 0 ? meta_data?.og_image : ''}  />
      <meta
        property="og:title"
        content={
          meta_data && Object?.keys(meta_data)?.length > 0
            ? meta_data?.meta_title
            : 'Summit E-Commerce - A Comprehensive E-Commerce Solution'
        }
      />
      <meta
        property="og:description"
        content={
          meta_data && Object?.keys(meta_data)?.length > 0
            ? meta_data?.description
            : 'Summit E-Commerce - A Comprehensive E-Commerce Solution'
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={``} />
      <link rel="canonical" href="$OG_URL" />
      <meta name="description" content={
          meta_data && Object?.keys(meta_data)?.length > 0
            ? meta_data?.description
            : 'Summit E-Commerce - A Comprehensive E-Commerce Solution'
        } />
      <link rel="icon" href={meta_data && Object?.keys(meta_data)?.length > 0  ? meta_data?.favicon : '/favicon.ico'} />
      <link rel="icon" type="image/png" sizes="32x32" href={meta_data && Object?.keys(meta_data)?.length > 0  ? meta_data?.favicon : "/favicon-32x32.png"} />
      <link rel="icon" type="image/png" sizes="16x16" href={meta_data && Object?.keys(meta_data)?.length > 0  ? meta_data?.favicon : "/favicon-16x16.png"} />
      <link rel="apple-touch-icon" sizes="180x180" href={meta_data && Object?.keys(meta_data)?.length > 0  ? meta_data?.favicon : "/apple-touch-icon.png"} />

    </Head>
  );
};

export default PageMetaData;
