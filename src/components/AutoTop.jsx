/* 

AutoTop. This component ensures that new pages load at the top
of the page rather than the bottom. No styling required for this
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
