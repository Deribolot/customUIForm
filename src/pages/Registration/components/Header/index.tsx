import React from 'react';
import { Link, useIntl } from 'umi';
import styles from './index.less';

const Header: React.FC = function Header() {
  const intl = useIntl();

  return (
    <section className={styles.header}>
      <h1>
        {intl.formatMessage({ id: 'app.page.registration.title' })}
      </h1>
      <p className={styles.extra}>
        {intl.formatMessage({ id: 'app.page.registration.areYouHaveAccount' })}
        <Link to="/enter" className={styles.link}>{intl.formatMessage({ id: 'app.page.registration.enter' })}</Link>
      </p>
    </section>
  );
};

export default Header;
