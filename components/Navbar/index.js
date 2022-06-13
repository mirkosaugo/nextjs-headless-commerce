import React from 'react'
import Link from 'next/link'
// components
import Container from '../Container'

import style from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={style.wrapper}>
      <Container>
        <Link href="/">
          <a className={style.logo}>E-Sanity</a>
        </Link>
        <button onClick={() => alert('dio porco')} className={style.menu}>Menu</button>
        <button className={style.cart}>Cart</button>
      </Container>
    </nav>
  )
}

export default Navbar