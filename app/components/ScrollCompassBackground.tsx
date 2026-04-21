'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ScrollCompassBackground() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const updateRotation = () => {
      setRotation(window.scrollY * 0.08);
      animationFrame = 0;
    };

    const onScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateRotation);
      }
    };

    updateRotation();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-y-0 right-0 z-0 hidden items-center justify-end xl:flex">
      <div
        className="relative mr-[-9rem] h-[40rem] w-[40rem] opacity-30"
        style={{ transform: `rotate(${-rotation}deg)` }}
      >
        <Image
          src="/images/logo.png"
          alt=""
          fill
          sizes="640px"
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}