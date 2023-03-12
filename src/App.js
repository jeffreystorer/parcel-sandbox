import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LookupDataTable from '/src/components/lookup/LookupDataTable';
import ScoresTable from '/src/components/scores/ScoresTable';
import LookupPage from '/src/pages/LookupPage';

import { get } from '/packages/utils/localStorage';

export default function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LookupPage />} />
            <Route path='ghininfo' element={<LookupDataTable />} />
            <Route path='scores' element={<ScoresTable />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

function Layout() {
  const [activeNav, setActiveNav] = useState('ghininfo');

  const brandStyle = {
    color: '#fff',
    backgroundColor: '#00365f',
    alignItems: 'center',
    boxShadow:
      '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.28)',
    display: 'flex',
    height: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '24px',
    overflow: 'hidden',
    padding: '0px 5px 0px 5px',
    textAlign: 'center',
    width: 'fit-content',
  };

  const handleNavSelect = (eventkey) => {
    setActiveNav(eventkey);
  };

  const styleActive = {
    backgroundColor: '#3378ac',
    color: 'white',
  };

  return (
    <>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}>
        <Navbar>
          <Navbar.Brand style={brandStyle}>TLC Golf</Navbar.Brand>
        </Navbar>
        <Outlet />
      </div>
    </>
  );
}
