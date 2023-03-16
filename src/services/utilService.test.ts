import { throttle } from './utilService';

describe('util service', () => {
  describe('throttle', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

    it('calls the passed in function immediately on the first time', () => {
      // given
      const fn = jest.fn();
      const throttleFn = throttle(fn);
      const arg = 'test';

      // when
      throttleFn(arg);

      // then
      expect(fn).toHaveBeenCalled();
      expect(fn).toHaveBeenCalledWith(arg);
    });

    it('calls the passed in function after an interval on the second time', () => {
      // given
      const fn = jest.fn();
      const throttleFn = throttle(fn);
      const arg1 = { title: 'hello' };
      const arg2 = { title: 'world' };

      // when
      throttleFn(arg1);
      throttleFn(arg2);

      // then
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(arg1);

      jest.advanceTimersByTime(300);
      expect(fn).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(300);
      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenCalledWith(arg2);
    });

    afterAll(() => {
      jest.useRealTimers();
    });
  });
});
