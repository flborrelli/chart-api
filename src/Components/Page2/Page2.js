import React from 'react';
import './page-2.css';
import NavBar from '../Navbar/NavBar';
import LineChart from '../LineChart/LineChart';

function Page2() {
  return (
    <>
    <NavBar />
    <div className="page2-container">
      <h2>Page 2</h2>
      <LineChart />
    </div>
    </>
    
  );
}

export default Page2;
