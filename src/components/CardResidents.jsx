import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResidents = ({url}) => {
  
    const resident = useFetch(url)

    // console.log(resident)

    const bgcolor ={}

    if(resident?.status==='Dead'){
        bgcolor.backgroundColor="red"
    } else if(resident?.status==='Alive'){
        bgcolor.backgroundColor="green"
    } else {
        bgcolor.backgroundColor="gray"
    }

    if(resident?.type===""){
        resident.type= "Unknown"
    }
    
    return (
    <article className='card'>
        <div className='card2'>
            <header className='header'>
             <img src={resident?.image} alt={`image of ${resident?.name}`} />
                <div className='estado'>
                    <div className='circle' style={bgcolor}></div>
                    <span className='font-color'>{resident?.status}</span>
                </div>
            </header>
        
            <h3 className='font-color'>{resident?.name}</h3>
            <ul>
                <li className='font-color'><span>Specie: </span>{resident?.species}</li>
                <li className='font-color'><span>Origin: </span>{resident?.origin.name}</li>
                <li className='font-color'><span>Eppisodes where appear: </span>{resident?.episode.length}</li>
            </ul>
        </div>
    </article>
  )
}

export default CardResidents