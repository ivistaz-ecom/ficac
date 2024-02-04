'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const NewsArchiveList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 18; // Manually set the total number of pages based on your data
  const neighboringPages = 0; // Number of neighboring page numbers to display

  const fetchData = async () => {
    try {
      let result = await fetch(
        `https://beta.ficacworld.org/wp-json/wp/v2/posts?categories=16&_embed&per_page=20&page=${page}`
      );

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
  }, [page]); // Re-fetch data when the page changes

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Container fluid>
        <Container>
          <Col className="mt-lg-5">
            {data.map((post) => (
              <Col key={post.id}>
                <p
                  className='fs-6 pb-0 mb-2'
                  style={{
                    color: '#0A0A0A',
                  }}
                >
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <Link
                  href={`/news-archive/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <p
                    className='fs-5 text-black'
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered.toUpperCase(),
                    }}
                  />
                </Link>
                <hr
                  className=''
                  style={{
                    color: '#001C79',
                    height: '3px',
                    width: '140px',
                    backgroundColor: '#001C79',
                  }}
                />
              </Col>
            ))}
            <Row>
              <Col className='mb-3 mt-5'>
                <p
                  onClick={handlePrevPage}
                  disabled={page === 1}
                  className='p-2 px-3 text-white d-inline-flex border-1 rounded-2'
                  style={{
                    backgroundColor: '#001C79',
                  }}
                >
                  Previous
                </p>
              </Col>
              {[...Array(totalPages).keys()].map((pageNumber) => (
                // Display only a subset of page numbers around the current page
                (pageNumber + 1 >= page - neighboringPages && pageNumber + 1 <= page + neighboringPages) && (
                  <Col key={pageNumber + 1} className='mb-3 mt-5'>
                    <p
                      onClick={() => handlePageChange(pageNumber + 1)}
                      className={`p-2 px-3 text-white d-inline-flex border-1 rounded-2 ${
                        pageNumber + 1 === page ? "style{{backgroundColor: '#001C79'}}" : 'bg-secondary'
                      }`}
                      style={{
                        backgroundColor: '#001C79',
                        cursor: 'pointer',
                      }}
                    >
                      {pageNumber + 1}
                    </p>
                  </Col>
                )
              ))}
              <Col className='mb-3 mt-5'>
                <p
                  onClick={handleNextPage}
                  className='p-2 px-4 text-white d-inline-flex border-1 rounded-2'
                  style={{
                    backgroundColor: '#001C79',
                  }}
                >
                  Next
                </p>
              </Col>
            </Row>
          </Col>
        </Container>
      </Container>
    </>
  );
};

export default NewsArchiveList;