import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert(t('contact.form.success'));
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-section card">
              <h2>{t('contact.form.title')}</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t('contact.form.subject')}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <div className="contact-info-card card">
                <h3>📍 {t('contact.info.address.title')}</h3>
                <p>{t('contact.info.address.line1')}</p>
                <p>{t('contact.info.address.line2')}</p>
                <p>{t('contact.info.address.line3')}</p>
              </div>

              <div className="contact-info-card card">
                <h3>📞 {t('contact.info.phone.title')}</h3>
                <p>{t('contact.info.phone.number')}</p>
              </div>

              <div className="contact-info-card card">
                <h3>✉️ {t('contact.info.email.title')}</h3>
                <p>{t('contact.info.email.address')}</p>
              </div>

              <div className="contact-info-card card">
                <h3>💬 Social Media</h3>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    📘 Facebook
                  </a>
                  <a href="https://wa.me/44123456789" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;