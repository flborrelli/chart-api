import React from 'react';
import './page-1.css';
import NavBar from '../Navbar/NavBar';
import BarsChart from '../BarsChart/BarsChart';
import PieChart from '../PieChart/PieChart';

function Page1() {
  return (
    <>
    <NavBar />
    <div className="page1-container">
      <h2>Page 1</h2>
    <div>
    <BarsChart />
    <PieChart />
    </div>
    </div>
    </>
    
  );
}

export default Page1;
