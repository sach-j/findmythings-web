// Extend the Window interface for TypeScript
declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
    }
}

// Initialize analytics (no longer needed since GTM is in the HTML)
export const initializeGA = (measurementId: string) => {
    // No-op as GTM is loaded directly in the HTML
    console.log(`GA initialization bypassed - using GTM with ID related to: ${measurementId}`);
};

// Track page views using GTM
export const trackPageView = (path: string) => {
    if (window.gtag) {
        window.gtag('event', 'page_view', {
            page_path: path
        });
    }
};

// Track custom events using GTM
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    if (window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
    }
}; 