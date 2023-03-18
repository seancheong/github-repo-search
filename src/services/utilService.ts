import {
  differenceInDays,
  differenceInHours,
  differenceInWeeks,
  differenceInYears,
  format,
} from 'date-fns';

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
