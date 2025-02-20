import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Image, Grid, Segment } from 'semantic-ui-react'

import ProjectElement from './project-element'

import styles from '../../../../css/sections/project/project-main.css'
import common from '../../../../css/sections/common-styles.css'

const ProjectSection = ({ project }) => (
  <div styleName="styles.container">
    <Container textAlign="center">
      <h1 styleName="common.header" styleName="styles.header">
        Projects
      </h1>
      <Image
        src={'/static/maintainer_site/project.png'}
        size="medium"
        styleName="styles.image"
        centered
      />

      <Grid padded columns={4}>
        {Object.keys(project).map((key, index) => (
          <ProjectElement
            key={project[key].slug}
            name={project[key].title}
            number={index + 1}
            description={project[key].shortDescription}
            link={`/maintainer_site/projects/${project[key].slug}`}
          />
        ))}
      </Grid>
      <Segment clearing padded="very" basic>
        <Link to="./projects">
          <div styleName="common.button">View more</div>
        </Link>
      </Segment>
    </Container>
  </div>
)

export default ProjectSection
