import Trip from '../interfaces/Trip';

/* 
  I want to append on trips done by the same driver so they arent different entries.
  Add the distance and then average the speed. 
*/

/*
 * This function will take in the trips append trips done by same driver.
 *
 * @params trips instance of Trip[]
 *
 * @returns Trip[] containing finalTrips
 *
 */
export const appendTrips = (trips: Trip[]) => {
  return trips.reduce((previousValue: Trip[], currentValue: Trip) => {
    const driverName = currentValue.name;
    const sameTrip = previousValue.find(
      (trip: Trip) => trip.name === driverName
    );
    if (sameTrip) {
      sameTrip.timeTraveled += currentValue.timeTraveled;
      sameTrip.distance = sameTrip.distance += currentValue.distance;
    } else previousValue.push(currentValue);
    return previousValue;
  }, []);
};
