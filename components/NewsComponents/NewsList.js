'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import configData from "../../config.json";
import Image from 'next/image'


const NewsList = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
          let result = await fetch(`${configData.SERVER_URL}posts?categories=1&_embed&per_page=15`);
          if (!result.ok) {
            throw new Error(`HTTP error! Status: ${result.status}`);
          }
          result = await result.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      };
      

    useEffect(() => {
        fetchData();
    })

  return (
    <>
    <Container className='mt-5'>
      <Row className='' >
        {data.map((post) => (
          <Col lg={4} className='mt-4'>
<div class="card text-center" >
<Image src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} width={200} height={100} className='w-100 h-100'/>
  <div class="card-body">
                <h5 class="card-title text-start txt-blue fs-4 fw-400" dangerouslySetInnerHTML={{ __html: post.title.rendered }} style={{minHeight:'120px'}} />
    <p class="card-text text-start fs-5 fw-300" dangerouslySetInnerHTML={{ __html: post.acf.excerpt }}/>
    <Link href={`/news/${post.slug}`} target='_blank' className='btn btn-primary wbg-blue border-0'>Read more</Link>
  </div>
</div>
          </Col>
          
          
        ))}

      </Row>
    </Container>
    <Container className='mt-5'>
    <Row>
   <Col className='d-flex justify-content-center mb-4  d-inline-flex gap-1'   >
                <Link href="/news-archive"
                style={{
                  textDecoration:"none",
                  color:"white",
                  
                }}>
                <p className='p-2 d-inline-flex rounded-2 '
                style={{backgroundColor:"#001C79",
          }}
                >
                  News Archive 
                
            
                <i class="bi bi-arrow-right mx-1"></i>
                </p>
                </Link>
                </Col>
   </Row>
    </Container>
    </>
    
  )
}

export default NewsList
