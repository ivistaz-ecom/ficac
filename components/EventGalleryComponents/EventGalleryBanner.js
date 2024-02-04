'use client'
// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomeBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };


  useEffect(() => {
    // Check if window is defined before accessing it
    if (typeof window !== 'undefined') {
      // Initial check on component mount
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);


  return (
    <>
    <Container fluid className='px-5 '>
      <Container fluid style={{ backgroundImage: 'url(/events_banner.png)', height: '750px', backgroundSize: 'cover' }}>
      </Container>
    </Container>
      </>
  );
};

export default HomeBanner;
