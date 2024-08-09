'use client'
import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-03C56XLC85`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date() as any);
      gtag('config', 'G-03C56XLC85');
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
