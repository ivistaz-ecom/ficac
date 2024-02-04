'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap';

const EventGalleryLists = () => {
    const [data, setData] = useState([]);

    const Acf_URL = 'https://beta.ficacworld.org/wp-json/wp/v2/events_gallery?_embed';

    const fetchPosts = async () => {
        try {
            const result = await fetch(Acf_URL);

            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }

            const postsData = await result.json();
            // console.log('API Response:', postsData);

            if (typeof postsData === 'object') {
                setData(postsData);
            }
        } catch (error) {
            console.error('Error fetching posts', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <Container className='py-3'>
            <Row className='px-3 border-black m-lg-4 gap-lg-5 gap-5 m-2' >
                {data.map((item) => (
                    <div key={item.id}
                        className='d-flex flex-lg-row flex-column justify-content-lg-between gap-lg-5 shadow-lg p-4'
                        style={{backgroundColor:"#fff"}}
                    >
                        <Col className='d-flex flex-column'>
                       <h3 dangerouslySetInnerHTML={{ __html: item.title.rendered}}></h3>

                            <p>{item.acf.date}</p>
                        </Col>
                        <Col className='d-flex flex-column flex-wrap align-content-center justify-content-center' md={3} >
                            {/* <Link href={`/gallery/${item.slug}`}></Link> */}
                            <Link className='text-decoration-none rounded-2 py-2 px-3 px-lg-5 d-inline-block text-white'
                                style={{ backgroundColor: "#001C79", fontSize: "18px" }}
                                href={`/gallery/${item.slug}`}>
                                View Photos
                            </Link>
                        </Col>
                    </div>
                ))}

            </Row>
        </Container>


    )
}

export default EventGalleryLists
