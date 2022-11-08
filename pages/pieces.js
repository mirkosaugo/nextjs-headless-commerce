import Head from 'next/head'
import { useContext } from 'react'

import { useMenu } from '../store/context/MenuContext'

// layout
import BaseLayout from '/layouts/Base'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useMenu();

  return (
    <>
      <Head>
        <title>E-Sanity</title>
        <meta name="description" content="Ecommerce demo with Sanity and Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <BaseLayout>
        <br />
        <h1>PIECES</h1>
      </BaseLayout>

    </>
  )
}
