import ProductCard from '../../../../cards/addon-cards/EuroShineCard';
import useProductsList from '../../../../hooks/addon-hooks/useProductsList';
import ESBreadCrumbs from '../../../ESBreadCrumbs';

export default function MasterComponent() {
  const { isLoading, productsList, errorMessage } = useProductsList();
  const category = window.location.pathname.split('/').pop();
  console.log('prod', productsList);
  if (isLoading) {
    return <div style={{ padding: '0px 12px'}}>Loading...</div>;
  }

  if (errorMessage) {
    return <div style={{ padding: '0px 12px' }}>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <div style={{ padding: '0px 12px'}}>
        <ESBreadCrumbs />
        <h2 className="text-black fw-bold" style={{ fontSize: '18px', marginBottom: '12px', textTransform: 'capitalize'}}>{category}</h2>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5" style={{ paddingLeft: '12px'}}>
        {productsList?.map((data: any, i: any) => {
          return <ProductCard key={i} data={data} />;
        })}
      </div>
    </div>
  );
}
