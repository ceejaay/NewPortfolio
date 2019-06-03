import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import dont_send_email from '../assets/images/dont_send_email.png'
import pic04 from '../assets/images/pic04.jpg'

const linkDiv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const linkStyle = {
  // color: "red",
  border: "solid black 1px",
  width: "20%",
  margin: "0 1%",
  textAlign: "center"
}


const imgStyle = {
  height: "150px"
}

const headerStyles = {
  margin: "30px 0",

}

const headerDiv= {
  display: "flex",
}
class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Dead or Alive" />
        <div style={headerDiv}>
        <h1 style={headerStyles}>Dead or Alive</h1>
        </div>
        <div id="main">
          <section id="content" className="main">
            <span className="image main" ><img src={pic04} alt="Dead or alive" /></span>
            <h2>Dead or Alive</h2>
             <p>I wrote the backend of this app in Node. The front-end developer and I collaborated on the database schema. I wrote tests to ensure the enpoints worked properly. This was an enjoyable project. I was the sole developer on the backend. I had to research and implement the usage of third-party APIs. I used two different APIs. One to get the data about the famous people. The other to get the pictures. <br /><strong>Note: There are no pull requests on this app. My project manager and I just pushed or merged to master after we discussed the feature</strong> </p>
            <div style={linkDiv}> <a style={linkStyle} href="https://github.com/BrianARuff/team_dead_or_alive/tree/master/api">Github</a>
            <a style={linkStyle} href="https://doa-dev-marketing.herokuapp.com">Live Site</a>
            <a style={linkStyle} href="#">Pull Requests</a>
            </div>
          </section>

        </div>
      </Layout>
    )
  }
}

export default Generic
