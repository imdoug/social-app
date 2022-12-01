import React from 'react'
import { PageHOC } from '../components'

const Home = () => {
  return (
    <>
      <div>
        <img src={'https://www.trainingjournal.com/system/files/styles/original_-_local_copy/private/AdobeStock_482659218-%5BConverted%5D-01WEB.jpg?itok=DQ9kAe9q'} alt="hero" style={{width: '100%', height: 'auto'}} />
      </div>
    </>
  )
}

export default PageHOC(
  Home,
)