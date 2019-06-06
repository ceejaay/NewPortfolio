import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/chad_jemmett_pic.jpg'
import temp01 from '../assets/images/pic02.jpg'
import dead from '../assets/images/doa_logo.png'
import dont from '../assets/images/dont.png'
import DevIcon from "devicon-react-svg";

const imgStyle = {
  backgroundImage: `url${pic01}`,
  height: "300px",
  width: "300px",
  border: "1px solid black",
  borderRadius: '50%',
  borderColor: '#dddddd'
}

const tempIcon = {
  width: "100px",
  height: "100px",
  fill: "#ffffff",
}




class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
      data: []
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  componentDidMount() {

  }

  render() {

    return (
      <Layout>
        <Helmet title="Chad Jemmett" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>A.B.C. Always Be Creating.</h2>
                </header>
                <p>Life is short, so don't bother wasting time on things you are not passionate about.
                I am passionate about building tools that help people communicate. I am an independant, reliable full-stack web dev.
                </p>
                <p>Please, take a look at my projects. Contact me with any questions.</p>
                <ul className="actions">
                </ul>
              </div>
              <span className="image"><img src={pic01} alt="Chad Jemmett" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
              <li>
                <Link to="doa">
                  <img style={imgStyle} src={dead} alt="pic"/>
                  <h3>Dead or Alive?</h3>
                  <p>A React app that tests a user on whether a famous person is living or dead? I wrote the backend code.</p>
                </Link>
              </li>
              <li>
                <Link to="dont_send_email">
                  <img style={imgStyle} src={dont} alt="pic"/>
                  <h3>Don't Send that Email</h3>
                  <p>A React app that evaluates the emotional tone of an email or text message.</p>
                </Link>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Skills</h2>
              <p>I always like learning new things. But this is what I'm best at.<br />
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <DevIcon  icon="javascript" style={tempIcon}/>
                <strong></strong> Javascript
              </li>
              <li className="style2">
                <DevIcon icon="react" style={tempIcon} />
                <strong></strong> React 
              </li>
              <li className="style3">
                <DevIcon icon="nodejs" style={tempIcon} />
                <strong></strong> Node 
              </li>
              <li className="style4">
                <DevIcon icon="ruby" style={tempIcon} />
                <strong></strong> Ruby
              </li>
              <li className="style5">
                <DevIcon icon="python" style={tempIcon} />
                <strong></strong> Python
              </li>
            </ul>
            <p className="content">To learn programming, I taught myself Ruby. To round out my skills I went to <a href="https://lambdaschool.com/courses/cs/web/">Lambda School</a>. There I learned Javascript, React, Node and Python. Lambda School is a 30 week hands-on curriculum focused on computer science, software engineering and web development. I have a solid foundation of web development and computer science.</p>
            <footer className="major">
              <ul className="actions">
              </ul>
            </footer>
          </section>


        </div>

      </Layout>
    )
  }
}

export default Index
