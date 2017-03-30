// @flow

import $ from 'jquery'
import React from 'react'
import type { List } from 'immutable'
import { Link, NavLink } from 'react-router-dom'
import { APP_NAME } from '../../shared/config'

type Props = {
  nav: List<*>
}

const handleNavLinkClick = () => {
  $('body').scrollTop(0)
  $('.js-navbar-collapse').collapse('hide')
}

const Nav = ({ nav }: Props) =>
  <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <button className="navbar-toggler navbar-toggler-right" type="button" role="button" data-toggle="collapse" data-target=".js-navbar-collapse">
      <span className="navbar-toggler-icon" />
    </button>
    <Link to="/" className="navbar-brand">{APP_NAME}</Link>
    <div className="js-navbar-collapse collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        {nav.map(link => (
          <li className="nav-item" key={link.get('route')}>
            <NavLink to={link.get('route')} className="nav-link" activeStyle={{ color: 'white' }} exact onClick={handleNavLinkClick}>{link.get('label')}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>

export default Nav
