import React from 'react';
import { FiHeart } from 'react-icons/fi';
import styles from '../../../styles/components/productPage.module.scss';

const IconButton = () => {
  return (
    <div>
      <button className={`${styles.iconButton}`}>
        <FiHeart className={`${styles.icon}`} />
      </button>
    </div>
  );
};

export default IconButton;
