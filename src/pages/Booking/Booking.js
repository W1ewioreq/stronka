import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Booking.css';

const Booking = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
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
    console.log('Booking submitted:', formData);
    alert(t('booking.form.success'));
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <div className="booking-page">
      <div className="page-header">
        <div className="container">
          <h1>{t('booking.title')}</h1>
          <p>{t('booking.subtitle')}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="booking-content">
            <div className="booking-form-container card">
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label htmlFor="name">{t('booking.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder={t('booking.form.namePlaceholder')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('booking.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder={t('booking.form.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('booking.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder={t('booking.form.phonePlaceholder')}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">{t('booking.form.service')}</label>
                  <select
                    id="service"
                    name="service"
                    className="form-control"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t('booking.form.selectService')}</option>
                    <option value="benefit">Benefit Forms / Formularze Benefitowe</option>
                    <option value="translation">Translation / Tłumaczenie</option>
                    <option value="advisory">Advisory / Doradztwo</option>
                    <option value="career">Career Support / Wsparcie Zawodowe</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">{t('booking.form.date')}</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="form-control"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">{t('booking.form.time')}</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      className="form-control"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('booking.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder={t('booking.form.messagePlaceholder')}
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  {t('booking.form.submit')}
                </button>
              </form>
            </div>

            <div className="booking-info">
              <div className="info-card card">
                <h3>📞 Telefon / Phone</h3>
                <p>+44 (0) 123 456 789</p>
              </div>

              <div className="info-card card">
                <h3>✉️ Email</h3>
                <p>info@opendooradvisory.co.uk</p>
              </div>

              <div className="info-card card">
                <h3>💬 WhatsApp</h3>
                <p>+44 123 456 789</p>
              </div>

              <div className="info-card card">
                <h3>⏰ Godziny / Hours</h3>
                <p>Pon-Pt / Mon-Fri: 9:00-18:00</p>
                <p>Sobota / Sat: 10:00-14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;