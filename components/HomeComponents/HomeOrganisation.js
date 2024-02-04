import Link from 'next/link'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

const HomeOrganisation = () => {
  return (
    <Container className=''>
      <Row className='d-flex justify-content-center align-items-center' >
       
      <Col className='' >
          <Link href="https://www.fpa2.org/" target='_blank'>
            <Image src="/1.svg" alt='' width={200} height={50}/>
          </Link>
        </Col>
      
      
        <Col className=''>
          <Link href="https://cvcollege.org/" target='_blank'>
          <Image src="/2.svg" alt='' width={100} height={200} />
          </Link>
        </Col>
       
        <Col className=''lg={1}>
          <Link href="https://rasit.org/" target='_blank'>
          <Image src="/3.svg" alt='' width={60} height={200}/>
          </Link>
        </Col>
        
        <Col className='' >
          <Link href="https://www.ascame.org/" target='_blank'>
          <Image src="/4.svg" alt='' width={300} height={200}/>
          </Link>
        </Col>
      
        <Col className=''>
          <Link href="https://www.unicef.org/" target='_blank'>
          <Image src="/5.svg" alt='' width={130} height={200} />
          </Link>
        </Col>
       
        <Col className='' >
          <Link href="https://unric.org/en/" target='_blank'>
          <Image src="/6.svg" alt='' width={130} height={200} />
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
          <Image src="/7.svg" alt='' width={90} height={100}/>
          </Link>
          <Link href="https://ecosoc.un.org/en" target='_blank'>
          <Image src="/8.svg" alt='' width={90} height={100}/>
          </Link>

          <Link href="https://www.interlegal.net/" target='_blank'>
          <Image src="/9.svg" alt='' width={100} height={100}/>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeOrganisation
