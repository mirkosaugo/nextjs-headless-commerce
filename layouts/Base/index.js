// components
import Navbar from '/components/Navbar'
import Menu from '/components/Menu'
// hooks
import useToogleScroll from '../../hooks/useToogleScroll';

const BaseLayout = ({ children }) => {
  useToogleScroll();
  
  return (
    <>
      <Navbar />
      <Menu />
      <main>{children}</main>
    </>
  )
}

export default BaseLayout