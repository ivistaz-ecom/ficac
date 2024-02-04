import React from 'react'

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import CentralCommittiees from './CentralCommittiees'
import Banner from '../CommittieesComponents/CentralCommitteesBanner'
import BannerContent from '../../components/CommittieesComponents/CentralCommitteesBannerContent'


import '../StyleComponents'
import CentralCommitteesBanner from '../CommittieesComponents/CentralCommitteesBanner'
import CentralCommitteesBannerContent from '../../components/CommittieesComponents/CentralCommitteesBannerContent'



const index = () => {
  return (
    <>
      <Header />
      <CentralCommitteesBanner />
      <CentralCommitteesBannerContent />
      <CentralCommittiees />
      <Footer />
    </>
  )
}

export default index
