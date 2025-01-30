import { IoCarOutline } from 'react-icons/io5';
import { GrSupport } from 'react-icons/gr';
import { IoIosRefresh } from 'react-icons/io';
import { GiLockSpy } from 'react-icons/gi';
import styles from '../../../../styles/components/servicefeatures.module.scss';

const ServiceFeatures = () => {
  const features = [
    {
      icon: <IoCarOutline />,
      title: 'FREE SHIPPING',
      description: 'Free shipping on all US orders or orders above $100',
    },
    {
      icon: <GrSupport />,
      title: 'SUPPORT 24/7',
      description: 'Contact us 24 hours a day, 7 days a week',
    },
    {
      icon: <IoIosRefresh />,
      title: '30 DAYS RETURN',
      description: 'Simply return it within 30 days for an exchange.',
    },
    {
      icon: <GiLockSpy />,
      title: '100% PAYMENT SECURE',
      description: 'We ensure secure payment with PEV',
    },
  ];

  return (
    <div className="container py-4 border-bottom">
      <div className="row  text-md-start">
        {features.map((feature, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-5 d-flex">
            <div className={`me-3 text-secondary d-flex ${styles.service_icon}`}>{feature.icon}</div>
            <div className="">
              <h6 className={`${styles.service_title}`}>{feature.title}</h6>
              <p className="text-muted mb-0">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
