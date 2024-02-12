'use client'
import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import Footer from '../../../components/Shared/Footer'
import configData from "../../../config.json";

const Posts = ({ slug }) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${configData.SERVER_URL}posts?slug=${slug}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
        // console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [slug]);


  if (!data || !Array.isArray(data)) {
    return <p>Please wait..</p>;
  }
  return (
    <div>
      {/* {slug} */}
      {/* <Header /> */}
      <Container
        className='d-flex flex-row justify-content-center'
      >
        {data.map((post) => (
          <div key={post.id}
            className='px-lg-3 col-lg-12 position-relative'>
            <div className='pt-5'>
                <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} className='fs-1 txt-dark'/>
            </div>
            <div>
              <hr/>
            </div>

            <div
              className='py-4 fs-5 fw-300'
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            <div className='py-4'>
              <Link href="/news" className='btn wbg-blue py-2 px-3 m-2 text-white btn-primary border-0'>Go Back</Link>
            </div>
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  )
}

export default Posts

