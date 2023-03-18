import { formatDateTime } from './utilService';

describe('util service', () => {
  describe('getLocalizedDateTime', () => {
    beforeAll(() => {
      jest.useFakeTimers().setSystemTime(new Date('2023-03-18T09:00:00Z'));
    });

    test('returns string "recently" if difference between passed in dateTime and current dateTime is less than 1 hour', () => {
      // given
      const dateTime = '2023-03-18T08:58:26Z';

      // when
      const localizedDateTime = formatDateTime(dateTime);

      // then
      expect(localizedDateTime).toBe('recently');
    });

    test('returns "x hours ago" if difference between passed in dateTime and current dateTime is less than 1 day', () => {
      // given
      const dateTime = '2023-03-18T02:58:26Z';

      // when
      const localizedDateTime = formatDateTime(dateTime);

      // then
      expect(localizedDateTime).toBe('6 hours ago');
    });

    test('returns "x days ago" if difference between passed in dateTime and current dateTime is less than 1 week', () => {
      // given
      const dateTime = '2023-03-11T19:35:49Z';

      // when
      const localizedDateTime = formatDateTime(dateTime);

      // then
      expect(localizedDateTime).toBe('6 days ago');
    });

    test('returns only date and month if difference between passed in dateTime and current dateTime is less than 1 year', () => {
      // given
      const dateTime = '2023-01-11T19:35:49Z';

      // when
      const localizedDateTime = formatDateTime(dateTime);

      // then
      expect(localizedDateTime).toBe('Jan 12');
    });

    test('returns only date, month and year if difference between passed in dateTime and current dateTime is more than 1 year', () => {
      // given
      const dateTime = '2013-01-11T19:35:49Z';

      // when
      const localizedDateTime = formatDateTime(dateTime);

      // then
      expect(localizedDateTime).toBe('Jan 12, 2013');
    });

    test('returns string "N/A" if passed in dateTime is not a valid date time', () => {
      // given
      const dateTime = 'Not date time';

      // when
      const localizedDateTime = formatDateTime(dateTime);

      // then
      expect(localizedDateTime).toBe('N/A');
    });

    afterAll(() => {
      jest.useRealTimers();
    });
  });
});
