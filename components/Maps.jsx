import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'


function Maps( { searchResults }) {
   const [selectedLocation, setSelectedLocation] = useState({})

    const coordinates = searchResults.map((result) => ({
      longtitude: result.long,
      latitude: result.lat, 
    }))

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
      width: '100%',
      height: '100%',
      longitude: center.longitude,
      latitude: center.latitude,
      zoom: 3.5,
  })

    console.log(searchResults)

  return (
    <ReactMapGL
    mapStyle="mapbox://styles/sonnysangha/ckqlh2q651b7k19lcymr2z03d"
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
  >
    {searchResults.map((result) => (
      <div key={result.long}>
        {/* The markers for the airbnb properties */}
        <Marker
          latitude={result.lat}
          longitude={result.long}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <a
            onClick={() => {
              setSelectedLocation(result);
            }}
          >
            <p
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </a>
        </Marker>

        {/* The popup when we click on a Marker */}
        {selectedLocation.long === result.long ? (
          <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
          >
            {result.title}
          </Popup>
        ) : (
          false
        )}
      </div>
    ))}
  </ReactMapGL>
);
};
        
    

export default Maps