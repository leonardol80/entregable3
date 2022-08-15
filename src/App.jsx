import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import CardResidents from './components/CardResidents'
import LocationInfo from './components/LocationInfo'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    let numberLocation
    if(searchInput===''){
      numberLocation=Math.floor(Math.random()*(126-1)+1)
    }else {
      numberLocation=searchInput
    }
    const URL=`https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  },[searchInput])



  // Busqueda del input

  const handdleSumit = (e) =>{
    e.preventDefault()
    setSearchInput(e.target.search.value)  
  }

  // console.log(location);
  // console.log(searchInput)
  
  return (
    <div className="App">
      <div className='contenedorUno'>
        <form className="formulario" onSubmit={handdleSumit}>
          <input id='search' type="text" placeholder='Number of Item' />
          <button className='search_button'>Search</button>
        </form>
      </div>
      <div className='location-info'>
        <LocationInfo location={location} />
      </div>
    <div>
        {
          location?.residents.map(url => (
            <div className='card'>
            <CardResidents
            key={url}
            url={url}
            />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
