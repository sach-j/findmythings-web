import { useEffect } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { trackEvent } from '../utils/analytics';

// Track if analytics is enabled
declare global {
  interface Window {
    gaEnabled?: boolean;
  }
}

const CookieConsentBanner = () => {
  // Check if consent was previously given
  useEffect(() => {
    const consentValue = Cookies.get('userAnalyticsConsent');
    if (consentValue === 'true') {
      window.gaEnabled = true;
    } else if (consentValue === 'false') {
      window.gaEnabled = false;
    } else {
      window.gaEnabled = false; // Default to no tracking
    }
  }, []);

  // Handle accepting cookies
  const handleAccept = () => {
    window.gaEnabled = true;
    Cookies.set('userAnalyticsConsent', 'true', { expires: 365 });
    trackEvent('Cookie Consent', 'Accepted');
  };

  // Handle declining cookies
  const handleDecline = () => {
    window.gaEnabled = false;
    Cookies.set('userAnalyticsConsent', 'false', { expires: 365 });
    // Disable GA tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'cookie_consent_update',
        'analytics_storage': 'denied'
      });
    }
  };

  return (
    <CookieConsent
      enableDeclineButton
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      onAccept={handleAccept}
      onDecline={handleDecline}
      style={{ background: "#2B373B" }}
      buttonStyle={{ 
        color: "#4e503b", 
        fontSize: "13px", 
        backgroundColor: "white", 
        borderRadius: "3px", 
        padding: "5px 15px" 
      }}
      declineButtonStyle={{
        color: "#4e503b", 
        fontSize: "13px", 
        backgroundColor: "#f8f9fa", 
        borderRadius: "3px", 
        padding: "5px 15px"
      }}
      expires={365}
      cookieName="userAnalyticsConsent"
    >
      This website uses cookies to enhance user experience and to analyze site traffic.
      {" "}
      <span style={{ fontSize: "12px" }}>
        <a 
          href="/privacy" 
          style={{ color: "lightblue" }}
        >
          Learn more about our Privacy Policy
        </a>
      </span>
    </CookieConsent>
  );
};

export default CookieConsentBanner; 