import React from 'react'
import { Container , Row , Col} from 'react-bootstrap'

const DirectoryContent = () => {
  return (
     <Container fluid className='p-0'>
        <Container className='p-0'>

        
        <Col className='banner-text-container text-white'>
            <p className='mb-0'>
              Directory
              </p>
            </Col>
        

        <Row  className='px-lg-5 px-3 py-4'>
             <Col className=' col-3 d-lg-flex d-none p-o'></Col>
             <Col>
             <p>
             FICAC, the World Federation of Consuls, has spread wide and fast since it was founded in 1982. </p>
             
             <p>To this day 97 Consular Corps, Associations, and affiliated members from around the world have joined the Federation, contributing to its mission of promoting international cooperation and fostering diplomatic relations.</p>
             
             <p>FICAC has grown into a powerful force for diplomacy, bringing together diverse nations, cultures, and perspectives; it serves as a bridge between countries, facilitating dialogue on a global scale. It plays a crucial role in coordinating the work of consuls, supporting their efforts in maintaining diplomatic ties, assisting the needs of citizens abroad and promoting cultural exchange. </p>
             
            <p> We welcome the idea of more Associations joining the FICAC family; its impact on shaping global diplomacy and supporting the work of consuls becomes increasingly evident, making it a key player in the pursuit of a more interconnected and peaceful world.
             </p>
             </Col>
        </Row>

    </Container>  
    </Container>
      

  )
}

export default DirectoryContent
