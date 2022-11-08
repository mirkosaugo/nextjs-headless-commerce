import Link from 'next/link'
import { useMenu } from '../../store/context/MenuContext'

// components
import Container from '../Container'

import style from './Menu.module.scss'

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Pieces',
    href: '/pieces',
  },
  {
    name: 'Designers',
    href: '/designers',
  },
  {
    name: 'Contacts',
    href: '/contacts',
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useMenu();

  return (
    <>
    {isMenuOpen ? 
      (<div className={style.wrapper}>
        <Container className={style.container}>
          <div className={style.menu}>
            {menuItems.map(item => (
              <Link href={item.href} key={item.name} >
                <a className={style.item} onClick={() => setIsMenuOpen(false)}>{item.name}</a>
              </Link>
            ))}
          </div>
        </Container>
      </div>): null}
    </>
  )
}

export default Navbar