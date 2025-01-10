import React, { useRef } from 'react';
import style from '../../../styles/components/home.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Image1 from '../../../public/assets/images/FollowUs/IG-1.webp';
import Image2 from '../../../public/assets/images/FollowUs/IG-2.webp';
import Image3 from '../../../public/assets/images/FollowUs/IG-3.webp';
import Image4 from '../../../public/assets/images/FollowUs/IG-4.webp';
import Image5 from '../../../public/assets/images/FollowUs/IG-5.webp';
import Image6 from '../../../public/assets/images/FollowUs/IG-4.webp';

const tabData = [
    { Image: Image1, slug: 'image-1' },
    { Image: Image2, slug: 'image-2' },
    { Image: Image3, slug: 'image-3' },
    { Image: Image4, slug: 'image-4' },
    { Image: Image5, slug: 'image-5' },
    { Image: Image6, slug: 'image-6' },
];

// Duplicate the array for seamless infinite scrolling
const infiniteTabData = [...tabData, ...tabData];

const FollowUsSection = () => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: tabData.length > 3 ? 3 : tabData.length,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: tabData.length > 2 ? 2 : tabData.length,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <div className={`${style.follow_us_container}`}>
            <div className="text-center mb-4">
                <h3 className={`${style.section_title}`}>
                    <span>@ FOLLOW US ON INSTAGRAM</span>
                </h3>
            </div>
            {/* Slider Section */}
            <div>
                {Array.isArray(tabData) && tabData.length > 0 ? (
                    <Slider {...settings} ref={sliderRef}>
                        {infiniteTabData.map((ImageList, index) => (
                            <div key={`image-slide-${index}`} className={`overflow-hidden ${style.image_container}`}>
                                <Image
                                    className={`d-block image-fluid ${style.slider_image}`}
                                    src={ImageList.Image}
                                    alt="Instagram Image"
                                    loading="eager"
                                    priority={true}
                                    width={360}
                                    height={360}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default FollowUsSection;

