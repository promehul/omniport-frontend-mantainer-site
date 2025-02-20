import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Image, Segment } from 'semantic-ui-react'

import { BLOG1, BLOG2 } from '../../../../consts'

import styles from '../../../../css/sections/blog/blog-section.css'
import common from '../../../../css/sections/common-styles.css'

const BlogSection = () => (
  <div styleName="styles.container">
    <Container textAlign="center">
      <h1 styleName="common.header" styleName="styles.header">
        Blogs
      </h1>
      <Grid verticalAlign="middle" centered stackable padded>
        <Grid.Column width={8} textAlign="center">
          <Image src="/static/maintainer_site/blog.png" size="medium" inline />
        </Grid.Column>
        <Grid.Column width={8} textAlign="center">
          <p>
            {BLOG1}
            <br />
            {BLOG2}
          </p>
        </Grid.Column>
      </Grid>
      <Segment basic>
        <Link to="./blog">
          <div styleName="common.button">Read</div>
        </Link>
      </Segment>
    </Container>
  </div>
)

export default BlogSection
