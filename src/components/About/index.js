import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const myStyle = {
    backgroundImage:
      'url(https://i.im.ge/2022/08/09/FKVa48.Screen-Shot-2022-08-08-at-3-22-29-PM.png)',
    // https://images.squarespace-cdn.com/content/v1/5d4cfd87082420000108b311/1566718849902-809OYSILCPJLAKT97XWE/futuristic-technology-abstract-background-beautiful-footage-087637197_prevstill.jpeg?format=2500w)
    height: '110vh',
    marginTop: '-40px',
    fontSize: '50px',
    backgroundSize: '1500px',
    backgroundRepeat: 'no-repeat',
  }

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container about-page" style={myStyle}>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Rising Sophomore at DePauw University aspiring to become a Software
            Engineer. I stem from Pakistan 🇵🇰 and am currently pursuing my
            Bachelors in Arts degree in Computer Science in the US. I enjoy
            learning almost everything related to technology. My main passion in
            life is to become a full-stack developer for a professional firm.
          </p>
          <p align="LEFT">
            My main passion in life is to become a full-stack developer. I am
            actively looking for a semester-long and summer internship for
            spring and summer 2023.
          </p>
          <p>
            I am experienced at front-end development and currently focusing on
            learning back-end tools. I have worked with HTML, C++, C#, Java,
            JavaScript, Python, React, Node, and UIs.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
