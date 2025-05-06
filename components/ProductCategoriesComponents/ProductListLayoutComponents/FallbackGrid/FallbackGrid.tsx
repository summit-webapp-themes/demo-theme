import ProductCard from '../../../../cards/addon-cards/EuroShineCard';
import useProductsList from '../../../../hooks/addon-hooks/useProductsList';

export default function MasterComponent() {
  const { isLoading, productsList, errorMessage } = useProductsList();
  console.log('prod', productsList);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div className="row mt-3">
      {productsList?.map((data: any, i: any) => {
        return <ProductCard key={i} data={data} />;
      })}
    </div>
  );
}
