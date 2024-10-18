import React, { useState, useRef } from 'react';
import ProductCard from '../../../cards/ProductCard';
import Carousel from 'react-multi-carousel';

function CollectionCards({ remaingItems, addToCartItem, getPartyName, wishlistData }: any) {
  const responsive: any = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const firstCarouselRef = useRef<any>(null);
  const secondCarouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalItems = remaingItems.length;
  const halfIndex = Math.ceil(totalItems / 2);

  const handleNext = () => {
    if (currentSlide < totalItems - 1) {
      setCurrentSlide(currentSlide + 1);
      firstCarouselRef.current.next();
      secondCarouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      firstCarouselRef.current.previous();
      secondCarouselRef.current.previous();
    }
  };

  return (
    <>
      {totalItems > 0 ? (
        <>
          <Carousel ref={firstCarouselRef} responsive={responsive} arrows={false} infinite>
            {remaingItems.slice(0, halfIndex).map((item: any, index: number) => (
              <div className="px-2 pt-2 pb-3" key={item.id || index}>
                <ProductCard data={item} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />
              </div>
            ))}
          </Carousel>

          <Carousel ref={secondCarouselRef} responsive={responsive} arrows={false} infinite>
            {remaingItems.slice(halfIndex).map((item: any, index: number) => (
              <div className="px-2 pt-2 pb-3" key={item.id || index}>
                <ProductCard data={item} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />
              </div>
            ))}
          </Carousel>

          <div className="row justify-content-end mx-0">
            <button className="col-md-3 col-6 me-2" onClick={handlePrev} disabled={currentSlide === 0}>
              Previous
            </button>
            <button className="col-md-3 col-6" onClick={handleNext} disabled={currentSlide >= totalItems - 1}>
              Next
            </button>
          </div>
        </>
      ) : (
        <div>No items available.</div> // Fallback message if no items
      )}
    </>
  );
}

export default CollectionCards;
