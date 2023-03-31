import './OrderSummary.sass'
import IllustrationHero from './assets/illustration-hero.svg'
import MusicIcon from './assets/icon-music.svg'
import DekstopBackgroundPattern from './assets/pattern-background-desktop.svg'
import MobileBackgroundPattern from './assets/pattern-background-mobile.svg'

export default function OrderSummary() {
  return (
    <div className="order-summary-container">

      <picture id="background">
        <source 
          srcSet={`${DekstopBackgroundPattern} 2x, ${MobileBackgroundPattern} 1x`}
          media='(max-width: 600px)'
        />
        <img
          src={MobileBackgroundPattern} alt="Sine wave pattern"
        />
      </picture>

      <main className='order-summary'>
        <img src={IllustrationHero} alt="Person dancing in front of city skyline at night." />
        <div className='padded-container'>
          <h1>Order Summary</h1>
          <p>
            <span className="light-font-color">
              You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </span>
          </p>
          <div className='plan-details'>
            <img src={MusicIcon} alt="" />
            <div>
              <p>
                <strong>Annual Plan</strong>
              </p>

              <p>
                <span className='light-font-color'>$59.99/year</span>
              </p>
            </div>
            <p className='anchor-styling'>Change</p>
          </div>
          <button className='confirm-button'>Proceed to Payment</button>
          <button className='cancel-button'>Cancel Order</button>
        </div>
      </main>

    </div>
  )
}
