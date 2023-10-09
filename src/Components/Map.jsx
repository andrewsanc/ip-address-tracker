import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import Leaflet from "leaflet";
import marker from "../assets/icon-location.svg";
import "leaflet/dist/leaflet.css";

const svgIcon = Leaflet.icon({
  iconUrl: marker,
  iconSize: [35, 40], // size of the icon
});

function MapChangeView(props) {
  const { position, zoom } = props;
  const map = useMap();
  map.flyTo(position, zoom);
}

export default function Map(props) {
  const {
    locationData: { lat, lng },
  } = props;
  const position = [lat, lng];

  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} icon={svgIcon}></Marker>
        <MapChangeView position={position} zoom={13} />
      </MapContainer>
    </div>
  );
}
