import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GoblaData } from '../../App';
import './header.css'

function Header() {
  const { linkClicked, linkStatus } = useContext(GoblaData);
  const linkStyle = {
    active: {
      color: "black"
    },
    notActive: {
      color: "#737c81",
    },
    dot: {
      width: "4px",
      height: "4px",
      backgroundColor: "black",
      display: "block",
      borderRadius: "50%",
    },
    dotHidde: {
      display: "none"
    }
  }

  return (
    <>
      <header>
        <div className="logo">
          MCT
        </div>
        <nav>
          <ul>

            <li><Link className='a' onClick={() => { linkClicked("home") }} to="/" style={(linkStatus.home) ? (linkStyle.active) : (linkStyle.notActive)}>Home <span style={(linkStatus.home) ? (linkStyle.dot) : (linkStyle.dotHidde)}></span></Link></li>

            <li><Link className='a' onClick={() => { linkClicked("product") }} to="product" style={(linkStatus.product) ? (linkStyle.active) : (linkStyle.notActive)}>Products <span style={(linkStatus.product) ? (linkStyle.dot) : (linkStyle.dotHidde)}></span></Link></li>

            <li><Link className='a' onClick={() => { linkClicked("user") }} to="user" style={(linkStatus.user) ? (linkStyle.active) : (linkStyle.notActive)}>User <span style={(linkStatus.user) ? (linkStyle.dot) : (linkStyle.dotHidde)}></span></Link></li>

            <li><Link className='a' onClick={() => { linkClicked("contact") }} to="contact" style={(linkStatus.contact) ? (linkStyle.active) : (linkStyle.notActive)}>Contact <span style={(linkStatus.contact) ? (linkStyle.dot) : (linkStyle.dotHidde)}></span></Link></li>

          </ul>
          <button className='logout-btn'>Logout</button>
        </nav>
      </header>
    </>
  )
}

export default Header;