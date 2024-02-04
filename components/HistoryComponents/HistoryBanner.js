'use client'
// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

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

  const backgroundStyles = {
    height: isMobile ? '258px' : '75vh',
    fontSize: '50px',
    width: '100%',
    backgroundSize: isMobile ? 'cover' : 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: isMobile ? 'center center' : 'initial',
    backgroundImage: isMobile
      ? "url('/board_of_directors.jpg')"
      : "url('/board_of_directors.jpg')",
  };



  return (
    <Container fluid className='px-lg-5 p-0'>
      <Container fluid style={{ backgroundImage: 'url(/history_banner.png)', height: '750px', backgroundSize: 'cover' }} className='d-lg-flex d-none'>
      </Container>

      <Container fluid style={backgroundStyles} className='d-lg-none d-flex'>

      </Container>

    </Container>
  );
};

export default HomeBanner;
