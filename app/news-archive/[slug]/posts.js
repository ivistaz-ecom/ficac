'use client'
import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import Footer from '../../../components/Shared/Footer'

const Posts = ({ slug }) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://beta.ficacworld.org/wp-json/wp/v2/posts?slug=${slug}`);
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
            className='px-lg-3 shadow-sm col-lg-12 position-relative'
          >
            <div className='pt-5'>
              <div
                style={{ fontSize: "25px", fontWeight: "bold", color: "#741B1B" }}
              >
                <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                >
                </h1>
              </div>
            </div>
            <div>
              <hr></hr>
            </div>

            <div
              className='py-4'
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            <div className='py-4'>
              <Link href="/news-archive">
                <Button
                  className='rounded-2 py-2 px-3 px-lg-2 d-inline-block text-white'
                  style={{ backgroundColor: "#001C79" }}
                >
                  Go Back
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  )
}

export default Posts

