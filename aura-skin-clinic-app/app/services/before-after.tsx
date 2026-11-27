"use client";

import { useState } from "react";

type BeforeAfterProps = {
  assetPrefix: string;
  treatmentName: string;
  beforeAlt: string;
  afterAlt: string;
  compare?: boolean;
};

export default function BeforeAfter({ assetPrefix, treatmentName, beforeAlt, afterAlt, compare = true }: BeforeAfterProps) {
  const [position, setPosition] = useState(50);

  return (
    <figure className="treatment-comparison">
      <div className="comparison-stage">
        {/* AI-generated illustrations, not actual patient treatment results. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/services/${assetPrefix}-before-generated.webp`} alt={beforeAlt} loading="lazy" />
        {compare && (
          <>
            <div className="comparison-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/services/${assetPrefix}-after-generated.webp`} alt={afterAlt} loading="lazy" />
            </div>
            <span className="comparison-label comparison-label-before">Before</span>
            <span className="comparison-label comparison-label-after">After</span>
            <span className="comparison-divider" style={{ left: `${position}%` }} aria-hidden="true"><span>↔</span></span>
            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={event => setPosition(Number(event.target.value))}
              aria-label={`Compare before and after ${treatmentName.toLowerCase()} illustrations`}
              aria-valuetext={`${position}% before, ${100 - position}% after`}
            />
          </>
        )}
      </div>
      <figcaption className="comparison-disclosure">AI-generated illustration</figcaption>
    </figure>
  );
}
