import Link from 'next/link'
import { useMenu } from '../../store/context/MenuContext'

// components
import Container from '../Container'

import style from './Navbar.module.scss'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useMenu();

  return (
    <nav className={style.wrapper}>
      <Container>
        <Link href="/">
          <a className={style.logo}>E-Sanity</a>
        </Link>
        <button onClick={() => setIsMenuOpen(prevState => !prevState)} className={style.menu}>
          { isMenuOpen ? 'Close' : 'Menu' }
        </button>
        <button className={style.cart}>Cart</button>
      </Container>
    </nav>
  )
}

export default Navbar