import React from 'react';
import styles from './index.less';

const MainLayout: React.FC = function MainLayout({ children }) {
  return (
    <div className={styles.mainLayout}>
      {children}
    </div>
  );
};

export default MainLayout;
