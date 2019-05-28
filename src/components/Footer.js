import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Chad Jemmett</h2>
            <p>A full-stack developer. Skilled in Javascript, React, Node, Ruby, and Python.</p>
            <ul className="actions">
              {/* footer button from here */}
            </ul>
        </section>
        <section>
            <h2>Contact Me</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>260 N 3000 W West Point, UT 84015</dd>
                <dt>Phone</dt>
                <dd>(208) 350-0359</dd>
                <dt>Email</dt>
                <dd><a href="#">chad.jemmett@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="#" className="icon fa-linkedin alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://github.com/ceejaay" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
