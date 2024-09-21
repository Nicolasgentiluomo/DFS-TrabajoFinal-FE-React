import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map(){
    const containerStyle = {
      width: '200px',
      height: '200px'
    };
    
    const center = {
      lat: -34.600221,
      lng: -58.364428
    };

    return(
    <LoadScript  googleMapsApiKey="AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik">
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
        >
        <Marker position={center} />
        </GoogleMap>
    </LoadScript>
    )
}

export default Map;