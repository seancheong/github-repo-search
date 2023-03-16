/**
 * Higher order function of throttling
 * It's accepting a function as the first parameter,
 * and it will limit the number of times of that function
 * is called during an interval
 *
 * @param fn (function)
 * @param interval (milliseconds)
 * @returns generic return type of the passed in function
 */
export const throttle = <T, K extends unknown[]>(
  fn: (...args: K) => T,
  interval = 500
) => {
  let shouldWait = false;
  let waitingArgs: K | null = null;
  const timeoutCallback = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      fn(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutCallback, interval);
    }
  };

  return (...args: K) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    fn(...args);
    shouldWait = true;

    setTimeout(timeoutCallback, interval);
  };
};
