'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import configData from "../../config.json";
import Image from 'next/image'

const HomeLatestHighlights = () => {
  const [isData, setIsData] = useState([]);

  const fetchPosts = async () => {
    try {
      const result = await fetch(`${configData.SERVER_URL}posts?categories=12&per_page=100&_embed`);
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      const postsData = await result.json();
      setIsData(postsData);  // Corrected this line
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
      <Container className=' pb-5 p-0'>
          <h3 className="fs-1 txt-dark text-center py-5">Latest Highlights</h3>
          <Container>
          {isData.map((post) => (
<Row className='g-0'>
<Col className='' lg={6}>
<Image src={post._embedded['wp:featuredmedia'][0].source_url}
          alt={post.title.rendered}
          height={400}
          width={550}
          className="position-absolute  h-auto"
        />
</Col>
<Col className='wbg-dark text-white p-5 mt-5' lg={6}>
<h3 className='fs-1 fw-300' dangerouslySetInnerHTML={{ __html: post.title.rendered }}/>
<p className='fs-5 fw-300' dangerouslySetInnerHTML={{__html:post.acf.excerpt}}/>
</Col>
              </Row>              

))}
</Container>
</Container>
  );
};

export default HomeLatestHighlights;
