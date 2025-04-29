import { trackEvent } from '../utils/analytics';

const EventTrackingExample = () => {
  const handleButtonClick = () => {
    // Track this button click in GA4
    trackEvent('User Interaction', 'Button Click', 'CTA Button', 1);
    
    // Your actual button click logic here
    // ...
  };

  return (
    <button 
      onClick={handleButtonClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      Click Me
    </button>
  );
};

export default EventTrackingExample; 