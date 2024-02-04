import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import FrontCommitteeBanner from './FrontCommitteeBanner'
import FrontCommitteeContent from './FrontCommitteeContent'


const index = () => {
  return (
    <>
    <Header />
    
    <FrontCommitteeBanner />
    <FrontCommitteeContent />
    <Footer />
    </>
  )
}

export default index
