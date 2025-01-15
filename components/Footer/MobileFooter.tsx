import React from "react";
import style from '../../styles/components/footer.module.scss'
import { FaFacebookF, FaPinterestP, FaTelegramPlane, FaEnvelope } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";;
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import ProGearHub from '../../public/assets/images/logo.png'
import securityLogo from '../../public/assets/images/security_image.png'
import Image from "next/image";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';

// Data for list items
const footerData = {
    socialLinks: [
        {
            href: "#",
            icon: <FaFacebookF style={{ color: "#6c757d" }} />,
        },
        {
            href: "#",
            icon: <FaXTwitter style={{ color: "#6c757d" }} />,
        },
        {
            href: "#",
            icon: <FaPinterestP style={{ color: "#6c757d" }} />,
        },
        {
            href: "#",
            icon: <FaTelegramPlane style={{ color: "#6c757d" }} />,
        },
        {
            href: "#",
            icon: <FaEnvelope style={{ color: "#6c757d" }} />,
        },
    ],
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

const MobileFooter = () => {
    return (
        <footer className={`bg-light text-dark mobile_footer_container ${style.footer_container}`}>
            <div className={`${style.footer_list_container}`}>
                <div className="container px-0 px-xl-5">
                    <div className="row">
                        {/* Company Info */}
                        <Accordion alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Get in Touch</Accordion.Header>
                                <Accordion.Body>
                                    <div className="col-xl-3 col-md-6 col-lg-6 mb-4">
                                        <div className="mb-4">
                                            <Image
                                                className={``}
                                                src={ProGearHub}
                                                alt="logo"
                                                loading="eager"
                                                width={200}
                                                height={50}
                                            />
                                        </div>
                                        <p className="d-flex px-2">
                                            <IoLocationOutline className="me-2 fs-1" />
                                            <span>184 Main Rd E, St Albans VIC 3021, Australia</span>
                                        </p>
                                        <p className="text-secondary d-flex px-2">
                                            <TfiEmail className="me-2 fs-3" />
                                            <span>contact@company.com</span>
                                        </p>
                                        <p className="d-flex px-2">
                                            <IoCallOutline className="me-2 fs-3" />
                                            <span>+001 2233 456</span>
                                        </p>
                                        <div className="d-flex px-2">
                                            {footerData.socialLinks.map((link, index) => (
                                                <Link key={index} href={link.href} className="text-dark me-3">
                                                    {link.icon}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* Categories */}
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Categories</Accordion.Header>
                                <Accordion.Body>
                                    <div className="col-xl-2 col-md-6 col-lg-6 mb-4">
                                        <ul className="list-unstyled text-secondary">
                                            {footerData.categories.map((item, index) => (
                                                <Link href="#" className="text-decoration-none text-secondary">
                                                    <li className="mb-2" key={index}>{item}</li>
                                                </Link>

                                            ))}
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* Information */}
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Information</Accordion.Header>
                                <Accordion.Body>
                                    <div className="col-xl-2 col-md-6 col-lg-6 mb-4">
                                        <ul className="list-unstyled text-secondary">
                                            {footerData.information.map((item, index) => (
                                                <Link href="#" className="text-decoration-none text-secondary">
                                                    <li className="mb-2" key={index}>{item}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* Useful Links */}
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Useful Links</Accordion.Header>
                                <Accordion.Body>
                                    <div className="col-xl-2 col-md-6 col-lg-6 mb-4">
                                        <ul className="list-unstyled text-secondary">
                                            {footerData.usefulLinks.map((item, index) => (
                                                <Link href="#" className="text-decoration-none text-secondary">
                                                    <li className="mb-2" key={index}>{item}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* Newsletter Signup */}
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Newsletter Signup</Accordion.Header>
                                <Accordion.Body>
                                    <div className="col-xl-3 col-md-6 col-lg-6 mb-4">
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
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={`py-3 text-center ${style.footer_bottom}`}>
                <div className={`d-flex justify-content-center align-items-center flex-wrap mx-auto px-3`} style={{ maxWidth: '1200px' }}>
                    <p className="mb-0">
                        <span className="text-secondary">All Mobile Rights Reserved © 2025</span>
                        <span className="fw-bold text-danger"> ProGearHub</span>{" "}
                        store - Developed by
                        <span style={{ fontWeight: '600' }}> The4</span>
                    </p>
                    {/* links  */}
                    <div className="mt-2">
                        <ul className="list-unstyled d-flex mb-0">
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

export default MobileFooter;
