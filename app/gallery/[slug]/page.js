import React from 'react'
import Gallery from '../../../utils/gallerys'



function page({params}) {
    
  return (
    <div>
<Gallery slug={params.slug}/>


    </div>
  )
}

export default page
