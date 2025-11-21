import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t('home.hero.title')}</h1>
            <p className="hero-subtitle">{t('home.hero.subtitle')}</p>
            <p className="hero-description">{t('home.hero.description')}</p>
            <div className="hero-buttons">
              <Link to="/booking" className="btn btn-primary">{t('home.hero.btnBooking')}</Link>
              <Link to="/services" className="btn btn-secondary">{t('home.hero.btnServices')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">{t('home.services.title')}</h2>
          <p className="section-subtitle">{t('home.services.subtitle')}</p>
          
          <div className="services-grid">
            <div className="service-card card">
              <div className="service-icon">📋</div>
              <h3>{t('home.services.benefit.title')}</h3>
              <p>{t('home.services.benefit.description')}</p>
              <div className="service-price">{t('home.services.benefit.price')}</div>
              <Link to="/services" className="btn btn-secondary">{t('nav.services')}</Link>
            </div>

            <div className="service-card card">
              <div className="service-icon">📄</div>
              <h3>{t('home.services.translation.title')}</h3>
              <p>{t('home.services.translation.description')}</p>
              <div className="service-price">{t('home.services.translation.price')}</div>
              <Link to="/services" className="btn btn-secondary">{t('nav.services')}</Link>
            </div>

            <div className="service-card card">
              <div className="service-icon">🏛️</div>
              <h3>{t('home.services.advisory.title')}</h3>
              <p>{t('home.services.advisory.description')}</p>
              <div className="service-price">{t('home.services.advisory.price')}</div>
              <Link to="/services" className="btn btn-secondary">{t('nav.services')}</Link>
            </div>

            <div className="service-card card">
              <div className="service-icon">💼</div>
              <h3>{t('home.services.career.title')}</h3>
              <p>{t('home.services.career.description')}</p>
              <div className="service-price">{t('home.services.career.price')}</div>
              <Link to="/services" className="btn btn-secondary">{t('nav.services')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section why-section">
        <div className="container">
          <h2 className="section-title">{t('home.why.title')}</h2>
          <p className="section-subtitle">{t('home.why.subtitle')}</p>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">⭐</div>
              <h3>{t('home.why.experience.title')}</h3>
              <p>{t('home.why.experience.description')}</p>
            </div>

            <div className="why-card">
              <div className="why-icon">🌍</div>
              <h3>{t('home.why.languages.title')}</h3>
              <p>{t('home.why.languages.description')}</p>
            </div>

            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>{t('home.why.trust.title')}</h3>
              <p>{t('home.why.trust.description')}</p>
            </div>

            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>{t('home.why.price.title')}</h3>
              <p>{t('home.why.price.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.subtitle')}</p>
            <Link to="/booking" className="btn btn-primary btn-large">{t('home.cta.button')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;