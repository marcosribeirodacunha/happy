import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/landing.css';
import logoImg from '../assets/logo.svg';

const Landing: React.FC = () => (
  <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="Happy" />

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <div className="location">
        <strong>Volta Redonda</strong>
        <span>Rio de Janeiro</span>
      </div>

      <Link to="/app" className="enter-app">
        <FiArrowRight size={32} />
      </Link>
    </div>
  </div>
);

export default Landing;
