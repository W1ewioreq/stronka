import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>{t('about.title')}</h1>
          <p>{t('about.subtitle')}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="about-content">
            {/* Mission */}
            <div className="about-section card">
              <h2>{t('about.mission.title')}</h2>
              <p>{t('about.mission.text')}</p>
            </div>

            {/* Languages */}
            <div className="about-section card">
              <h2>{t('about.languages.title')}</h2>
              <div className="languages-list">
                {t('about.languages.list').map((lang, index) => (
                  <div key={index} className="language-badge">
                    {lang}
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="values-grid">
              <div className="value-card card">
                <div className="value-icon">💼</div>
                <h3>Profesjonalizm / Professionalism</h3>
                <p>Najwyższa jakość usług / Highest quality services</p>
              </div>

              <div className="value-card card">
                <div className="value-icon">🤝</div>
                <h3>Zaufanie / Trust</h3>
                <p>Pełna dyskrecja / Complete discretion</p>
              </div>

              <div className="value-card card">
                <div className="value-icon">❤️</div>
                <h3>Empatia / Empathy</h3>
                <p>Rozumiemy Twoją sytuację / We understand your situation</p>
              </div>

              <div className="value-card card">
                <div className="value-icon">✨</div>
                <h3>Przejrzystość / Transparency</h3>
                <p>Jasne zasady / Clear rules</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;