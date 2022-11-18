import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';

function Maps() {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        longitude: -122.4376,
        latitude: 37.7577,
        zoom: 3.5,
    })

  return (
      <ReactMapGL
        mapStyle='mapbox://styles/pontos21/clambrw2r000i14un06kb7l3v'
        mapboxApiAccessToken={process.env.mapboxglaccessToken}
        {...viewport}
      >
        
      </ReactMapGL>
        
    

    
  )
}

export default Maps