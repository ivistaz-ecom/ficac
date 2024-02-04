import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const HomeOrganisation = () => {
  return (
    <Container className=''>
      <Row className='gap-lg-1 gap-3 py-3 pt-5 d-flex flex-column flex-lg-row justify-content-center flex-wrap'>
       
        <Col className='d-flex align-items-center justify-content-center'>
          <Link href="https://www.fpa2.org/" target='_blank'>
          <Image src="/prince_org.png" alt=''/>
          </Link>
        </Col>
      
      
        <Col className='d-flex align-items-center justify-content-center ' >
          <Link href="https://cvcollege.org/" target='_blank'>
          <Image src="/vocational_education.png" alt=''/>
          </Link>
        </Col>
       
        <Col className='d-flex align-items-center justify-content-center '>
          <Link href="https://rasit.org/" target='_blank'>
          <Image src="/rasit_org.png" alt=''/>
          </Link>
        </Col>
        
        <Col className='d-flex align-items-center justify-content-center ' >
          <Link href="https://www.ascame.org/" target='_blank'>
          <Image src="/ascame.png" alt=''/>
          </Link>
        </Col>
      
        <Col className='d-flex align-items-center justify-content-center '>
          <Link href="https://www.unicef.org/" target='_blank'>
          <Image src="/unicef_org.png" alt=''/>
          </Link>
        </Col>
       
        <Col className='d-flex align-items-center justify-content-center ' >
          <Link href="https://unric.org/en/" target='_blank'>
          <Image src="/unic.png" alt=''/>
          </Link>
        </Col>
      
      </Row>

      
      <Row className=' py-3'>
        <Col className=' d-flex flex-row justify-content-center align-items-center'>
          <h3 className="fs-2 txt-blue">
            Recognition of the status of FICAC as an NGO
          </h3>
        </Col>
      </Row>

      <Row className='d-flex flex-row justify-content-center pb-5'>
        <Col className='d-flex align-items-center gap-5 justify-content-center' >
          <Link href="https://european-union.europa.eu/index_en" target='_blank'>
          <Image src="/ficac_ngo.png" alt=''/>
          </Link>
          <Link href="https://ecosoc.un.org/en" target='_blank'>
          <Image src="/eco_soc.png" alt=''/>
          </Link>

          <Link href="https://www.interlegal.net/" target='_blank'>
          <Image src="/inter_legal.png" alt=''/>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeOrganisation
