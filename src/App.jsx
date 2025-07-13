import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter } from 'react-router'
import { Routes, Route } from 'react-router'
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import AboutPage from "./AboutPage";
import MissionPage from "./MissionPage";
import DonationForm from './DonationForm'
function App() {
  return (
    <HashRouter>
      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/mission" element={<MissionPage />} />
  <Route path="/donate" element={<DonationForm />} />

</Routes>
    </HashRouter>
  );
}

export default App
