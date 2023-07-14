import React from 'react'
import { Link } from 'gatsby'
import Logo150 from '../../static/ReWiki-LOGO-150x150.png'

import * as styles from './navigation.module.css'
const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo}  style={{
        background: `url(${Logo150})`,
        height: `50px`,
        width: `50px`,
        backgroundSize: `cover`
       
      }} />
      <span className={styles.navigationItem}>ReWiki Ecosystem</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog Post
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
