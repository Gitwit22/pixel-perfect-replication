import React, { useEffect } from "react";

interface GoogleAdProps {
  slot: string;
  className?: string;
}

export const GoogleAd: React.FC<GoogleAdProps> = ({ slot, className }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Don't run AdSense in development to avoid noisy errors/warnings
    if (import.meta.env.DEV) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Optional: swallow failures if the AdSense script isn't ready yet
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className ?? ""}`.trim()}
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-3616047462674603"
      data-ad-slot={slot}
    ></ins>
  );
};
