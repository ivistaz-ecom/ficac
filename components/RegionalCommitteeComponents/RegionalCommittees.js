'use client'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';


import '../../app/globals.css'

const RegionalCommittees = () => {
    const [posts, setPosts] = useState([]);


    const loopBg = {
        background: '#001C79'
    }

    const fetchPosts = async () => {
        try {
            // Replace 'your_acf_category_field' with the actual name of your ACF category field            const result = await fetch('https://beta.ficacworld.org//wp-json/wp/v2/committiee?categories=8&per_page=100');
            const result = await fetch('https://beta.ficacworld.org//wp-json/wp/v2/committiee?categories=8&per_page=100&_embed');

            // const result = await fetch('https://beta.ficacworld.org//wp-json/wp/v2/committiee?categories=7?_embed');
            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }
            const postsData = await result.json();
            setPosts(postsData);
            // console.log(postsData);
        } catch (error) {
            console.error('Error fetching posts', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <Container className=''>
            {/* <Row>
      <Col>
      <ul>
              {posts.map((post) => (
                  <li key={post.id}>{post.title.rendered}</li>
                  // Adjust the property based on your post data structure
              ))}
          </ul> 
      </Col>
      <Col></Col>
    </Row> */}

            <Container>
                <Col className='d-flex flex-column gap-4 my-5 mt-5'>

                    {posts.map((post) => (
                        <Row
                            key={post.id}
                            style={loopBg}
                            className='ms-lg-5 py-0 px-4 px-lg-0 py-lg-4 d-flex flex-lg-row flex-column custom-mobile-post'
                        >
                            <Col
                                className="ms-5 custom-commite-loop-post p-0 d-flex flex-row align-items-center py-lg-3"
                                lg={4}
                            >
                                <Image
                                    src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                                    alt={post.title.rendered}
                                    fluid
                                    width="100%"
                                />
                            </Col>

                            <Col className='p-0 px-0 px-lg-3 d-flex flex-column flex-wrap justify-content-center'>
                                <div className='d-flex flex-column justify-content-center'>
                                    <p
                                        className='text-white fs-5'
                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                    />
                                </div>

                                    <p
                                        className='text-white mb-0'
                                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                                    />
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Container>

        </Container>










    );
}

export default RegionalCommittees




