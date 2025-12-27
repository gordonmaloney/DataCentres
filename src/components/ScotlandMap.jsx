import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useStore } from '../store/useStore'
import redXIcon from '../assets/red_x_marker.png'

// Fix for default Leaflet icon issues in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: null,
  iconUrl: null,
  shadowUrl: null,
});

const customIcon = new L.Icon({
    iconUrl: redXIcon,
    iconSize: [40, 40], // Adjust size as needed
    iconAnchor: [20, 20], // Center the X
    popupAnchor: [0, -20]
});

export default function ScotlandMap() {
  const { mapData, fetchMapData, isLoadingMap } = useStore()
  const position = [56.4907, -4.2026]; // Center of Scotland roughly
  
  console.log("ScotlandMap rendering. Data:", mapData);
  
  if (!mapData) return <div>No Map Data</div>;
  
  return (
    <MapContainer center={position} zoom={7} scrollWheelZoom={false} style={{ height: '500px', width: '100%', borderRadius: '1rem' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {mapData.map((site) => (
        <Marker key={site.id} position={site.position} icon={customIcon}>
          <Popup>
            <strong>{site.name}</strong><br />
            Data Centre Site
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
