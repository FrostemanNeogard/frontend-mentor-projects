import { useEffect, useState } from "react"
import './AdviceGenerator.sass'
import DiceIconSVG from './assets/icon-dice.svg'
import PatternDividerDesktopSVG from './assets/pattern-divider-desktop.svg'
import PatternDividerMobileSVG from './assets/pattern-divider-mobile.svg'

interface AdviceObject {
  advice: string,
  id: number
}

const API_URL = 'https://api.adviceslip.com/advice'

export default function AdviceGenerator() {

  const [currentAdvice, setCurrentAdvice] = useState<AdviceObject>({
    advice: '',
    id: 0
  })

  useEffect(() => {
    FetchRandomAdvice(setCurrentAdvice)
  }, [])

  return (
    <div className="advice-generator-container">
      <main>
        <h2>Advice #{currentAdvice.id}</h2>
        <h1>&ldquo;{currentAdvice.advice}&rdquo;</h1>
        <picture>
          <source srcSet={`${PatternDividerDesktopSVG} 2x, ${PatternDividerMobileSVG} 1x`} media="(orientation: portrait), (max-width: 500px)"/>
          <img 
            src={PatternDividerDesktopSVG}
            alt="Divider"
          />
        </picture>
        <button onClick={() => FetchRandomAdvice(setCurrentAdvice)}>
          <img src={DiceIconSVG} alt="Dice" />
        </button>
      </main>
    </div>
  )
}

async function FetchRandomAdvice(setter: Function) {
  const response = await fetch(API_URL, {cache: "no-cache"})
  const data = await response.json()
  const adviceSlip = data.slip
  setter(adviceSlip)
}
