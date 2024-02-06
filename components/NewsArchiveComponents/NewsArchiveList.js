'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import configData from "../../config.json";

const NewsArchiveList = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const postsPerPage = 15;

  const fetchData = async (page) => {
    try {
      let result = await fetch(`${configData.SERVER_URL}posts?categories=16&_embed&page=${page}&per_page=${postsPerPage}`);

      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      const totalPagesHeader = result.headers.get('X-WP-TotalPages');
      setTotalPages(parseInt(totalPagesHeader, 10) || 1);

      result = await result.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchData(newPage);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);


  return (
    <>
      <Container fluid>
        <Container>
          <Col className="mt-lg-5">
            {data.map((post, index) => (
              <div key={index}>
                <div className='news-hover p-3'>
                  <p
                    className='fs-5 fw-300'
                  >
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <Link
                    href={`/news-archive/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    className='text-decoration-none text-black'
                  >
                    <p
                      className='fs-5'
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered.toUpperCase(),
                      }}
                    />
                  </Link>

                  <hr
                    className=''
                    style={{
                      height: '3px',
                      width: '15%',
                      backgroundColor: '#2680EB',
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Pagination Section */}
            <div className="text-center my-4 d-flex flex-row justify-content-center">
              {currentPage > 1 && (
                <i class="bi bi-arrow-left-circle-fill fs-2"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                </i>
              )}

              <div className='d-flex flex-column justify-content-center'>
                <p className="mx-4 mb-0">
                  Page {currentPage} of {totalPages}
                </p>
              </div>
              {currentPage < totalPages && (
                <i class="bi bi-arrow-right-circle-fill fs-2"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                </i>
              )}
            </div>
          </Col>
        </Container>
      </Container>
    </>
  );
};

export default NewsArchiveList;