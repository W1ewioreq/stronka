import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('footer.about.title')}</h3>
            <p>{t('footer.about.description')}</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
              <a href="https://wa.me/44123456789" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>{t('footer.quickLinks.title')}</h3>
            <ul className="footer-links">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/services">{t('nav.services')}</Link></li>
              <li><Link to="/pricing">{t('nav.pricing')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t('footer.contact.title')}</h3>
            <div className="contact-info">
              <p>📍 {t('footer.contact.address')}</p>
              <p>📞 {t('footer.contact.phone')}</p>
              <p>✉️ {t('footer.contact.email')}</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.bottom.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;