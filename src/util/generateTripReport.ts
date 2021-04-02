import Trip from '../interfaces/Trip';

/* 
  I want to add on Drivers who do not have Trips since it still must
  be included in the final output.
  I also need to sort them by most miles driven to least.
*/
export const generateTripReport = (
  filteredResults: Trip[],
  drivers: string[]
) => {
  return drivers
    .map((driver: string) => {
      return {
        name: driver,
        distance: filteredResults.filter(
          (trip: Trip) => trip.name === driver
        )[0]?.distance,
        timeTraveled: filteredResults.filter(
          (trip: Trip) => trip.name === driver
        )[0]?.timeTraveled,
        speed:
          (filteredResults.filter((trip: Trip) => trip.name === driver)[0]
            ?.distance /
            filteredResults.filter((trip: Trip) => trip.name === driver)[0]
              ?.timeTraveled) *
          60,
      };
    })
    .sort(
      (tripA: Trip, tripB: Trip) =>
        (tripB.distance || -Infinity) - (tripA.distance || -Infinity)
    );
};
