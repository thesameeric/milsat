'use client';

import { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'cookie-consent';

export type CookieConsentStatus = 'accepted' | 'declined' | null;

export function useCookieConsent() {
  const [consentStatus, setConsentStatus] = useState<CookieConsentStatus>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === 'accepted' || stored === 'declined') {
      setConsentStatus(stored as CookieConsentStatus);
    } else {
      setShowModal(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setConsentStatus('accepted');
    setShowModal(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setConsentStatus('declined');
    setShowModal(false);
  };

  const resetConsent = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    setConsentStatus(null);
    setShowModal(true);
  };

  return {
    consentStatus,
    showModal,
    acceptCookies,
    declineCookies,
    resetConsent,
  };
}
