import Navbar from '../components/Navbar'
import {useState, useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"


function BeersList() {

  const [beers, setBeers] = useState(null)
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  useEffect(()=>{
    getBeers()
  }, [])

  useEffect(()=>{
    getSearch()
  }, [search])

  const getBeers = async () => {
    try {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      //console.log(response.data)
      setBeers(response.data)
    }
    catch (err){
      navigate("/error")
    }
  }

  const getSearch = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      console.log(response.data)
      setBeers(response.data)
    }
    catch (err){
      navigate("/error")
    }  
  }

  const handleChange = (event) => {    
    setSearch(event.target.value)      
  }

  if(!beers) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='columnDisposition'>
    
      <Navbar />
      <div>
        <form className="formSearch">
            <label htmlFor="search">Search your Beer</label>
            <input type="text" name="search" className="inputStyle" value={search} onChange={handleChange} />
        </form>
      </div>
      <div>
        {beers.map((eachBeer)=>{
          return (
            <div key={eachBeer._id} >
              <Link to={`/beer-details/${eachBeer._id}`} >              
              <div className='beerCard' >
                <div>
                  <img src={eachBeer.image_url} alt={eachBeer.name} width="40px"/>
                </div>
                <div className="infoBeer">
                  <h2>{eachBeer.name}</h2>
                  <h4>{eachBeer.tagline}</h4>
                  <h4>Created by: {eachBeer.contributed_by}</h4>
                </div>
              </div>
              </Link>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default BeersList