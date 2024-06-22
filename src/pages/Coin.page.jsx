import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { detailsUrl } from '../constans/Api';
import axios from 'axios';
import CoinsDetailsComponent from '../components/coins/CoinsDetails.component';
import Spinner from "../components/ui/Spinner.component"

const CoinPage = () => {
    const paramObject = useParams();

    const url = detailsUrl(paramObject.id);

    // console.log(url)

    const [coin, setCoin] = useState({});              //for data
    const [loading, setLoading] = useState(false);      //for loading
    const [error, setError] = useState("");              //for erroring 


    useEffect(() => {
        setLoading(true)
        axios(url)
            .then(response => {
                setLoading(false);
                //   console.log(response.data);
                setCoin(response.data)
            })
            .catch(error => {
                setError("An error occured !")
            })
    }, []);
    return (
        <div className='container'>
            {
                loading ? <Spinner /> : error !== "" ? <h1>{error}</h1> : <CoinsDetailsComponent coin={coin} />
            }
        </div>
    )
}

export default CoinPage;
