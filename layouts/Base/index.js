// components
import Navbar from '/components/Navbar'

import React from 'react'

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default BaseLayout