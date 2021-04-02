import Trip from '../interfaces/Trip';
import parseTime from '../helpers/parseTime';

export const insertTrip = (data: string[], trips: Trip[]) => {
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
