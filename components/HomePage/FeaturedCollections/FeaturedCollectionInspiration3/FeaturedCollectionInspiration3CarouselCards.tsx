import React, { useState, useRef } from 'react';
import ProductCard from '../../../../cards/ProductCard';
import Carousel from 'react-multi-carousel';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

function TopArrowCarouselCards({ remainingItems, addToCartItem, getPartyName, wishlistData }: any) {
  const responsive: any = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const firstCarouselRef = useRef<any>(null);
  const secondCarouselRef = useRef<any>(null);
  const mobCarouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalItems = remainingItems.length; // Total number of items in the remainingItems array
  const halfIndex = Math.ceil(totalItems / 2); // Index that splits the items into two halves

  /**
   * Moves to the next slide in the carousels.
   * Increments the current slide index and calls the next method on each carousel ref.
   *
   * @function handleNext
   * @returns {void}
   */
  const handleNext = (): void => {
    if (currentSlide < totalItems - 1) {
      // Check if not on the last slide
      setCurrentSlide(currentSlide + 1);
      // Move the carousel to the next slide
      firstCarouselRef.current.next();
      secondCarouselRef.current.next();
      mobCarouselRef.current.next();
    }
  };

  /**
   * Moves to the previous slide in the carousels.
   * Decrements the current slide index and calls the previous method on each carousel ref.
   *
   * @function handlePrev
   * @returns {void}
   */
  const handlePrev = (): void => {
    if (currentSlide > 0) {
      // Check if not on the first slide
      setCurrentSlide(currentSlide - 1);
      // Move the carousel to the previous slide
      firstCarouselRef.current.previous();
      secondCarouselRef.current.previous();
      mobCarouselRef.current.previous();
    }
  };

  return (
    <>
      {totalItems > 0 ? (
        <>
          <div className="row justify-content-end mx-0" style={{ marginTop: '-50px', paddingBottom:'10px' }}>
            <button className="btn w-auto border-0" onClick={handlePrev} disabled={currentSlide === 0}>
              <FaArrowLeft />
            </button>
            <button className="btn w-auto border-0" onClick={handleNext} disabled={currentSlide >= totalItems - 1}>
              <FaArrowRight />
            </button>
          </div>

          <div className="d-none d-md-block">
            <Carousel ref={firstCarouselRef} responsive={responsive} arrows={false} infinite>
              {remainingItems.slice(0, halfIndex).map((item: any, index: number) => (
                <div className="h-100 px-1 px-sm-2 pb-3" key={item.id || index}>
                  <ProductCard data={item} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />
                </div>
              ))}
            </Carousel>

            <Carousel ref={secondCarouselRef} responsive={responsive} arrows={false} infinite>
              {remainingItems.slice(halfIndex).map((item: any, index: number) => (
                <div className="h-100 px-1 px-sm-2" key={item.id || index}>
                  <ProductCard data={item} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="d-block d-md-none">
            <Carousel ref={mobCarouselRef} responsive={responsive} arrows={false} infinite>
              {remainingItems.map((item: any, index: number) => (
                <div className="h-100 px-1 px-sm-2" key={item.id || index}>
                  <ProductCard data={item} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />
                </div>
              ))}
            </Carousel>
          </div>
        </>
      ) : (
        <div>No items available.</div> // Fallback message if no items
      )}
    </>
  );
}

export default TopArrowCarouselCards;
