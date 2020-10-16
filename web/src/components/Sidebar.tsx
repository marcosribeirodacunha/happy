import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../assets/map-marker.svg';

import '../styles/components/sidebar.css';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const { goBack } = useHistory();

  return (
    <motion.aside
      className="app-sidebar"
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </motion.aside>
  );
}
