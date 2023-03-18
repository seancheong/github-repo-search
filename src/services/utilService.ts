import {
  differenceInDays,
  differenceInHours,
  differenceInWeeks,
  differenceInYears,
  format,
} from 'date-fns';

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

/**
 * Format date/time to easily understand string
 *
 * @param dateTimeString (string)
 * @returns localizedDateTime
 */
export const formatDateTime = (dateTimeString: string) => {
  try {
    const dateTime = new Date(dateTimeString);

    if (differenceInHours(new Date(), dateTime) === 0) {
      // less than an hour
      return 'recently';
    }

    if (differenceInDays(new Date(), dateTime) === 0) {
      // less than a day
      const hours = differenceInHours(new Date(), dateTime);

      return `${hours} hours ago`;
    }

    if (differenceInWeeks(new Date(), dateTime) === 0) {
      // less than a week
      const days = differenceInDays(new Date(), dateTime);

      return `${days} days ago`;
    }

    if (differenceInYears(new Date(), dateTime) === 0) {
      // less than a year
      return format(dateTime, 'MMM d');
    }

    return format(dateTime, 'MMM d, y');
  } catch {
    return 'N/A';
  }
};
