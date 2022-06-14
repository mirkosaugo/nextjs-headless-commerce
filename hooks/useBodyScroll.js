import { useEffect } from 'react';
// context
import { useMenu } from '../store/context/MenuContext'

const useBodyScroll = () => {
  const [isMenuOpen] = useMenu();

  useEffect(() => {
    if(isMenuOpen) {
      document.body.classList.add('_oh');
    } else {
      document.body.classList.remove('_oh');
    }
  }, [isMenuOpen]);
  
  return null;
}

export default useBodyScroll