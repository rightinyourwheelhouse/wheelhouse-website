import throttle from 'lodash.throttle';
import { useState, useEffect, useRef } from 'react';

const SCROLL_DIRECTION = {
  DOWN: 'down',
  NONE: 'none',
  UP: 'up',
};

const DEFAULT_VALUE = {
  isScrolling: false,
  scrollDirection: SCROLL_DIRECTION.NONE,
};

export function useScrolling(offset = 0) {
  const [value, setValue] = useState(DEFAULT_VALUE);

  const lastEventRef = useRef();
  const scrollTimerRef = useRef();

  function resetValues() {
    setValue(currentValue => ({ ...currentValue, ...DEFAULT_VALUE }));
  }

  function clearTimer() {
    if (scrollTimerRef.current) {
      window.clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = undefined;
    }
  }

  function onTimerEnded() {
    clearTimer();
    setValue(currentValue => ({ ...currentValue, ...DEFAULT_VALUE }));
  }

  function resetTimer() {
    clearTimer();
    scrollTimerRef.current = window.setTimeout(onTimerEnded, 250);
  }

  function listener() {
    const { scrollY } = window;

    if (lastEventRef.current) {
      const lastEvent = lastEventRef.current;
      const nextIsScrolling = scrollY !== lastEvent.scrollY;

      let nextScrollDirection = SCROLL_DIRECTION.NONE;

      if (nextIsScrolling) {
        nextScrollDirection =
          scrollY < lastEvent.scrollY
            ? SCROLL_DIRECTION.UP
            : SCROLL_DIRECTION.DOWN;
      }

      setValue({
        isScrolled: scrollY > offset,
        isScrolling: nextIsScrolling,
        scrollDirection: nextScrollDirection,
        scrollPosition: scrollY,
      });

      if (nextIsScrolling) {
        resetTimer();
      } else {
        resetValues();
      }
    }

    lastEventRef.current = { scrollY };
  }

  const throttledListener = throttle(listener, 75);

  function listen() {
    function unsubscribe() {
      window.removeEventListener('scroll', throttledListener);
      clearTimer();
    }
    window.addEventListener('scroll', throttledListener);

    return unsubscribe;
  }

  useEffect(listen, [throttledListener]);

  return [value, SCROLL_DIRECTION];
}
