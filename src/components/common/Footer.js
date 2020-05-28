import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <nav>
                    <ul>
                        <li className="home"><NavLink to='/home'>Home</NavLink></li>
						            <li className="about"><NavLink to='/about'>About</NavLink></li>
                        <li className="media"><NavLink to='/media'>Media</NavLink></li>
                        <li className="press"><NavLink to='/press'>Press</NavLink></li>
                        <li className="links"><NavLink to='/links'>Links</NavLink></li>
                    </ul>
                </nav>
              <span className="copyright">
                Reproduction of material from any flaudlogic.com page without written permission from the author is strictly prohibited.<br />
                ©2018 Copyright Michael D. Kaplan. All rights reserved.  Website layout by <a
                  href="https://gustavosazes.com/" target="_blank" rel="noopener noreferrer">Gustavo Sazes</a>. <br />
                  <Link to="/contact">Contact</Link>
              </span>
            </footer>
        );
    }

}
