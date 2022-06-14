// components
import Navbar from '/components/Navbar'
// hooks
import useBodyScroll from '../../hooks/useBodyScroll';

const BaseLayout = ({ children }) => {
  useBodyScroll();
  
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default BaseLayout