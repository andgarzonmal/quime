import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav } from 'react-bootstrap';
import './Navbar.css'
import facebook from '../../assets/facebook.svg'
import svglogo from '../../assets/Logo.svg'
import instagram  from '../../assets/Instagram.svg'

export default function Navbar() {
  return (
    <section className='nav-bar-container'>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={svglogo} alt="" className='logo-image' />
        </div>
        <section className="navbar-content">
          <div className='nav-content-left'>
            <a className='nav-text' href="#home">Home</a>
            <NavDropdown className='nav-text' title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Servicios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  className='nav-text' title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Suministros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='nav-text' title="Suministros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <a className='nav-text' href="#home">Nosotros</a>
          </div>
          <div className='nav-content-right'>
            <a href="" className='nav-text'>
              <img src={facebook} alt="facebook" className='social-media-link' />
            </a>
            <a href="" className='nav-text'>
              <img src={instagram} alt="" className='social-media-link' />
            </a>
            <a href="" className='nav-contact-b-c nav-text'>
              <button className='nav-contact-b'>
                Contactanos
              </button>
            </a>
          </div>
        </section>
      </nav>
    </section>
  )
}
