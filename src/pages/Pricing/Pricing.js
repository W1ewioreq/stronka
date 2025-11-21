import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Pricing.css';

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <div className="pricing-page">
      <div className="page-header">
        <div className="container">
          <h1>{t('pricing.title')}</h1>
          <p>{t('pricing.subtitle')}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="pricing-grid">
            {/* Benefit Forms */}
            <div className="pricing-card card">
              <div className="pricing-icon">📋</div>
              <h3>{t('pricing.benefit.name')}</h3>
              <div className="pricing-amount">
                <span className="price">{t('pricing.benefit.price')}</span>
                <span className="duration">{t('pricing.benefit.duration')}</span>
              </div>
              <ul className="pricing-features">
                <li>✅ Universal Credit</li>
                <li>✅ Child Benefit</li>
                <li>✅ Housing Benefit</li>
                <li>✅ Pomoc z dokumentami / Document help</li>
                <li>✅ Wypełnienie formularza / Form completion</li>
              </ul>
              <Link to="/booking" className="btn btn-primary">
                {t('pricing.cta')}
              </Link>
            </div>

            {/* Translation */}
            <div className="pricing-card card">
              <div className="pricing-icon">📄</div>
              <h3>{t('pricing.translation.name')}</h3>
              <div className="pricing-amount">
                <span className="price">{t('pricing.translation.price')}</span>
                <span className="duration">{t('pricing.translation.duration')}</span>
              </div>
              <ul className="pricing-features">
                <li>✅ Council letters</li>
                <li>✅ NHS correspondence</li>
                <li>✅ HMRC documents</li>
                <li>✅ Wyjaśnienie treści / Content explanation</li>
                <li>✅ Pomoc w odpowiedzi / Response help</li>
              </ul>
              <Link to="/booking" className="btn btn-primary">
                {t('pricing.cta')}
              </Link>
            </div>

            {/* Advisory */}
            <div className="pricing-card card featured">
              <div className="featured-badge">Polecane / Recommended</div>
              <div className="pricing-icon">🏛️</div>
              <h3>{t('pricing.advisory.name')}</h3>
              <div className="pricing-amount">
                <span className="price">{t('pricing.advisory.price')}</span>
                <span className="duration">{t('pricing.advisory.duration')}</span>
              </div>
              <ul className="pricing-features">
                <li>✅ Bank account / Konto bankowe</li>
                <li>✅ GP registration / Rejestracja do GP</li>
                <li>✅ School enrollment / Zapisy do szkoły</li>
                <li>✅ Tax advice / Porady podatkowe</li>
                <li>✅ General support / Ogólne wsparcie</li>
              </ul>
              <Link to="/booking" className="btn btn-accent">
                {t('pricing.cta')}
              </Link>
            </div>

            {/* Career */}
            <div className="pricing-card card">
              <div className="pricing-icon">💼</div>
              <h3>{t('pricing.career.name')}</h3>
              <div className="pricing-amount">
                <span className="price">{t('pricing.career.price')}</span>
                <span className="duration">{t('pricing.career.duration')}</span>
              </div>
              <ul className="pricing-features">
                <li>✅ CV (British style)</li>
                <li>✅ Cover letter</li>
                <li>✅ LinkedIn profile</li>
                <li>✅ Interview prep / Przygotowanie do rozmowy</li>
                <li>✅ Job search tips / Wskazówki</li>
              </ul>
              <Link to="/booking" className="btn btn-primary">
                {t('pricing.cta')}
              </Link>
            </div>
          </div>

          {/* Note */}
          <div className="pricing-note card">
            <h3>{t('pricing.note')}</h3>
            <p>{t('pricing.noteText')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;