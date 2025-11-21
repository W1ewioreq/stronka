import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>{t('services.title')}</h1>
          <p>{t('services.subtitle')}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="services-list">
            {/* Benefit Forms */}
            <div className="service-detail card">
              <div className="service-detail-header">
                <div className="service-detail-icon">📋</div>
                <div>
                  <h2>{t('services.benefit.title')}</h2>
                  <p className="service-tagline">{t('services.benefit.description')}</p>
                </div>
              </div>
              <p className="service-details">{t('services.benefit.details')}</p>
              <div className="service-pricing">
                <span className="price">{t('services.benefit.price')}</span>
                <span className="price-note">{t('services.benefit.priceNote')}</span>
              </div>
              <Link to="/booking" className="btn btn-primary">{t('services.cta')}</Link>
            </div>

            {/* Translation */}
            <div className="service-detail card">
              <div className="service-detail-header">
                <div className="service-detail-icon">📄</div>
                <div>
                  <h2>{t('services.translation.title')}</h2>
                  <p className="service-tagline">{t('services.translation.description')}</p>
                </div>
              </div>
              <p className="service-details">{t('services.translation.details')}</p>
              <div className="service-pricing">
                <span className="price">{t('services.translation.price')}</span>
                <span className="price-note">{t('services.translation.priceNote')}</span>
              </div>
              <Link to="/booking" className="btn btn-primary">{t('services.cta')}</Link>
            </div>

            {/* Advisory */}
            <div className="service-detail card">
              <div className="service-detail-header">
                <div className="service-detail-icon">🏛️</div>
                <div>
                  <h2>{t('services.advisory.title')}</h2>
                  <p className="service-tagline">{t('services.advisory.description')}</p>
                </div>
              </div>
              <p className="service-details">{t('services.advisory.details')}</p>
              <div className="service-pricing">
                <span className="price">{t('services.advisory.price')}</span>
                <span className="price-note">{t('services.advisory.priceNote')}</span>
              </div>
              <Link to="/booking" className="btn btn-primary">{t('services.cta')}</Link>
            </div>

            {/* Career */}
            <div className="service-detail card">
              <div className="service-detail-header">
                <div className="service-detail-icon">💼</div>
                <div>
                  <h2>{t('services.career.title')}</h2>
                  <p className="service-tagline">{t('services.career.description')}</p>
                </div>
              </div>
              <p className="service-details">{t('services.career.details')}</p>
              <div className="service-pricing">
                <span className="price">{t('services.career.price')}</span>
                <span className="price-note">{t('services.career.priceNote')}</span>
              </div>
              <Link to="/booking" className="btn btn-primary">{t('services.cta')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;