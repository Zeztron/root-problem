import { appendTrips } from '../util';

it('adds up distance and time traveled if multiple drivers are in the report', () => {
  const data = [
    { name: 'Dan', distance: 17.3, timeTraveled: 30, speed: 34.6 },
    { name: 'Dan', distance: 21.8, timeTraveled: 20, speed: 65.4 },
    { name: 'Lauren', distance: 42, timeTraveled: 75, speed: 33.6 },
  ];

  const totalDistance = data[0].distance + data[1].distance;
  const totalTimeTraveled = data[0].timeTraveled + data[1].timeTraveled;

  const trips = appendTrips(data);
  expect(trips[0].name).toEqual('Dan');
  expect(trips[0].distance).toEqual(totalDistance);
  expect(trips[0].timeTraveled).toEqual(totalTimeTraveled);
});
