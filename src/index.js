import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import Clinics from './components/Clinics'
import StayPlay from './components/StayPlay'
import TeamBuilding from './components/TeamBuilding'
import SchoolsCommunity from './components/SchoolsCommunity'
import CourtDealers from './components/CourtDealers'
import Landing from './components/Landing'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <App>
            <Landing />
          </App>
        } />
        <Route path='about' element={
          <App>
            <AboutPage />
          </App>
        } />
        <Route path='stay-and-play' element={
          <App>
            <StayPlay />
          </App>
        } />
        <Route path='clinics' element={
          <App>
            <Clinics />
          </App>
        } />
        <Route path='team-building' element={
          <App>
            <TeamBuilding />
          </App>
        } />
        <Route path='schools-community' element={
          <App>
            <SchoolsCommunity />
          </App>
        } />
        <Route path='court-dealers' element={
          <App>
            <CourtDealers />
          </App>
        } />
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);