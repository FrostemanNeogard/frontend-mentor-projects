import './ResultsSummary.sass'
import MemorySVG from './assets/images/icon-memory.svg'
import ReactionSVG from './assets/images/icon-reaction.svg'
import VerbalSVG from './assets/images/icon-verbal.svg'
import VisualSVG from './assets/images/icon-visual.svg'

export default function ResultsSummary() {

  interface ResultCategoryProps {
    iconSrc: string,
    name: string,
    score: number
  }

  function ResultCategory(props: ResultCategoryProps) {
    const { iconSrc, name, score } = props
    return (
      <div className="result-category" id={`result-category-${name.toLowerCase()}`}>
        <img src={iconSrc} alt={name} />
        <p className='result-category-name'>
          {name}
        </p>
        <p className='result-category-score'>
          {score}
          <span> / 100</span>
        </p>
      </div>
    )
  }
  
  return (
    <main className='results-summary-container'>
      <div className="results-summary-component">

        <section className='result'>
          <h1>Your Results</h1>
          <div>
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>

        <section className='summary'>
          <h1>Summary</h1>
          <ResultCategory iconSrc={ReactionSVG} name="Reaction" score={80} />
          <ResultCategory iconSrc={MemorySVG} name="Memory" score={92} />
          <ResultCategory iconSrc={VerbalSVG} name="Verbal" score={61} />
          <ResultCategory iconSrc={VisualSVG} name="Visual" score={72} />
          <button>Continue</button>
        </section>

      </div>
    </main>
  )
}
