import React from "react";
import style from '../../styles/components/footer.module.scss'
import { FaFacebookF, FaPinterestP, FaTelegramPlane, FaEnvelope } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";;
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import kalles_logo from '../../public/assets/images/kalles.png'
import securityLogo from '../../public/assets/images/security_image.png'
import Image from "next/image";
import Link from "next/link";

// Data for list items
const footerData = {
    categories: ["Men", "Women", "Decor", "Dress", "Denim", "Wedding Decor"],
    information: [
        "About Us",
        "Contact Us",
        "Privacy Policy",
        "Shipping & Delivery",
        "Terms & Conditions",
        "Returns & Exchanges",
    ],
    usefulLinks: [
        "Store Location",
        "Latest Posts",
        "My Account",
        "Size Guide",
        "FAQs",
        "FAQs 2",
    ],
    bottomLinks: [
        "Shop",
        "About Us",
        "Contact Us",
        "Blog"
    ]
};

// Data for images
const securityLogos = [
    {
        src: securityLogo,
        alt: "McAfee",
    }
];

const Footer = () => {
    return (
        <footer className={`bg-light text-dark ${style.footer_container}`}>
            <div className={`${style.footer_list_container}`}>
                <div className="container px-xl-5">
                    <div className="row">
                        {/* Company Info */}
                        <div className="col-xl-3 col-md-6 col-lg-6 mb-4">
                            {/* <h5 className={`mb-4 ${style.footer_container}`}>Kalles</h5> */}
                            <div className="mb-4">
                                <Image
                                    className={``}
                                    src={kalles_logo}
                                    alt="kalles_logo"
                                    loading="eager"
                                    width={100}
                                    height={30}
                                />
                            </div>
                            <p>
                                <IoLocationSharp className="me-2" />
                                184 Main Rd E, St Albans VIC 3021, Australia
                            </p>
                            <p className="text-secondary">
                                <MdEmail className="me-2" />
                                contact@company.com
                            </p>
                            <p>
                                <IoCall className="me-2" />
                                +001 2233 456
                            </p>
                            <div className="d-flex">
                                <Link href="#" className="text-dark me-3">
                                    <FaFacebookF style={{ color: '#6c757d' }} />
                                </Link>
                                <Link href="#" className="text-dark me-3">
                                    <FaXTwitter style={{ color: '#6c757d' }} />
                                </Link>
                                <Link href="#" className="text-dark me-3">
                                    <FaPinterestP style={{ color: '#6c757d' }} />
                                </Link>
                                <Link href="#" className="text-dark me-3">
                                    <FaTelegramPlane style={{ color: '#6c757d' }} />
                                </Link>
                                <Link href="#" className="text-dark">
                                    <FaEnvelope style={{ color: '#6c757d' }} />
                                </Link>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="col-xl-2 col-md-6 col-lg-6 mb-4">
                            <h5 className="mb-4">Categories</h5>
                            <ul className="list-unstyled text-secondary">
                                {footerData.categories.map((item, index) => (
                                    <Link href="#" className="text-decoration-none text-secondary">
                                        <li className="mb-2" key={index}>{item}</li>
                                    </Link>

                                ))}
                            </ul>
                        </div>

                        {/* Information */}
                        <div className="col-xl-2 col-md-6 col-lg-6 mb-4">
                            <h5 className="mb-4">Information</h5>
                            <ul className="list-unstyled text-secondary">
                                {footerData.information.map((item, index) => (
                                    <Link href="#" className="text-decoration-none text-secondary">
                                        <li className="mb-2" key={index}>{item}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>

                        {/* Useful Links */}
                        <div className="col-xl-2 col-md-6 col-lg-6 mb-4">
                            <h5 className="mb-4">Useful Links</h5>
                            <ul className="list-unstyled text-secondary">
                                {footerData.usefulLinks.map((item, index) => (
                                    <Link href="#" className="text-decoration-none text-secondary">
                                        <li className="mb-2" key={index}>{item}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="col-xl-3 col-md-6 col-lg-6 mb-4">
                            <h5 className="mb-4">Newsletter Signup</h5>
                            <p>
                                Subscribe to our newsletter and get 10% off your first purchase
                            </p>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email address"
                                />
                                <button className={`btn btn-dark ${style.subscribe_btn}`} type="button">
                                    Subscribe
                                </button>
                            </div>
                            <div className="d-flex">
                                {securityLogos.map((logo, index) => (
                                    <Image
                                        key={index}
                                        src={securityLogo}
                                        alt={logo.alt || ''}
                                        width={250}
                                        height={35}
                                        style={{ width: '100%' }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={`py-4 text-center ${style.footer_bottom}`}>
                <div className={`d-flex justify-content-between mx-auto`} style={{ maxWidth: '1200px' }}>
                    <p className="mb-0">
                        <span className="text-secondary">All Rights Reserved © 2025</span>
                        <span className="fw-bold text-danger">Kalles</span>{" "}
                        store - Developed by
                        <span style={{ fontWeight: '600' }}>The4</span>
                    </p>
                    {/* links  */}
                    <div>
                        <ul className="list-unstyled d-flex">
                            {footerData.bottomLinks.map((item, index) => (
                                <li key={index}>
                                    <Link href="#" className="text-decoration-none text-secondary">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
