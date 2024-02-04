import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from 'next/image'
import Link from 'next/link'
import { FaBarsStaggered } from "react-icons/fa6";

function NavBar() {
    return (
      <Container className='head-container'>
   <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
                    <Link href="/" className="text-decoration-none navbar-brand">
                        <Image src="/FICAC Logo.svg" alt="logo" width={120} height={120} className='w-100'/>
              </Link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown poppins">
          <Link class="nav-link dropdown-toggle" href="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </Link>
          <ul class="dropdown-menu poppins" aria-labelledby="navbarDropdown">
          <li><Link class="dropdown-item" href="/about">Who is FICAC</Link></li>
           <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" href="/about/history">History</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" href="/about/mission-vision">Mission & Vision</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" href="/about/executive">Leadership</Link></li>
                                    
          </ul>
                            </li>
        <li class="nav-item">
          <Link class="nav-link poppins" href="/news" >FICAC News</Link>
        </li>                
        <li class="nav-item">
          <Link class="nav-link poppins" href="/membership"  >Membership</Link>
        </li>                  
        <li class="nav-item">
          <Link class="nav-link poppins" href="/contact" >Contact Us</Link>
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
    <div class="" >
      <ul class="navbar-nav mobile">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Committees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Directory</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Documents</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Event Gallery</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</div>
</Container>
  )
}

export default NavBar
