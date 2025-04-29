import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

/**
 * Component that tracks page views when route changes
 */
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview with current path
    trackPageView(location.pathname);
  }, [location]);

  // This component doesn't render anything
  return null;
};

export default PageViewTracker; 