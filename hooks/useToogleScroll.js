import { useEffect } from 'react';
// context
import { useMenu } from '../store/context/MenuContext'

const useToogleScroll = () => {
  const [isMenuOpen] = useMenu();

  useEffect(() => {
    if(isMenuOpen) {
      document.documentElement.classList.add('_oh');
    } else {
      document.documentElement.classList.remove('_oh');
    }
  }, [isMenuOpen]);
  
  return null;
}

export default useToogleScroll