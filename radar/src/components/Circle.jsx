import React from 'react'
import '../styles/Circle.css'
import reactIcon from '../assets/react.svg'
import cy from '../assets/cy.svg'
import phpLogo from '../assets/phpLogo.svg'
import htmLogo from '../assets/htmLogo.svg'
import sLogo from '../assets/sLogo.svg'

import { useRef } from 'react'

export default function Circle() {

    const htmIconRef = useRef()
    const reactIconRef = useRef()
    const sLogoRef = useRef()
    const htmToSRef = useRef()
    const reactToHtmLine = useRef()

    function ChageHtmOn () {
        reactIconRef.current.classList.toggle('active')
        sLogoRef.current.classList.toggle('active')
        htmToSRef.current.classList.toggle('open-line')
    }

    function ChangeHtmOff () {
        reactIconRef.current.classList.toggle('active')
        sLogoRef.current.classList.toggle('active')
        htmToSRef.current.classList.toggle('open-line')
    }

    function ChangeReact () {
        reactToHtmLine.current.classList.toggle('open-line')
        htmIconRef.current.classList.toggle('active')
    }

    function ChangeReactOFF () {
        reactToHtmLine.current.classList.toggle('open-line')
        htmIconRef.current.classList.toggle('active')
    }

    
  return (
    <>
        <div className='circle'>
            <div className='outer-circle'></div>

            <div className='circle-two'></div>

{/* Third Circle Starts From Here */}
            <div className='circle-three'></div>

                <img onMouseEnter={ChageHtmOn} onMouseLeave={ChangeHtmOff} ref={htmIconRef} className='htmLogo-icon' src={htmLogo} />
                <div className="htmLogo-dash-div">      
                    <hr className="htm-icon-dash" />
                </div> 

                <div ref={htmToSRef} className="htmToS-div">      
                    <hr className="htmToS-line" />
                </div>

                <img ref={sLogoRef} src={sLogo} className='sLogo-icon' />
{/* Fourth Circle Starts From Here */}
            <div className='circle-four'>
                <div className='wavy'>

                </div>

                <img onMouseEnter={ChangeReact} onMouseLeave={ChangeReactOFF} ref={reactIconRef} className='react-icon' src={reactIcon} />

                <div className="dash-line">      
                    <hr className="react-icon-dash" />
                </div>  
                <div ref={reactToHtmLine} className="reactToHtm-div">      
                    <hr className="reactToHtm-line" />
                </div>
                
                <img className='cy-icon' src={cy} /> 
                <img className='php-icon' src={phpLogo} />
                

            </div>
        </div>

        <div className='circle-title'>
            <a className='outer-circle-title'>Hold</a><br />
            <a className='circle-two-title'>Assess</a>
            <a className='circle-three-title'>Trial</a>
            <a className='circle-four-title'>Adopt</a>
        </div>
    </>
    
  )
}
