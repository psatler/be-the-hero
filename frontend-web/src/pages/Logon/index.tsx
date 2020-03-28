import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import heroesimg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
  return (
    <div className="logon-container">
      <img src={logoImg} alt="Be The Hero"/>

      <section className="form">
        <h1>Logon into the app</h1>

        <input placeholder="Your ID" />
        <button type="submit">Enter</button>

        <a href="/register">
          <FiLogIn size={16} color="#E02041" />
          I'm not registered
        </a>
      </section>

      <img src={heroesimg} alt="Heroes"/>
    </div>
  );
}
