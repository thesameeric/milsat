'use client';

import { useCookieConsent } from '@/hooks/useCookieConsent';

export default function CookieConsent() {
  const { showModal, acceptCookies, declineCookies } = useCookieConsent();

  if (!showModal) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 w-full max-w-sm">
      <div className="bg-black border border-foreground/10 rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Cookie Policy</h3>
        <p className="text-sm text-foreground/70 mb-4">
          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
          By clicking &quot;Accept All&quot;, you consent to our use of cookies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="flex-1 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors px-4 py-2 text-sm font-medium"
          >
            Accept All
          </button>
          <button
            onClick={declineCookies}
            className="flex-1 rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors px-4 py-2 text-sm font-medium"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
