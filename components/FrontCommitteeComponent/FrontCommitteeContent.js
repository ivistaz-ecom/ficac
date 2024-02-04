import React from 'react'
import { Container , Row , Col , Image } from 'react-bootstrap'
import Link from 'next/link'

const FrontCommitteeContent = () => {
  return (
    <Container fluid className=' p-0'>
      <Container className=' p-0'>

          <Col className='banner-text-container text-white'>
            <p className='mb-0'>
            FICAC  
            <br />
            Committees
                </p>
            </Col>



    <Row className=' d-flex align-content-center align-items-center justify-content-center px-lg-5'>
      <Col className=' px-lg-5 px-5  col-lg-4 col-12' 
      style={{
        // marginTop:"-20px"
      }}>
      <Image src="/ficac_content_committe.png" alt="aboutus" fluid
      className=''
      style={{width:"200px", height:"250px"}}
      />
      </Col>
      
      <Col className='px-lg-4 px-4 px-lg-0  py-3 '>
      <Row>
      <p className=''>
      Due to the expansion of the Federation in terms of its scope, objectives and activities and as it has moved to new levels of development, Regional Committees were established in all regions of the world and Central Committees were established, focusing on specific issues. 
      </p>
      
      <p className=''>
      Each Committee of the Federation has been defined in terms of its purpose and how it is expected to operate at the FICAC level. The FICAC Committee Terms of Reference, which was initially adopted in 2010, and amended and approved by the new Board of Directors in July 2023 specifies those terms and purposes.
      </p> 
      
      <p className=''>
      Committees were formed to deal with specific FICAC issues. Each Committee is chaired by a Regional Chairperson and staffed by selection of the Chair to include Deans and members who have a specific interest in the topic. 
      </p>
      
      <p className=''>
      Each region will be managed by a Regional Chairperson who may be invited to attend the Board meetings and report on the progress in their region.
      </p>
      </Row>
      </Col>
    </Row>
    <Row className='mb-5 px-0' style={{paddingLeft:"50px" , paddingRight:"50px"}}>
      <Col className='col-lg-4  d-lg-flex d-none'></Col>
      <Col className='col-lg-8 d-flex gap-4 flex-lg-row flex-column px-5'> 
        
        <Link href="/ficac-committees/central-committees" className='text-decoration-none'>
        <div className='px-3 py-3 py-lg-2 rounded-2  d-flex justify-content-center' style={{backgroundColor:"#001C79", color:"white"}}>Central Committees</div>
        </Link>

        <Link href="/ficac-committees/regions-committees" className='text-decoration-none'>
        <div className='px-3 py-3 py-lg-2 rounded-2 d-flex justify-content-center ' style={{backgroundColor:"white", color:"#001C79" , border:"1px solid #001C79"}}>Regions Committees</div>
        </Link>
      </Col>
    </Row>
    
   </Container>
   </Container>
  )
}

export default FrontCommitteeContent
