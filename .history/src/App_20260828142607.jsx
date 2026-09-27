
import { useState } from 'react'
import './App.css'

function App() {
  const [activeCrop, setActiveCrop] = useState('Maize')

  return (
    <div>
      <h1>AgriSmart</h1>

      <p>Smart technology for better farming.</p>

      <button onClick={() => setActiveCrop('Maize')}>
        Monitor Maize
      </button>

      <button onClick={() => setActiveCrop('Beans')}>
        Monitor Beans
      </button>

      <p>Currently monitoring: {activeCrop}</p>
    </div>
  )
}

export default Apps
