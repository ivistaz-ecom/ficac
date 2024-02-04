'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import HomeConcludedEvents from './HomeConcludedEvents';
import configData from "../../config.json";

const HomeUpcomingEvents = () => {
  const [isData, setIsData] = useState([]);

  const fetchData = async () => {
    try {
      // let result = await fetch(`https://ficac.ivistaz.co/wp-json/wp/v2/directors?_embed&per_page=100`);
      let result = await fetch(`${configData.SERVER_URL}posts?categories=14&_embed`);
      result = await result.json();
      setIsData(result);
      // console.log(result);
    } catch {
      // console.log("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };



  return (
    <Container fluid  className='wbg-light p-4'>
      <Container>
        
        <Row>
          <Col lg={4}>
          <h3 className="fs-1 txt-dark text-center py-5">Upcoming Events </h3>
          <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={false}
              autoPlaySpeed={1500}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              showArrows={false}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {isData.map((post) => (
                
                <div
                  key={post.id}
                >
                  <div class="card border-0">
                <Image
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    
                    width={300}
                    height={300}
                    className="w-100 h-auto card-img-top"
                  />
  <div class="card-body text-center mb-5 pb-5">
  {/* <h5 class="card-title txt-dark fw-400 text-start mh-104" dangerouslySetInnerHTML={{ __html: post.title.rendered }}/> */}
    <p class="card-text fs-5 fw-300 my-5 p-2 pb-3" >FICAC, the World Federation of Consuls had its 1st Latin America Conference in San Pedro Sula, Honduras, from August 31st, 2023- September 3rd 2023, which was organized by the Association Consular Corps of San Pedro Sula.</p>          
    {/* <Link href={post.acf.url} class="btn btn-primary p-3">Read more</Link> */}
  </div>
</div>
                </div>
              ))}

            </Carousel>
          </Col>
          <HomeConcludedEvents />
       </Row>

      </Container>

    </Container>
  )
}

export default HomeUpcomingEvents
