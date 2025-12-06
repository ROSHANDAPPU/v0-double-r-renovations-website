"use client";

import React from 'react';

export const VerticalText = ({ side, isVisible }: { side: string, isVisible: boolean }) => (
  <div style={{
    position: 'fixed',
    [side]: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 1s',
    zIndex: 10,
  }} className="hidden lg:flex items-center justify-center h-full">
    <div className="flex flex-col items-center space-y-2">
      {"RECENT".split("").map((char, index) => (
        <span key={index} className="text-xs font-serif text-gray-400/80">
          {char}
        </span>
      ))}
    </div>
  </div>
);
