import { useEffect, useRef } from 'react';

const smoothScroll = (
  element: HTMLElement,
  target: number,
  duration: number,
) => {
  const roundDuration = Math.round(duration);
  if (roundDuration < 0) return Promise.reject('bad duration');

  let startTop = element.scrollTop;
  let deltaY = target - startTop;

  let startTime = Date.now();

  const again = () => {
    let now = (Date.now() - startTime) / roundDuration;
    if (now > 1) now = 1;
    let easedValue = 0.5 * (1 - Math.cos(Math.PI * now));
    let topVal = startTop + deltaY * easedValue;
    element.scrollTop = topVal;

    if (now < 1) requestAnimationFrame(again);
  };

  requestAnimationFrame(again);
};

export const useScrollToBottom = (options?: { duration?: number }) => {
  const domRef = useRef<HTMLElement | null>(null);

  const scrollToBottom = () => {
    if (domRef.current !== null) {
      const scrollHeight = domRef.current.scrollHeight;
      smoothScroll(domRef.current, scrollHeight, options?.duration ?? 500);
    }
  };

  useEffect(scrollToBottom, [domRef]);

  return {
    domRef,
    scrollToBottom,
  };
};
