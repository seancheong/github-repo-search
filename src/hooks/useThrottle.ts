import { useEffect, useState } from 'react';

/**
 * Custom hook of throttle implementation
 * It's accepting a value as the first parameter,
 * and it will limit the number of times of that value
 * is returned during an interval
 *
 * @param value (any)
 * @param interval (milliseconds, default to 500ms)
 * @returns value
 */
const useThrottle = <T>(value: T, interval = 500) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const [lastValue, setLastValue] = useState(value);
  const [lastExecutedTime, setLastExecutedTime] = useState(Date.now());

  useEffect(() => {
    if (value !== lastValue) {
      const now = Date.now();
      const timeElapsedSinceLastExecution = now - lastExecutedTime;

      if (timeElapsedSinceLastExecution >= interval) {
        setThrottledValue(value);
        setLastExecutedTime(now);
      } else {
        const timeoutId = setTimeout(() => {
          setThrottledValue(value);
          setLastExecutedTime(Date.now());
        }, interval - timeElapsedSinceLastExecution);

        return () => {
          clearTimeout(timeoutId);
        };
      }

      setLastValue(value);
    }
  }, [value, interval, lastValue, lastExecutedTime]);

  return throttledValue;
};

export default useThrottle;
