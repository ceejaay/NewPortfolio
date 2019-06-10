import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'volunteer'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Introduction</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Projects</a>
                </Scroll>
            </li>
            <li>
              <Scroll type="id" element="second">
                  <a href="#">Skills</a>
              </Scroll>
            </li>
            <li>
              <Scroll type="id" element="volunteer">
                  <a href="#">Volunteer Work</a>
              </Scroll>
            </li>


        </Scrollspy>
    </nav>
)

export default Nav
