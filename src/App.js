import React, { useEffect } from 'react'
import './App.css';
import { useState } from 'react';
import Routers from './config/Routers';

export const AppsContext = React.createContext();

function App() {
  const user = {
    name: 'Pangidoan Nugroho Syahputra Harahap',
    nim: '2007113796',
    prodi: 'Teknik Informatika - FT',
    img: './storage/pp.jpg',
  }
  return (

    <AppsContext.Provider value={user}>
      <Routers />
    </AppsContext.Provider >

  );
}

export default App;
