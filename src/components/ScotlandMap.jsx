import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useStore } from '../store/useStore'
import mapIcon from '../assets/map_icon.png'
import './ScotlandMap.scss'

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

// Helper component to handle dynamic interaction toggling
function MapInteractionController({ isMapActive }) {
  const map = useMap()
  
  useEffect(() => {
    if (isMapActive) {
      map.dragging.enable()
      map.scrollWheelZoom.enable()
      map.touchZoom.enable()
      map.doubleClickZoom.enable()
      if (map.tap) map.tap.enable() // for mobile
    } else {
      map.dragging.disable()
      map.scrollWheelZoom.disable()
      map.touchZoom.disable()
      map.doubleClickZoom.disable()
      if (map.tap) map.tap.disable()
    }
  }, [isMapActive, map])
  
  return null
}

export default function ScotlandMap() {
  const { mapData, fetchMapData, isLoadingMap } = useStore()
  const [isMapActive, setIsMapActive] = useState(false)
  const position = [57, -4]; // Center of Scotland roughly
  const bounds = [
    [54.5, -9.0], // Southwest corner (includes Outer Hebrides/Islands)
    [61.0, 0.0]   // Northeast corner (includes Shetland)
  ];
  
  console.log("ScotlandMap rendering. isMapActive:", isMapActive);
  
  if (!mapData) return <div>No Map Data</div>;
  
  return (
    <div className={`map-container-wrapper ${isMapActive ? 'is-active' : ''}`}>
      <h3 className="map-title">Planned Data Centres</h3>
      {!isMapActive && (
        <div 
          className="map-interaction-overlay" 
          onClick={() => {
            console.log("Overlay clicked, activating map");
            setIsMapActive(true);
          }}
        />
      )}
      
      <MapContainer 
        center={position} 
        zoom={6} 
        minZoom={5}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        dragging={false} // Initial state controlled by MapInteractionController
        scrollWheelZoom={false}
        touchZoom={false}
        doubleClickZoom={false}
        style={{ height: '500px', width: '100%', borderRadius: '1rem' }}
      >
        <MapInteractionController isMapActive={isMapActive} />
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
    </div>
  )
}
