import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import DocumentsBanner from './DocumentsBanner'
import DocumantsBannerContent from './DocumantsBannerContent'
import DocumentsList from './DocumentsList'

import '../StyleComponents'

const index = () => {
  return (
    <>
    <Header />
    <DocumentsBanner />
    <DocumantsBannerContent />
    <DocumentsList />
    <Footer />
      
    </>
  )
}

export default index
