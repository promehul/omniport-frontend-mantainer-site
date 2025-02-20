import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { PATHNAME } from '../consts'

import styles from '../css/sidebar.css'

class Sidebar extends Component {
  handleHide = () => {
    this.props.toggleSidebar(false, 'sidebar-container-shrink')
  }

  handleClick = e => {
    this.props.navMobileTitleRender(e.target.name)
  }

  render() {
    return (
      <React.Fragment>
        {this.props.sidebarVisible.visible && (
          <div styleName="styles.main">
            <div styleName="styles.overlay" onClick={this.handleHide} />
            <div styleName={`styles.${this.props.sidebarVisible.style}`}>
              <div styleName="styles.sidebar">
                <Link
                  to={`${PATHNAME}blog/`}
                  styleName="styles.link-color"
                  onClick={this.handleHide}
                >
                  <button
                    name="blog"
                    styleName="styles.sidebar-button"
                    onClick={this.handleClick}
                  >
                    Blog
                  </button>
                </Link>
                <Link
                  to={`${PATHNAME}projects/`}
                  styleName="styles.link-color"
                  onClick={this.handleHide}
                >
                  <button
                    name="projects"
                    styleName="styles.sidebar-button"
                    onClick={this.handleClick}
                  >
                    Projects
                  </button>
                </Link>
                <Link
                  to={`${PATHNAME}team/`}
                  styleName="styles.link-color"
                  onClick={this.handleHide}
                >
                  <button
                    name="team"
                    styleName="styles.sidebar-button"
                    onClick={this.handleClick}
                  >
                    Team
                  </button>
                </Link>
                <Link
                  to={`${PATHNAME}alumni/`}
                  styleName="styles.link-color"
                  onClick={this.handleHide}
                >
                  <button
                    name="alumni"
                    styleName="styles.sidebar-button"
                    onClick={this.handleClick}
                  >
                    Alumni
                  </button>
                </Link>
                {this.props.isAuthed.auth && (
                  <React.Fragment>
                    <Link
                      to={`${PATHNAME}add_member_details/`}
                      styleName="styles.link-color"
                      onClick={this.handleHide}
                    >
                      <button
                        name="add member details"
                        styleName="styles.sidebar-button"
                        onClick={this.handleClick}
                      >
                        * Member
                      </button>
                    </Link>
                    <Link
                      to={`${PATHNAME}add_project_details/`}
                      styleName="styles.link-color"
                      onClick={this.handleHide}
                    >
                      <button
                        name="add project details"
                        styleName="styles.sidebar-button"
                        onClick={this.handleClick}
                      >
                        * Project
                      </button>
                    </Link>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default Sidebar
