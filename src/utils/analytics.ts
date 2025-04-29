// Extend the Window interface for TypeScript
declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
        gaEnabled?: boolean;
    }
}

// Initialize analytics (no longer needed since GTM is in the HTML)
export const initializeGA = (measurementId: string) => {
    // No-op as GTM is loaded directly in the HTML
    console.log(`GA initialization bypassed - using GTM with ID related to: ${measurementId}`);
};

// Track page views using GTM - only if user has given consent
export const trackPageView = (path: string) => {
    // Only track if consent is given
    if (window.gtag && window.gaEnabled !== false) {
        window.gtag('event', 'page_view', {
            page_path: path
        });
    }
};

// Track custom events using GTM - only if user has given consent
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    // Special case: always track cookie consent events
    const isCookieConsentEvent = category === 'Cookie Consent';

    // Only track if consent is given or it's a consent event itself
    if (window.gtag && (window.gaEnabled !== false || isCookieConsentEvent)) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
    }
}; 