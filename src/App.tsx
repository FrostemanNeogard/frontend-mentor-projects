import { Routes, Route } from 'react-router-dom'
import './main.sass'
import QRCode from './frontend_mentor_projects/qrcode/QRCode'
import ResultsSummary from './frontend_mentor_projects/results_summary/ResultsSummary'
import Home from './components/Home'
import NewsHomepage from './frontend_mentor_projects/news_homepage/NewsHomepage'
import AdviceGenerator from './frontend_mentor_projects/advice_generator/AdviceGenerator'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcode" element={<QRCode />} />
        <Route path="/results-summary" element={<ResultsSummary />} />
        <Route path="/news-homepage" element={<NewsHomepage />} />
        <Route path="/advice-generator" element={<AdviceGenerator />} />
      </Routes>
    </div>
  )
}