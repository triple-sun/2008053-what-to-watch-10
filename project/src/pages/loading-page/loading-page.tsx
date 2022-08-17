import React from 'react';
import HeaderElement from '../../components/common/header-element/header-element';
import Spinner from '../../components/spinner/spinner';
import { HeaderStyle } from '../../const/enums';
import './loading-page.css';

const LoadingPage = () => (
  <div className="loading-page">
    <HeaderElement style={HeaderStyle.UserPage}>
    </HeaderElement>
    <div className="loading-page__content">
      <div className='spinner'>
        <Spinner />
      </div>
    </div>
  </div>
);

export default LoadingPage;
