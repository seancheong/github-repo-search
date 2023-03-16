import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook of throttle implementation
 * It's accepting a value as the first parameter,
 * and it will limit the number of times of that function
 * is returned during an interval
 *
 * @param value (any)
 * @param interval (milliseconds)
 * @returns value
 */
const useThrottle = <T>(value: T, interval = 500) => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const isThrottling = useRef(false);

  useEffect(() => {
    if (!isThrottling.current) {
      setThrottledValue(value);
      isThrottling.current = true;

      setTimeout(() => {
        if (isThrottling.current) {
          isThrottling.current = false;
        }
      }, interval);
    }
  }, [value, interval]);

  return throttledValue;
};

export default useThrottle;
