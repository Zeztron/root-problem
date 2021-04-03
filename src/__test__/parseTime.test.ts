import parseTime from '../helpers/parseTime';

it('parses time correctly using the parseTime function', () => {
  const startTime = parseTime('17:10');
  const endTime = parseTime('19:10');

  const totalTimeInMinutes = endTime - startTime;
  expect(typeof totalTimeInMinutes).toBe('number');
  expect(totalTimeInMinutes).toEqual(120); // 2 Hours
});
