import Trip from '../interfaces/Trip';

/* 
  I want to add on Drivers who do not have Trips since it still must
  be included in the final output.
  I also need to sort them by most miles driven to least.
*/

/*
 * This function will take in the 'cleaned' up report and returns
 * an array of objects containing the name, distance, timeTraveled, and speed.
 * It will also sort the array of objects based on the distance traveled.
 *
 * @params filteredResults instance of Trip[]
 * @params drivers instance of string[]
 *
 * @returns Trip[] array of objects containing name, distance, timeTravaled, and speed
 *
 */
export const generateTripReport = (
  filteredResults: Trip[],
  drivers: string[]
): Trip[] => {
  return drivers
    .map((driver: string) => {
      const driverTrip = filteredResults.filter(
        (trip: Trip) => trip.name === driver
      )[0];

      return {
        name: driver,
        distance: Math.round(driverTrip?.distance),
        timeTraveled: Math.round(driverTrip?.timeTraveled),
        speed: Math.round(
          (driverTrip?.distance / driverTrip?.timeTraveled) * 60
        ),
      };
    })
    .sort(
      (tripA: Trip, tripB: Trip) =>
        (tripB.distance || -Infinity) - (tripA.distance || -Infinity)
    );
};
