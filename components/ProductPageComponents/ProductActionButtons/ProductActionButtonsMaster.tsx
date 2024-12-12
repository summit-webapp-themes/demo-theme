import AddToCartBtn from './AddToCartBtn';
import IconButton from './IconButton';
import CustomQuantityInputField from './ProductQuantityInput';

interface ProductActionButtonsMasterPropTypes {
  qty: number | string;
  handleQtyModificationOnInputEdit: (e: any) => void;
  handleQtyModificationOnButtonClick: (action: string) => void;
}

const ProductActionButtonsMaster = ({
  qty,
  handleQtyModificationOnInputEdit,
  handleQtyModificationOnButtonClick,
}: ProductActionButtonsMasterPropTypes) => {
  return (
    <div className="d-flex flex-wrap">
      <div className="order-sm-1">
        <CustomQuantityInputField
          qty={qty}
          handleQtyModificationOnInputEdit={handleQtyModificationOnInputEdit}
          handleQtyModificationOnButtonClick={handleQtyModificationOnButtonClick}
        />
      </div>
      <div className="order-sm-2 order-3 ">
        <AddToCartBtn />
      </div>
      <div className="order-sm-2 order-2">
        <IconButton />
      </div>
    </div>
  );
};

export default ProductActionButtonsMaster;
