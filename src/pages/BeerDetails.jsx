import React from 'react'
import Navbar from '../components/Navbar'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from "react-router-dom"
import axios from "axios"

function BeerDetails() {

  const {id} = useParams()
  const navigate = useNavigate()

  const [beerDetails, setBeerDetails] = useState(null)

  useEffect(()=>{
    getBeerDetails()
  }, [])

  const getBeerDetails = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      console.log(response.data)
      setBeerDetails(response.data)
    }
    catch (err){
      navigate("/error")
    }
  }

  if(!beerDetails) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='columnDisposition'>
    
      <Navbar />
      <div className='columnDisposition detailsCard'>
        <div>
          <img src={beerDetails.image_url} alt={beerDetails.name} width="100px"/>
        </div>
        <div className='rowDisposition'>
          <div>
          <h3>{beerDetails.name}</h3> <br/>
          <h5>{beerDetails.tagline}</h5>
          </div>
          <div>
          <h3>{beerDetails.attenuation_level}</h3><br/>
          <h5>{beerDetails.first_brewed}</h5>
          </div>
        </div>
        <div>
        <article className='textStyle' >{beerDetails.description}</article>
        <h5>{beerDetails.contributed_by}</h5>        
        </div>
        
      </div>

    </div>
  )
}

export default BeerDetails