'use client'
import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from 'next/image'
import Link from 'next/link'
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from 'next/navigation'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  const pathname = usePathname()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className='head-container p-0 z-3' fluid>
        <Container fluid className='g-0 d-lg-flex d-none w-100'>
          <Container>
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <Link href="/" className="text-decoration-none navbar-brand">
                  <Image src="/FICAC Logo.svg" alt="logo" width={120} height={120} className='w-100' />
                </Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown poppins">
                      <Link class={pathname == "/about" ? "active nav-link dropdown-toggle" : "nav-link dropdown-toggle"} href="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        About
                      </Link>
                      <ul class="dropdown-menu poppins" aria-labelledby="navbarDropdown">
                        <li><Link class={pathname == "/about" ? "active dropdown-item" : "dropdown-item"} href="/about">Who is FICAC</Link></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link class={pathname == "/about/history" ? "active dropdown-item" : "dropdown-item"} href="/about/history">History</Link></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link class={pathname == "/about/mission-vision" ? "active dropdown-item" : "dropdown-item"} href="/about/mission-vision">Mission & Vision</Link></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link class={pathname == "/about/executive" ? "active dropdown-item" : "dropdown-item"} href="/about/executive">Leadership</Link></li>

                      </ul>
                    </li>
                    <li class="nav-item">
                      <Link class={pathname == "/news" ? "active-menu nav-link poppins" : "nav-link poppins"} href="/news" >FICAC News</Link>
                    </li>
                    <li class="nav-item">
                      <Link class={pathname == "/membership" ? "active-menu nav-link poppins" : "nav-link poppins"} href="/membership"  >Membership</Link>
                    </li>
                    <li class="nav-item">
                      <Link class={pathname == "/contact" ? "active-menu nav-link poppins" : "nav-link poppins"} href="/contact" >Contact Us</Link>
                    </li>
                  </ul>
                  <div class="d-flex mx-4" style={{ cursor: 'pointer' }}>
                    {/* <FaBarsStaggered size={25} color={'white'} style={{ marginLeft: '30px' }} onClick={handleShow} /> */}
                    <i class="bi bi-list text-white" style={{ fontSize: '30px', marginLeft: '30px' }} onClick={handleShow}></i>
                  </div>
                </div>
              </div>
            </nav>

            <Offcanvas show={show} onHide={handleClose} placement='end' className='wbg-blue text-white'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul class="navbar-nav mobile">
                  <li class={pathname == "/ficac-committees" ? "active-white nav-item" : "nav-item"}>
                    <Link class={pathname == "/ficac-committees" ? "active-white nav-link active" : "nav-link"} href="/ficac-committees">Committees</Link>
                  </li>
                  <li class={pathname == "/directory" ? "active-white nav-item" : "nav-item"}>
                    <Link class={pathname == "/directory" ? "active-white nav-link active" : "nav-link"} href="/directory">Directory</Link>
                  </li>
                  <li class={pathname == "/documents" ? "active-white nav-item" : "nav-item"}>
                    <Link class={pathname == "/documents" ? "active-white nav-link active" : "nav-link"} href="/documents">Documents</Link>
                  </li>
                  <li class={pathname == "/gallery" ? "active-white nav-item" : "nav-item"}>
                    <Link class={pathname == "/gallery" ? "active-white nav-link active" : "nav-link"} href="/gallery">Event Gallery</Link>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Container>

        {/* <Container className=''> */}
        {/* </Container> */}
      </Container>


      <Container className='d-lg-none d-flex'>
        <Col>
          <nav class="navbar navbar-expand-lg bg-light p-2 bg-transparent">
            <div class="container-fluid p-0 ">
              <Link href="/" className="text-decoration-none navbar-brand">
                <Image src="/FICAC Logo.svg" alt="logo" width={120} height={120} className='w-100' />
              </Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-danger"></span>
              </button>
            </div>
          </nav>

          <div class="collapse navbar-collapse position-absolute top-0 z-3 bg-white w-100 start-0 bottom-0" id="navbarSupportedContent">
            <button class="navbar-toggler w-100 justify-content-end text-end p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="bi bi-x-circle-fill fs-1 end-0 "></i>
            </button>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown poppins">
                <Link class={pathname == "/about" ? "active nav-link dropdown-toggle" : "nav-link dropdown-toggle"} href="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </Link>
                <ul class="dropdown-menu poppins" aria-labelledby="navbarDropdown">
                  <li><Link class={pathname == "/about" ? "active dropdown-item" : "dropdown-item"} href="/about">Who is FICAC</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class={pathname == "/about/history" ? "active dropdown-item" : "dropdown-item"} href="/about/history">History</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class={pathname == "/about/mission-vision" ? "active dropdown-item" : "dropdown-item"} href="/about/mission-vision">Mission & Vision</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class={pathname == "/about/executive" ? "active dropdown-item" : "dropdown-item"} href="/about/executive">Leadership</Link></li>

                </ul>
              </li>
              <li class="nav-item">
                <Link class={pathname == "/news" ? "active nav-link poppins" : "nav-link poppins"} href="/news" >FICAC News</Link>
              </li>
              <li class="nav-item">
                <Link class={pathname == "/membership" ? "active nav-link poppins" : "nav-link poppins"} href="/membership"  >Membership</Link>
              </li>
              <li class="nav-item">
                <Link class={pathname == "/contact" ? "active nav-link poppins" : "nav-link poppins"} href="/contact" >Contact Us</Link>
              </li>
              <li class="nav-item">
                <Link class={pathname == "/ficac-committees" ? "active nav-link poppins" : "nav-link poppins"} href="/ficac-committees">Committees</Link>
              </li>
              <li class="nav-item">
                <Link class={pathname == "/directory" ? "active nav-link poppins" : "nav-link poppins"} href="/directory">Directory</Link>
              </li>
              <li class="nav-item">
                <Link class={pathname == "/documents" ? "active nav-link poppins" : "nav-link poppins"} href="/documents">Documents</Link>
              </li>
              <li class="nav-item">
                <Link class={pathname == "/gallery" ? "active nav-link poppins" : "nav-link poppins"} href="/gallery">Event Gallery</Link>
              </li>
            </ul>
          </div>
        </Col>
      </Container>

    </>
  )
}

export default NavBar
