import Trip from '../interfaces/Trip';
import parseTime from '../helpers/parseTime';

/*
 * This function will take in data, run operations on the data,
 * and simply push the results into the Trips array in the form of an object
 *
 * @params: data instance of string[]
 * @params: trips instance of Trips[]
 *
 * @returns void
 */
export const insertTrip = (data: string[], trips: Trip[]): void => {
  const [name, startTime, endTime, distance] = data;
  const timeTraveled = parseTime(endTime) - parseTime(startTime);
  const speed = (Number(distance) / timeTraveled) * 60;

  trips.push({
    name,
    distance: Number(distance),
    timeTraveled,
    speed,
  });
};
