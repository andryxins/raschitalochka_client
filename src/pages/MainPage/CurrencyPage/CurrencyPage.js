import React from 'react';
import NavBar from '../../../components/NavBar/NavBar';
import Styles from './CurrencyPage.module.css';

const CurrencyPage = () => (
  <div className={Styles.pageWrapper}>
    <div className={Styles.navBar}>
      <NavBar />
    </div>
    <div className={Styles.currencyWidget}>
      {/* Place for currency widget */}
      {/* ///////// */}
    </div>
  </div>
);

export default CurrencyPage;