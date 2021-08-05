import React from 'react'
import './intro.scss'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { IconButton } from '@material-ui/core'

export default function intro({ menuOpen }) {
  return (
    <div className={`intro ${menuOpen && 'active'}`} id="intro">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Bernard Krasowski</h1>
        <h3>Web developer</h3>
      </div>
      <a href="#portfolio">
        <IconButton >
          <KeyboardArrowDownIcon className='arrow' />
        </IconButton>
      </a>
    </div>

  )
}
