import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

import logoImg from '../assets/logo.svg';

import '../styles/pages/landing.css';

const Landing: React.FC = () => (
  <div id="page-landing">
    <div className="content-wrapper">
      <motion.img
        src={logoImg}
        alt="Happy"
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      <motion.main
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </motion.main>

      <motion.div
        className="location"
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <strong>Volta Redonda</strong>
        <span>Rio de Janeiro</span>
      </motion.div>

      <motion.div
        className="enter-app-container"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Link to="/app" className="enter-app">
          <FiArrowRight size={32} />
        </Link>
      </motion.div>
    </div>
  </div>
);

export default Landing;
