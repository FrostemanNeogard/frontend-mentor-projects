import { Routes, Route } from 'react-router-dom'
import QRCode from './frontend_mentor_projects/qrcode/QRCode'
import Home from './components/Home'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcode" element={<QRCode />} />
      </Routes>
    </div>
  )
}