"use client";

import { useCallback } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const thumbCls =
  "pointer-events-none absolute inset-0 h-full w-full appearance-none bg-transparent " +
  "[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 " +
  "[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none " +
  "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary " +
  "[&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:cursor-pointer";

const PriceRangeSlider = ({ min, max, value, onChange }: PriceRangeSliderProps) => {
  const [low, high] = value;

  const handleLow = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = Math.min(Number(e.target.value), high - 0.5);
      onChange([Math.round(v * 10) / 10, high]);
    },
    [high, onChange]
  );

  const handleHigh = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = Math.max(Number(e.target.value), low + 0.5);
      onChange([low, Math.round(v * 10) / 10]);
    },
    [low, onChange]
  );

  const lowPct = ((low - min) / (max - min)) * 100;
  const highPct = ((high - min) / (max - min)) * 100;

  return (
    <div className="w-full">
      <div className="relative h-1.5 w-full rounded-full bg-gray-200">
        <div
          className="bg-primary absolute h-full rounded-full"
          style={{ left: `${lowPct}%`, width: `${highPct - lowPct}%` }}
        />
        {/* Low thumb — raised z-index when near max so it stays reachable */}
        <input
          type="range"
          min={min}
          max={max}
          step="0.5"
          value={low}
          onChange={handleLow}
          style={{ zIndex: low >= high - 0.5 ? 5 : 3 }}
          className={thumbCls}
        />
        {/* High thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step="0.5"
          value={high}
          onChange={handleHigh}
          style={{ zIndex: 4 }}
          className={thumbCls}
        />
      </div>

      <p className="text-muted-foreground mt-2 text-xs">
        Price ${low.toFixed(2)} — ${high.toFixed(2)}
      </p>
    </div>
  );
};

export default PriceRangeSlider;
