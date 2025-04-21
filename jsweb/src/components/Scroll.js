import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Scroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop - 80, //navbar GAP
            behavior: 'smooth',
          });
        }, 100); // little delay - ensures the DOM is fully loaded before scrolling
      }
    }
  }, [location]); // Runs when location changes

  return null; //no rendering
}

export default Scroll;
