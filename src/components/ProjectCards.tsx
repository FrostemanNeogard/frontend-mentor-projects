import '../styling/ProjectCards.sass'
import { Link } from 'react-router-dom'

import { ProjectProp, ProjectInformation } from '../util/js/Interfaces'
import { ProjectData } from '../util/js/ProjectData'

export default function ProjectCards() {
  return (
    <section className="project-cards">
      {ProjectData.map((project: ProjectInformation, index: number) => {
        return (
          <ProjectCard projectData={project} key={index}/>
        )
      })}
    </section>
  )
}

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