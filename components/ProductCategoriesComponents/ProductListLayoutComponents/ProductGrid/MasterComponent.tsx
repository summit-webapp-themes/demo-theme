import ProductCard from "../../../../cards/ProductCardV2/ProductCard";

export default function MasterComponent({
  productListingData,
}: any) {
  return (
    <div className="row mt-3">
      {productListingData?.map((data: any, i: any) => {
        return (
          <ProductCard
            data={data}
          />
        );
      })}
    </div>
  );
} 