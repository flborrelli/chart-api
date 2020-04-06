import React, { useEffect } from 'react';
import barsAPI from '../../services/barsAPI';

function BarsChart() {

  useEffect(() => {
    getBarsAPI()
  }, [])

  const getBarsAPI = async () => {
    try{
      const response = await barsAPI.get();
      console.log(response.data)
    }catch(err){
      console.log('An error occurs while fetching bars API:', err)
    }
  }

  return (
    <>
    <div className="bars-container">

    </div>
    </>
    
  );
}

export default BarsChart;
