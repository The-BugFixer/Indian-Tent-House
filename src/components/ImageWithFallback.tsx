import React, { useState } from 'react';
import { Tent, Sparkles } from 'lucide-react';

/**
 * Props for ImageWithFallback component.
 * Designed to guarantee zero broken / cracked images across all networks and devices.
 */
interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  badgeText?: string;
}

/**
 * ImageWithFallback Component
 * 
 * Provides a resilient multi-tier fallback mechanism:
 * Tier 1: Primary High-Resolution Image URL (curated wedding/tent photography)
 * Tier 2: Local SVG Vector Asset (served directly from /assets/)
 * Tier 3: Styled Inline Royal Pavilion Motif Graphic with Gold Accents
 * 
 * This guarantees that cracked image icons (broken image placeholders) will NEVER appear.
 */
export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  badgeText,
  ...rest
}) => {
  // Current source state to allow tiered downgrade on error
  const [imgSrc, setImgSrc] = useState<string>(src);
  // Track error state if both primary and secondary fail
  const [hasFailedAll, setHasFailedAll] = useState(false);
  // Track loading state for shimmer skeleton
  const [isLoading, setIsLoading] = useState(true);

  // Handle image load error: step down to fallbackSrc, or activate inline graphic
  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      // Step down to Tier 2: Local asset
      setImgSrc(fallbackSrc);
    } else {
      // Step down to Tier 3: Inline rendered royal graphic
      setHasFailedAll(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // If both network and local asset fail, render a royal tent graphic
  if (hasFailedAll) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1C1612] via-[#241C18] to-[#1C1612] border border-amber-500/30 p-6 text-center select-none overflow-hidden ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Subtle decorative background ring */}
        <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-amber-500/10 blur-xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-rose-500/10 blur-xl pointer-events-none" />

        {/* Royal Pavilion Icon Badge */}
        <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-sm mb-3">
          <Tent className="w-7 h-7" />
        </div>

        {/* Descriptive Title */}
        <h4 className="font-serif font-bold text-stone-100 text-sm sm:text-base leading-tight max-w-[90%]">
          {alt || 'Indian Tent House Setup'}
        </h4>

        {/* Brand Tagline */}
        <p className="text-[11px] font-sans text-amber-400 font-semibold tracking-wider uppercase mt-1">
          Indian Tent House • Gorakhpur
        </p>

        {/* Optional Badge */}
        {badgeText && (
          <span className="mt-2.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
            <Sparkles className="w-2.5 h-2.5" />
            {badgeText}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading Shimmer Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-stone-900 animate-pulse flex items-center justify-center">
          <Tent className="w-8 h-8 text-amber-500/40 animate-bounce" />
        </div>
      )}

      {/* Actual Image Element */}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        referrerPolicy="no-referrer"
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        {...rest}
      />
    </div>
  );
};
