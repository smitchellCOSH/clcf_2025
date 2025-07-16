/* 

This component ensures that when the user loads a new page, 
the application positions the user at the top of the new page 
rather than the bottom. No styling required for this
component - purely functional.

*/

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AutoTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default AutoTop;
