import { useState } from 'react'
import { OrderedArticleList, ArticleListItem, MiniArticle } from './components/CustomComponents'
import './NewsHomepage.sass'
import { IconMenuCloseSVG, IconMenuSVG, ImageGamingGrowthJPG, ImageRetroPcsJPG, ImageTopLaptopsJPG, ImageWeb3DesktopJPG, ImageWeb3MobileJPG, LogoSVG } from './util/js/Images'

export default function NewsHomepage() {

  const [showingMenu, updateShowingMenu] = useState(false)

  const rootElement: HTMLBodyElement = document.querySelector('body')!
  rootElement.setAttribute('style', `overflow-y: ${showingMenu ? 'hidden' : 'scroll'}`)

  return (
    <div className='news-homepage-container'>
      <div className={`semi-transparent-black-overlay ${showingMenu ? 'active' : 'hidden'}`}/>
      <header>
        <img src={LogoSVG} alt="Logo" />
        <button className='mobile-only' onClick={() => updateShowingMenu(!showingMenu)}>
          <img src={IconMenuSVG} alt="Three Stripes" />
        </button>
        <nav className={`mobile-only hamburger-menu ${showingMenu ? 'active' : 'hidden'}`}>
          <button onClick={() => updateShowingMenu(!showingMenu)}>
            <img src={IconMenuCloseSVG} alt="Cross" />
          </button>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
        <ul className='desktop-only'>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </header>
      <main id='news-homepage'>
        <section>
          <article className='main-news-article'>
            <img
              src={ImageWeb3MobileJPG}
              srcSet={`${ImageWeb3MobileJPG} 686w, ${ImageWeb3DesktopJPG} 1460w`}
              sizes="(max-width: 700px) 40px, 700px"
              alt="Colorful wooden shapes" 
            />
            <div>
              <h1 className='color-very-dark-blue'>The Bright Future of Web 3.0?</h1>
              <p>
                We dive into the next evolution of the web that claims to put the power
                of the platform back into the hands of the people. But is it really
                fulfilling its promise?
              </p>
              <button>Read more</button>
            </div>
          </article>

          <section className='new-articles-section'>
            <h1>New</h1>
            <section>
              <MiniArticle 
                header='Hydrogen VS Electric Cars'
                bodyText='Will hydrogen-fueled cars ever catch up to EVs?'
              />
              <MiniArticle
                header='The Downsides of AI Artistry'
                bodyText='What are the possible adverse effects of on-demand AI image generation?'
              />
              <MiniArticle
                header='Is VC Funding Drying Up?'
                bodyText='Private funding by VC firms is down 50% YOY. We take a look at what that means.'
              />
            </section>
          </section>

          <OrderedArticleList>
            <ArticleListItem
              imageElement={<img src={ImageRetroPcsJPG} alt='Retro PCs'/>}
              header='Reviving Retro PCs'
              bodyText='What happens when old PCs are given modern upgrades?'
            />
            <ArticleListItem
              imageElement={<img src={ImageTopLaptopsJPG} alt='Close-up of a laptop keyboard' />}
              header='Top 10 Laptops of 2022'
              bodyText='Our best picks for various needs and budgets.'
            />
            <ArticleListItem
              imageElement={<img src={ImageGamingGrowthJPG} alt='Video game controller hovering over persons hand' />}
              header='The Growth of Gaming'
              bodyText='How the pandemic has sparked fresh oppurtunities.'
            />
          </OrderedArticleList>

        </section>
      </main>
    </div>
  )
}