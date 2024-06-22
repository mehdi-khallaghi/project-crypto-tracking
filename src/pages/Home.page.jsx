import React, { useEffect, useState } from 'react'
import Spinner from '../components/ui/Spinner.component';
import axios from 'axios'
import { baseUrl } from '../constans/Api';
import CoinsComponent from "../components/coins/Coins.component"

const HomePage = () => {

  const [data, setData] = useState([]);              //for data
  const [loading, setLoading] = useState(false);      //for loading
  const [error, setError] = useState("");              //for erroring 


  useEffect(() => {
    setLoading(true)
    axios(baseUrl)
      .then(response => {
        setLoading(false);
        console.log(response.data);
        setData(response.data)
      })
      .catch(error => {
        setError("An error occured !") 
      })
  } , []);
  return (
    <div className='container mt-3'>
      <div className="row">
        <div className="col-12 text-center">
          <h1>Crypto Tracking</h1>
          <h4>A place to manage all of your trade information and actions</h4>
          <h4>Do not forget to always using asset and risk management!!!</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {loading ? <Spinner /> : error !== "" ? <h1>{error}</h1> : <CoinsComponent data={data} />}
        </div>
      </div>

      {/* <Spinner /> */}
    </div>
  )
}

export default HomePage;
