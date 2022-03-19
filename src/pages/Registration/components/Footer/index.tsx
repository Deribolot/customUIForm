import React from 'react';
import styles from './index.less';

const Footer: React.FC = function Footer({ children }) {
  return <footer className={styles.footer}>{children}</footer>;
};

export default Footer;
