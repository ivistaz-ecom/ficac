'use client'
// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const RegionCommitteeBanner = () => {
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


  // const background = {
  //   backgroundImage:
  //     "url('/region_banner.png')",
  //   height: "90vh",
  //   fontSize: "50px",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   width: "100%"
  // }

  // return (


  //   <Container fluid className='container-padding'>
  //     <Container fluid style={background} >
  //     </Container>
  //   </Container>

  // )

  const backgroundStyles = {
    height: isMobile ? '208px' : '90vh',
    fontSize: '50px',
    width: '100%',
    backgroundSize: isMobile ? 'cover' : 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: isMobile ? 'center center' : 'initial',
    backgroundImage: isMobile
      ?  "url('/regions_committee_banner.png')"
      :   "url('/regions_committee_banner.png')",
  };

  return (
    <Container fluid className='container-padding'>
      <Container fluid style={backgroundStyles}></Container>
    </Container>
  );
}

export default RegionCommitteeBanner
