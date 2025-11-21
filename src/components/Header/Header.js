import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Open Door Advisory</h1>
          </Link>
          
          <nav className="nav">
            <Link to="/" className="nav-link">{t('nav.home')}</Link>
            <Link to="/services" className="nav-link">{t('nav.services')}</Link>
            <Link to="/about" className="nav-link">{t('nav.about')}</Link>
            <Link to="/pricing" className="nav-link">{t('nav.pricing')}</Link>
            <Link to="/booking" className="nav-link nav-link-cta">{t('nav.booking')}</Link>
            <Link to="/contact" className="nav-link">{t('nav.contact')}</Link>
            
            <button onClick={toggleLanguage} className="language-toggle">
              {language === 'pl' ? '🇬🇧 EN' : '🇵🇱 PL'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;