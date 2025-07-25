/**
 * Simple funnel analytics tracking
 * Track user progression through the lead magnet funnel
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type FunnelEvent = 
  | 'funnel_visit'
  | 'lead_form_start'  
  | 'lead_form_submit'
  | 'thank_you_view'
  | 'tripwire_view'
  | 'tripwire_click'
  | 'main_offer_view'
  | 'main_offer_click';

interface FunnelEventData {
  event: FunnelEvent;
  step: string;
  timestamp: number;
  userAgent: string;
  referrer: string;
  sessionId: string;
}

// Generate simple session ID
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Get or create session ID
const getSessionId = (): string => {
  if (typeof window === 'undefined') return 'server';
  
  let sessionId = sessionStorage.getItem('funnel_session_id');
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem('funnel_session_id', sessionId);
  }
  return sessionId;
};

// Track funnel event
export const trackFunnelEvent = (event: FunnelEvent, step: string, additionalData?: Record<string, string | number | boolean>) => {
  if (typeof window === 'undefined') return;

  const eventData: FunnelEventData = {
    event,
    step,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    sessionId: getSessionId(),
    ...additionalData
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('🔍 Funnel Event:', eventData);
  }

  // Store in localStorage for now (in production you'd send to analytics service)
  try {
    const existingEvents = JSON.parse(localStorage.getItem('funnel_events') || '[]');
    existingEvents.push(eventData);
    
    // Keep only last 100 events per session
    const filteredEvents = existingEvents.slice(-100);
    localStorage.setItem('funnel_events', JSON.stringify(filteredEvents));

    // Send to Google Analytics or other service if configured
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, {
        event_category: 'Funnel',
        event_label: step,
        custom_map: { custom1: getSessionId() }
      });
    }
  } catch (error) {
    console.warn('Failed to track funnel event:', error);
  }
};

// Get funnel conversion rates for current session
export const getFunnelStats = () => {
  if (typeof window === 'undefined') return null;

  try {
    const events = JSON.parse(localStorage.getItem('funnel_events') || '[]');
    const currentSession = getSessionId();
    const sessionEvents = events.filter((e: FunnelEventData) => e.sessionId === currentSession);

    return {
      totalEvents: sessionEvents.length,
      events: sessionEvents,
      conversions: {
        visited: sessionEvents.some((e: FunnelEventData) => e.event === 'funnel_visit'),
        startedForm: sessionEvents.some((e: FunnelEventData) => e.event === 'lead_form_start'),
        submittedLead: sessionEvents.some((e: FunnelEventData) => e.event === 'lead_form_submit'),
        viewedTripwire: sessionEvents.some((e: FunnelEventData) => e.event === 'tripwire_view'),
        clickedTripwire: sessionEvents.some((e: FunnelEventData) => e.event === 'tripwire_click'),
      }
    };
  } catch (error) {
    console.warn('Failed to get funnel stats:', error);
    return null;
  }
};

// Hook for React components
export const useFunnelTracking = () => {
  return {
    track: trackFunnelEvent,
    getStats: getFunnelStats,
    sessionId: getSessionId()
  };
};
