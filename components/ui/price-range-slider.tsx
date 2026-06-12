"use client";

import { useCallback } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const PriceRangeSlider = ({ min, max, value, onChange }: PriceRangeSliderProps) => {
  const [low, high] = value;

  const handleLow = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = Math.min(Number(e.target.value), high - 1);
      onChange([v, high]);
    },
    [high, onChange]
  );

  const handleHigh = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = Math.max(Number(e.target.value), low + 1);
      onChange([low, v]);
    },
    [low, onChange]
  );

  const lowPct = ((low - min) / (max - min)) * 100;
  const highPct = ((high - min) / (max - min)) * 100;

  return (
    <div className="w-full">
      {/* Track */}
      <div className="relative h-1.5 w-full rounded-full bg-gray-200">
        <div
          className="bg-primary absolute h-full rounded-full"
          style={{ left: `${lowPct}%`, width: `${highPct - lowPct}%` }}
        />
        {/* Low handle */}
        <input
          type="range"
          min={min}
          max={max}
          value={low}
          onChange={handleLow}
          className="pointer-events-none absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow"
        />
        {/* High handle */}
        <input
          type="range"
          min={min}
          max={max}
          value={high}
          onChange={handleHigh}
          className="pointer-events-none absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow"
        />
      </div>

      <p className="text-muted-foreground mt-2 text-xs">
        Price ${low} — ${high}
      </p>
    </div>
  );
};

export default PriceRangeSlider;
