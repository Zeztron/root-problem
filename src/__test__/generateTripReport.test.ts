import { generateTripReport } from '../util';
import Trip from '../interfaces/Trip';

it('Successfully generates an array of Trip objects', () => {
  const drivers = ['Lauren', 'Kumi', 'Dan'];

  const tripReport: Trip[] = [
    { name: 'Dan', distance: 38.8, timeTraveled: 50, speed: 34 },
    { name: 'Lauren', distance: 42, timeTraveled: 75, speed: 33.6 },
  ];

  const finalTripReport: Trip[] = generateTripReport(tripReport, drivers);

  // Sort by longest distance driven
  expect(finalTripReport[0].distance).toEqual(42);

  // Add in the remaining Drivers who dont have trips in final output
  expect(finalTripReport[2].name).toEqual('Kumi');
});
