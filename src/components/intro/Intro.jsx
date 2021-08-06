import React, { useEffect, useRef } from 'react'
import './intro.scss'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { IconButton } from '@material-ui/core'
import { init } from 'ityped'

export default function Intro({ menuOpen }) {

  const textRef = useRef();

  useEffect(() => {

    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer"],
    });

  }, [])

  return (
    <div className={`intro ${menuOpen && 'active'}`} id="intro">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Bernard Krasowski</h1>
        <h3><span ref={textRef}></span></h3>
      </div>
      <a href="#portfolio">
        <IconButton >
          <KeyboardArrowDownIcon className='arrow' />
        </IconButton>
      </a>
    </div>

  )
}
