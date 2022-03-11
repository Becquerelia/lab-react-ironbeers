import React from 'react'
import Navbar from '../components/Navbar'
import {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

function RandomBeer() {

  const [randomBeer, setRandomBeer] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    getRandomBeer()
  }, [])

  const getRandomBeer = async () => {
    try {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      console.log(response.data)
      setRandomBeer(response.data)
    }
    catch (err){
      navigate("/error")
    }
  }

  if(!randomBeer) {
    return <h2>Loading...</h2>
  }


  return (
    <div className='columnDisposition'>
    
    <Navbar />
      <div className='columnDisposition detailsCard'>
        <div>
          <img src={randomBeer.image_url} alt={randomBeer.name} width="100px"/>
        </div>
        <div className='rowDisposition'>
          <div>
          <h3>{randomBeer.name}</h3> <br/>
          <h5>{randomBeer.tagline}</h5>
          </div>
          <div>
          <h3>{randomBeer.attenuation_level}</h3><br/>
          <h5>{randomBeer.first_brewed}</h5>
          </div>
        </div>
        <div>
        <article className='textStyle' >{randomBeer.description}</article>
        <h5>{randomBeer.contributed_by}</h5>        
        </div>
        
      </div>

    </div>
  )
}

export default RandomBeer