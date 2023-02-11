import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-icon.png"
import './map.css'

let IconLocation = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: 30,
})


function Map(props) {

    const {position} = props
    return (
      <MapContainer center={position} zoom={15} scrollWheelZoom={false} className={"mapa"}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}  icon={IconLocation}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  );
}

export default Map;