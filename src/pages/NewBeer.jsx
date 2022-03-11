import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from "react-router-dom"

function NewBeer() {

  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [first_brewed, setFirstBrewed] = useState("")
  const [brewers_tips, setBrewersTips] = useState("")
  const [attenuation_level, setAttenuationLevel] = useState(0)
  const [contributed_by, setContributedBy] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
    navigate("/beers")
  }

  return (
    <div className='columnDisposition'>
    
      <Navbar />
      <div>

      <form onSubmit={handleSubmit} className="formDisposition" >

          <label htmlFor='name'>Name</label>
          <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={(e)=> setName(e.target.value)}            
          className="inputStyle"
          />
          <br/>

          <label htmlFor='tagline'>Tagline</label>
          <input 
          type="text" 
          name="tagline" 
          value={tagline} 
          onChange={(e)=> setTagline(e.target.value)}            
          className="inputStyle"
          />
          <br/>

          <label htmlFor='description'>Description</label>
          <input 
          type="text" 
          name="description" 
          value={description} 
          onChange={(e)=> setDescription(e.target.value)}            
          className="inputStyle"
          id='descriptionInput'
          />
          <br/>

          <label htmlFor='firstBrewed'>First Brewed</label>
          <input 
          type="text" 
          name="firstBrewed" 
          value={first_brewed} 
          onChange={(e)=> setFirstBrewed(e.target.value)}            
          className="inputStyle"            
          />
          <br/>

          <label htmlFor='brewersTips'>Brewers Tips</label>
          <input 
          type="text" 
          name="brewersTips" 
          value={brewers_tips} 
          onChange={(e)=> setBrewersTips(e.target.value)}            
          className="inputStyle"
         />
          <br/>

          <label htmlFor='attenuationLevel'>Attenuation Level</label>
          <input 
          type="number" 
          name="attenuationLevel" 
          value={attenuation_level} 
          onChange={(e)=> setAttenuationLevel(e.target.value)}
          className="inputStyle"            
          />
          <br/>

          <label htmlFor='contributedBy'>Contributed By</label>
          <input 
          type="text" 
          name="contributedBy" 
          value={contributed_by} 
          onChange={(e)=> setContributedBy(e.target.value)}
          className="inputStyle"             
          />
          <br/>

          <button>Add New</button>

      </form>
        
        
      </div>

    </div>
  )
}

export default NewBeer