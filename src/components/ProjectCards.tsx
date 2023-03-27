import '../styling/ProjectCards.sass'
import { Link } from 'react-router-dom'
import QRCodePreviewImage from '../assets/project_previews/QR_code.png'

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
