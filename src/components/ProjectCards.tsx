import '../styling/ProjectCards.sass'
import { Link } from 'react-router-dom'
import QRCodePreviewImage from '../assets/project_previews/QR_code.png'
import ResultsSummaryPewviewImage from '../assets/project_previews/ResultsSummary.png'
import NewsHomepage from '../assets/project_previews/NewsHomepage.png'
import AdviceGenerator from '../assets/project_previews/AdviceGenerator.png'

export default function ProjectCards() {
  
  interface ProjectInformation {
    name: string,
    description: string,
    url: string,
    imageURL: string
  }
  
  interface ProjectProp {
    projectData: ProjectInformation
  }
  
  const temporaryProjects: Array<ProjectInformation> = [
    {
      name: 'QR Code Component',
      description: 'First simple Frontend Mentor challenge. This is a card showing a QR code.',
      url: 'qrcode',
      imageURL: QRCodePreviewImage
    },
    {
      name: 'Results Summary Component',
      description: 'Another simple Frontend Mentor challenge. This is a card showing a summary from the results of something such as an assessment.',
      url: 'results-summary',
      imageURL: ResultsSummaryPewviewImage
    },
    {
      name: 'News Homepage',
      description: 'My first level 2 Frontend Mentor challenge. This is a slightly more complex layout made with CSS grid, as well as having a mobile-only hamburger menu.',
      url: 'news-homepage',
      imageURL: NewsHomepage
    },
    {
      name: 'Advice Generator',
      description: 'Another level 2 Frontend Mentor challenge. This uses a very basic API to generate a random piece of advice.',
      url: 'advice-generator',
      imageURL: AdviceGenerator
    },
  ]

  function ProjectCard(props: ProjectProp) {
    const project = props.projectData

    return (
      <article className="project-card">
        <Link to={project.url} target="_blank" rel="noreferrer">
          <img src={project.imageURL} alt={project.name} />
        </Link>
        <div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      </article>
    )
  }

  return (
    <section className="project-cards">
      {temporaryProjects.map((project: ProjectInformation, index: number) => {
        return (
          <ProjectCard projectData={project} key={index}/>
        )
      })}
    </section>
  )
}
