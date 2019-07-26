import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard.js'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState( [] );

  useEffect(() => {axios.get('https://rickandmortyapi.com/api/character/')
                  
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    

    .then (res => {setCharacter(res.data.results);
    })
  
    .catch( err => console.log("Error Msg", err))
  
  }, [])

  return <section className='character-list grid-view'>

      {characters.map(character => (<CharacterCard
              img={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
               />)
      )}
    </section>

}
