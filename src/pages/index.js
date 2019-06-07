import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Scrollspy from 'react-scrollspy'
import Scroll from '../components/Scroll'
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
  height: "250px",
  width: "250px",
  border: "1px solid black",
  borderRadius: '50%',
  borderColor: '#dddddd'
}

const tempIcon = {
  width: "100px",
  height: "100px",
  fill: "#ffffff",
}

const projLiStyle = {
  display: "flex",
  flexDirection: "column",

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
                I am passionate about building tools that help people communicate. I am an independent, reliable full-stack web dev.
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
                <Scroll type="id" element="doa">
                  <a href="#">
                    <img style={imgStyle} src={dead} alt="pic"/>
                    <h3>Dead or Alive?</h3>
                    <p>A React app that tests a user on whether a famous person is living or dead? I wrote the backend code.</p>
                  </a>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="email">
                  <a href="#">
                    <img style={imgStyle} src={dont} alt="pic"/>
                    <h3>Don't Send that Email</h3>
                    <p>A React app that evaluates the emotional tone of an email or text message.</p>
                  </a>

                </Scroll>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
              </ul>
            </footer>
          </section>
          <section id="email" className="main special">
            <header className="major">
              <h2>Don't Send that Email</h2>
              <p><br />
              </p>
            </header>
            <ul className="features">
              <li>
                <img style={imgStyle} src={dont} alt="pic"/>
              </li>
              <li style={projLiStyle}>
            <a  href="https://github.com/Lambda-School-Labs/dont-send-that-email">Github</a>
            <a  href="https://dont-send-that-email.netlify.com/">Live Site</a>
            <a  href="https://github.com/Lambda-School-Labs/dont-send-that-email/pulls?q=is%3Apr+author%3Aceejaay+is%3Aclosed">Pull Requests</a>
              </li>
            </ul>
            <p className="content">
              This is a React app with a Node backend. This app takes the user's message and analyzes the emotional tone of the message. It uses the IBM Watson API to do the analysis. I worked on a team of six people to get this app completed in five weeks. The most challenging and interesting thing was implementing the API. We used the IBM Watson API to analyze the tone of email or text messages. For this app, my team and I did regular code reviews and followed a professional git workflow.
            </p>
            <footer className="major">
              <ul className="actions">
              </ul>
            </footer>
          </section>

          <section id="doa" className="main special">
            <header className="major">
              <h2>Dead or Alive</h2>
              <p><br />
              </p>
            </header>
            <ul className="features">
              <li>image</li>
              <li>links</li>
            </ul>
            <p className="content">description of project here</p>
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
          <section id="test">
            this is the test section
          </section>


        </div>

      </Layout>
    )
  }
}

export default Index
