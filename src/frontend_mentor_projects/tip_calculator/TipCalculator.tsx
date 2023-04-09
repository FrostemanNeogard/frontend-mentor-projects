import './TipCalculator.sass'

export default function TipCalculator() {
  return (
    <div className="tip-calculator-container">
      <header>
        <h1>Splitter</h1>
      </header>

      <main className='tip-calculator'>
        <form action="">
          
          <label htmlFor=""></label>
          <input type="text" />

          <label htmlFor=""></label>
          <button>5%</button>
          <button>5%</button>
          <button>5%</button>
          <button>5%</button>
          <button>5%</button>
          <button>5%</button>

          <label htmlFor=""></label>
          <input type="text" />

        </form>

        <div className='tip-results'>
          <div>
            <p>Tip Amount</p>
            <p>/ person</p>
            <h2>$10.0</h2>
          </div>

          <div>
            <p>Tip Amount</p>
            <p>/ person</p>
            <h2>$10.0</h2>
          </div>

          <button>Reset</button>
        </div>
      </main>
    </div>
  )
}
