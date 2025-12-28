import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useStore } from '../store/useStore'
import mapIcon from '../assets/map_icon.png'

// Fix for default Leaflet icon issues in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: null,
  iconUrl: null,
  shadowUrl: null,
});

const customIcon = new L.Icon({
    iconUrl: mapIcon,
    iconSize: [45, 45],
    iconAnchor: [22, 22],
    popupAnchor: [0, -22],
    className: 'map-marker-icon'
});

export default function ScotlandMap() {
  const { mapData, fetchMapData, isLoadingMap } = useStore()
  const position = [57, -4]; // Center of Scotland roughly
  
  console.log("ScotlandMap rendering. Data:", mapData);
  
  if (!mapData) return <div>No Map Data</div>;
  
  return (
    <MapContainer center={position} zoom={6} scrollWheelZoom={true} style={{ height: '500px', width: '100%', borderRadius: '1rem' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
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
