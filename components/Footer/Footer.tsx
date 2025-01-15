import React from 'react';
import WebFooter from './WebFooter';
import MobileFooter from './MobileFooter';

const Footer = () => {
    return (
        <>
            <div className='d-none d-md-block '>
                <WebFooter />
            </div>
            <div className='d-block d-md-none'>
                <MobileFooter />
            </div>
        </>
    )
}

export default Footer
