import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard.js'

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisode] = useState( [] );

  useEffect(() => {axios.get('https://rickandmortyapi.com/api/episode/')
                  
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    

    .then (res => {setEpisode(res.data.results);
    })
  
    .catch( err => console.log("Error Msg", err))
  
  }, [])

  return <section className='episode-list grid-view'>

      {episodes.map(episode => (<EpisodeCard 
           key={episode.id}
           episode={episode}
           name={episode.name}
           airDate={episode.air_date}
           number={episode.id}/>)
      )}
    </section>

}
