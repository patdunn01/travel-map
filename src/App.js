import './App.css';
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

function App() {
  return (
    <MapContainer center={[51.5, -0.09]} zoom={15}>
      <TileLayer
      attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
      url="https://api.maptiler.com/maps/outdoor-v2/256/{z}/{x}/{y}.png?key=9qkMw7jQ462RP8Ywuz7j"
      />
    </MapContainer>
  );
}

export default App;
