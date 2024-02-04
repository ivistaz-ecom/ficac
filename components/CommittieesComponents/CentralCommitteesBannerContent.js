import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const CentralCommitteesBannerContent = () => {
  return (

    <Container fluid className='p-0'>
      <Container className='p-0'>
        <Col className='banner-text-container text-white'>
          <p className='mb-0'>
            FICAC
            <br />
            Committees
          </p>
          <p
            style={{ fontSize: "30px", fontWeight: "lighter" }}
          >
            Central Committees
          </p>
        </Col>
      </Container>
    </Container>

  )
}

export default CentralCommitteesBannerContent
