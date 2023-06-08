import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Header } from './Header.js';
import { TOP } from './TOP.js';
import { Slider } from './Slider.js';
import { About } from './About.js';
import { Middlehomeone } from './Middlehomeone.js';
import { Choose } from './Choose.js';
import { Footer } from './Footer.js';
import { Middlehometwo } from './Middlehometwo.js';
export const Home = () => {
  return (
    <>
      <TOP />
      <Header />
      <Slider />
      <About />
      <Middlehomeone />
      <Choose />
      <Middlehometwo />
      <Footer />
    </>
  );
};
