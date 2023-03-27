import ProjectCards from './ProjectCards'
import '../styling/home.sass'
import Footer from './Footer'

export default function Home() {
  return (
    <>
      <main>
        <header>
          <h1>Welcome!</h1>
          <p>Click on a card to open that project in a new tab.</p>
        </header>

        <ProjectCards />
      </main>
      <Footer />
    </>
  )
}
