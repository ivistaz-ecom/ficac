'use client'
import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from 'next/image'
import Link from 'next/link'
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from 'next/navigation'

function NavBar() {
    const pathname = usePathname()
    return (
        <Container className='head-container' fluid>
            <Container className='g-0'>
   <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
                    <Link href="/" className="text-decoration-none navbar-brand">
                        <Image src="/FICAC Logo.svg" alt="logo" width={120} height={120} className='w-100'/>
              </Link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown poppins">
          <Link class={pathname == "/about" ? "active nav-link dropdown-toggle" : "nav-link dropdown-toggle"} href="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </Link>
          <ul class="dropdown-menu poppins" aria-labelledby="navbarDropdown">
          <li><Link class={pathname == "/about" ? "active dropdown-item" : "dropdown-item"} href="/about">Who is FICAC</Link></li>
           <li><hr class="dropdown-divider"/></li>
            <li><Link class={pathname == "/about/history" ? "active dropdown-item" : "dropdown-item"} href="/about/history">History</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class={pathname == "/about/mission-vision" ? "active dropdown-item" : "dropdown-item"}  href="/about/mission-vision">Mission & Vision</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class={pathname == "/about/executive" ? "active dropdown-item" : "dropdown-item"} href="/about/executive">Leadership</Link></li>
                                    
          </ul>
                            </li>
        <li class="nav-item">
        <Link class={pathname == "/news" ? "active nav-link poppins":"nav-link poppins"} href="/news" >FICAC News</Link>
        </li>                
        <li class="nav-item">
          <Link class={pathname == "/membership" ? "active nav-link poppins":"nav-link poppins"} href="/membership"  >Membership</Link>
        </li>                  
        <li class="nav-item">
          <Link class={pathname == "/contact" ? "active nav-link poppins":"nav-link poppins"} href="/contact" >Contact Us</Link>
        </li>
      </ul>
     <div class="d-flex">
     <FaBarsStaggered size={25} color={'white'} style={{marginLeft:'30px'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"/>
      </div>
    </div>
  </div>
            </nav>
            

<div class="offcanvas offcanvas-end wbg-blue text-center" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header justify-content-right">
    
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <nav class="navbar mobile-menu navbar-expand-lg">
  <div class="container-fluid">
    <div class="w-100" >
      <ul class="navbar-nav mobile">
        <li class="nav-item">
          <Link class={pathname == "/ficac-committees" ? "active-white nav-link active":"nav-link"} aria-current="page" href="/ficac-committees">Committees</Link>
        </li>
        <li class="nav-item">
          <Link class={pathname == "/directory" ? "active-white nav-link active":"nav-link"} href="/directory">Directory</Link>
        </li>
        <li class="nav-item">
          <Link class={pathname == "/documents" ? "active-white nav-link active":"nav-link"} href="/documents">Documents</Link>
        </li>
        <li class="nav-item">
          <Link class={pathname == "/gallery" ? "active-white nav-link active":"nav-link"} href="/gallery">Event Gallery</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
                </div>
                </Container>
</Container>
  )
}

export default NavBar
