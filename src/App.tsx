import { Routes, Route } from 'react-router-dom'
import QRCode from './frontend_mentor_projects/qrcode/QRCode'
import ResultsSummary from './frontend_mentor_projects/results_summary/ResultsSummary'
import Home from './components/Home'
import './main.sass'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcode" element={<QRCode />} />
        <Route path="/results-summary" element={<ResultsSummary />} />
      </Routes>
    </div>
  )
}