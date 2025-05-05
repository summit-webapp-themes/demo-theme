import { useState } from "react";
import useAddToCartHook from "../../../hooks/CartPageHook/useAddToCart";
import { FiMinus, FiPlus } from "react-icons/fi";
import styles from '../../../styles/components/productPageV2Components.module.scss';

export default function ProductDetails({ productDetailData, cart, setCart, cartData }: any) {
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const [selectedMetal, setSelectedMetal] = useState('Gold');
  const [selectedPurity, setSelectedPurity] = useState('');
  const [selectedTone, setSelectedTone] = useState('');
  const [selectedDiamond, setSelectedDiamond] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  const handleMainQuantityChange = (qty: number, delta: any) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleItemAddToCart = () => {
    const itemList: any = [{ item_code: productDetailData?.item_name, quantity: quantity }];

    const addToCartParams = {
      currency: 'INR',
      item_list: itemList,
      party_name: getPartyName,
    };
    addToCartItem(addToCartParams, null);
  };

  const handleAddToCart = () => {
    if (selectedMetal !== 'Platinum') {
      if (!selectedPurity || !selectedTone) {
        setError('Please select purity and tone for Gold.');
        return;
      }
    }

    if (!selectedDiamond || !selectedSize) {
      setError('Please select diamond type and size.');
      return;
    }

    // Clear error
    setError('');

    // Add item to cart
    const unitPrice = selectedMetal === 'Gold' ? 211.22 : 311.22;
    const newItem = {
      metal: selectedMetal,
      purity: selectedMetal !== 'Platinum' ? selectedPurity : '-',
      tone: selectedMetal !== 'Platinum' ? selectedTone : '-',
      diamond: selectedDiamond,
      size: selectedSize,
      quantity,
      unitPrice: productDetailData?.price,
      total: productDetailData?.price * quantity, // This is a number
    };
    handleItemAddToCart();
    setCart([...cart, newItem]);

    setSelectedPurity('');
    setSelectedTone('');
    setSelectedDiamond('');
    setSelectedSize('');
  };

  return (
    <div className="pt-4 pt-md-0">
      <h3 className='fw-bold m-0' style={{ fontSize: '28px'}}>JY-2025-001</h3>
      <p className="fw-medium mb-2" style={{ fontSize: '26px', color: '#EE6E4E'}}>€211.22</p>
      <div className={styles.productDetails} style={{ borderBottom: '1px solid #E3E3E3', paddingBottom: '8px'}}>

        {error && <div className="alert alert-danger py-1">{error}</div>}

        <div className='d-flex flex-column align-items-start gap-2'>
          <p className='fs-14 m-0'  style={{ color: '#A29A9A'}}>Metal</p> 
          <div className='d-flex flex-wrap align-items-center justify-content-start gap-2 mb-2'>
            <button 
              className={`btn btn-sm px-4 py-1 ${styles.detailsButton}`}
              onClick={() => setSelectedMetal("Gold")}
              style={{ 
                color: selectedMetal === "Gold" ? 'white': 'black', 
                backgroundColor: selectedMetal === "Gold" ? '#EE6E4E' : '#F5F5F5',
                border: selectedMetal === "Gold" ? "1px solid #EE6E4E" : '1px solid #EBEBEB', 
              }}
            >
              Gold
            </button>
            <button 
              className={`btn btn-sm px-4 py-1 ${styles.detailsButton}`}
              onClick={() => setSelectedMetal("Platinum")}
              style={{ 
                color: selectedMetal === "Platinum" ? 'white': 'black', 
                backgroundColor: selectedMetal === "Platinum" ? '#EE6E4E' : '#F5F5F5',
                border: selectedMetal === "Platinum" ? "1px solid #EE6E4E" : '1px solid #EBEBEB', 
              }}
            >
              Platinum
            </button>
          </div>
        </div>
        {selectedMetal === "Gold" && <div className='d-flex flex-column align-items-start gap-2' style={{ marginTop: '6px'}}> 
          <p className='fs-14 m-0'  style={{ color: '#A29A9A'}}>Purity</p> 
          <div className='d-flex flex-wrap align-items-center justify-content-start gap-2 mb-2'>
            {['9Kt', '10Kt', '14Kt', '18Kt'].map((purityVal: string, index: number) => (
              <button
                key={index}
                className={`btn btn-sm px-4 py-1 ${styles.detailsButton}`}
                onClick={() => setSelectedPurity(purityVal)}
                style={{ 
                  color: selectedPurity === purityVal ? 'white': 'black', 
                  backgroundColor: selectedPurity === purityVal ? '#EE6E4E' : '#F5F5F5',
                  border: selectedPurity === purityVal ? "1px solid #EE6E4E" : '1px solid #EBEBEB', 
                }}
              >
                {purityVal}
              </button>
            ))}
          </div>
        </div>}
        {selectedMetal === "Gold" && <div className='d-flex flex-column align-items-start gap-2' style={{ marginTop: '6px'}}> 
          <p className='fs-14 m-0'  style={{ color: '#A29A9A'}}>Tone</p> 
          <div className='d-flex flex-wrap align-items-center justify-content-start gap-2 mb-2'>
            {['Yellow', 'White', 'Rose'].map((tone, i) => (
              <button
                key={i}
                className={`btn btn-sm px-4 py-1 ${styles.detailsButton}`}
                onClick={() => setSelectedTone(tone)}
                style={{ 
                  color: selectedTone === tone ? 'white': 'black', 
                  backgroundColor: selectedTone === tone ? '#EE6E4E' : '#F5F5F5',
                  border: selectedTone === tone ? "1px solid #EE6E4E" : '1px solid #EBEBEB', 
                }}
              >
                {tone}
              </button>
            ))}
          </div>
        </div>}

        <div className='d-flex flex-column align-items-start gap-2' style={{ marginTop: '6px'}}> 
          <p className='fs-14 m-0'  style={{ color: '#A29A9A'}}>Diamond</p> 
          <div className='d-flex flex-wrap align-items-center justify-content-start gap-2 mb-2'>
            {['I1', 'SI', 'VS', 'LGD'].map((type: string, index: number) => (
              <button
                key={index}
                className={`btn btn-sm px-4 py-1 ${styles.detailsButton}`}
                onClick={() => setSelectedDiamond(type)}
                style={{ 
                  color: selectedDiamond === type ? 'white': 'black', 
                  backgroundColor: selectedDiamond === type ? '#EE6E4E' : '#F5F5F5',
                  border: selectedDiamond === type ? "1px solid #EE6E4E" : '1px solid #EBEBEB', 
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className='d-flex flex-column align-items-start gap-2' style={{ marginTop: '6px'}}> 
          <p className='fs-14 m-0'  style={{ color: '#A29A9A'}}>Size</p> 
          <div className='d-flex flex-wrap align-items-center justify-content-start gap-2 mb-2'>
            {['4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5'].map((size: string, index: number) => (
              <button
                key={index}
                className={`btn btn-sm px-3 py-1 ${styles.detailsButton}`}
                onClick={() => setSelectedSize(size)}
                style={{ 
                  color: selectedSize === size ? 'white': 'black', 
                  backgroundColor: selectedSize === size ? '#EE6E4E' : '#F5F5F5',
                  border: selectedSize === size ? "1px solid #EE6E4E" : '1px solid #EBEBEB', 
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="input-group my-3" style={{ width: 'fit-content', border: '1px solid #EBEBEB', borderRadius: '6px', color: 'black' }}>
        <button 
          className="btn d-flex border-0 border-end justify-content-center align-items-center px-2" 
          style={{ backgroundColor: '#F5F5F5', borderRight: '1px solid #EBEBEB !important'}}
          onClick={() => handleMainQuantityChange(quantity, -1)}
        >
          <FiMinus size={18} />
        </button>
        <div 
          className="form-control text-center border-0 text-black px-2" 
          style={{ width: '80px'}} 
        >
          {quantity}
        </div>
        <button 
          className="btn d-flex border-0 border-start justify-content-center align-items-center px-2" 
          style={{ backgroundColor: '#F5F5F5', borderLeft: '1px solid #EBEBEB !important'}}
          onClick={() => handleMainQuantityChange(quantity, 1)}
        >
          <FiPlus size={18} />
        </button>
      </div>
      <button 
        className={`btn btn-lg ${styles.addToCartButton}`}
        onClick={handleAddToCart}
        disabled={cartData?.length > 0 && cartData?.some((item: any) => item === productDetailData?.name)}
      >
        {cartData?.length > 0 &&
          cartData?.map((item: any) => {
            item === productDetailData?.name
          }) 
          ? "Added to Cart" : "Add To Cart"}
      </button>
    </div>
  )
}