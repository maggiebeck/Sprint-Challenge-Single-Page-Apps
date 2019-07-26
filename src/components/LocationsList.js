import React, { useEffect, useState } from 'react'; 
import LocationCard from './LocationCard.js';
import axios from 'axios';

export default function LocationsList() {
    const [locations, setLocation] = useState( [] );

    useEffect(() => {
                    axios.get('https://rickandmortyapi.com/api/location/')
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      
  
      .then (res => {setLocation(res.data.results);
      })
    
      .catch( err => console.log("Error Msg", err))
    
    }, [])
  
    return <section className='location-list grid-view'>
  
        {locations.map(location => (<LocationCard   
              name={location.name}
              type={location.type}
              dimension={location.dimension}
            />)
        )}
      </section>
  
  }
  