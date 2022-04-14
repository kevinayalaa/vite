 import { Image } from '@chakra-ui/react';
import { Routes, Route, Link } from 'react-router-dom';

import logo from './assets/logo.png';
import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from './components/LaunchDetails';
import { RocketDetails } from './components/RocketDetails';

export function App() {
  
  return (
    <>
    <Image m={4} src={logo}/>
    <Routes>
      <Route path="/" element={<LaunchList/>} />
      <Route path="launch/:launchId" element={<LaunchDetails/>} />
      <Route path="rockets/:rocketId" element={<RocketDetails/>} />

    </Routes>
      </>
    )
}


  