import React from 'react'
import beersImg from "../assets/beers.png"
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className='columnDisposition' >
      <Link to="/beers">
        <img src={beersImg} alt="allBeers" width="1000px" />
        <div className='homeCards' >
          <h1>All Beers</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim corrupti cumque consectetur ratione voluptatibus doloribus recusandae libero repellat qui temporibus eum, corporis, quae numquam!</p>
        </div>
      </Link>
      
      <Link to="/random-beer">
        <img src={randomBeerImg} alt="randomBeer" width="1000px" />
        <div className='homeCards' >
          <h1>Random Beer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim corrupti cumque consectetur ratione voluptatibus doloribus recusandae libero repellat qui temporibus eum, corporis, quae numquam!</p>
        </div>
      </Link>

      <Link to="/new-beer">
        <img src={newBeerImg} alt="newBeer" width="1000px" /><div className='homeCards' >
          <h1>New Beer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim corrupti cumque consectetur ratione voluptatibus doloribus recusandae libero repellat qui temporibus eum, corporis, quae numquam!</p>
        </div>
      </Link>

    </div>
  )
}

export default Home