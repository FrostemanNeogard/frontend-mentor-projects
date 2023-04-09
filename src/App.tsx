import { Routes, Route } from 'react-router-dom'
import './main.sass'
import QRCode from './frontend_mentor_projects/qrcode/QRCode'
import ResultsSummary from './frontend_mentor_projects/results_summary/ResultsSummary'
import Home from './components/Home'
import NewsHomepage from './frontend_mentor_projects/news_homepage/NewsHomepage'
import AdviceGenerator from './frontend_mentor_projects/advice_generator/AdviceGenerator'
import OrderSummary from './frontend_mentor_projects/order_summary/OrderSummary'
import TipCalculator from './frontend_mentor_projects/tip_calculator/TipCalculator'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcode" element={<QRCode />} />
        <Route path="/results-summary" element={<ResultsSummary />} />
        <Route path="/news-homepage" element={<NewsHomepage />} />
        <Route path="/advice-generator" element={<AdviceGenerator />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/tip-calculator" element={<TipCalculator />} />
      </Routes>
    </div>
  )
}