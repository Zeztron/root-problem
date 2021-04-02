import Trip from '../interfaces/Trip';

/* 
  I want to append on trips done by the same driver so they arent different entries.
  Add the distance and then average the speed. 
*/
export const filterResults = (trips: Trip[]) => {
  return trips.reduce((previousValue: Trip[], currentValue: Trip) => {
    const driverName = currentValue.name;
    const sameTrip = previousValue.find(
      (trip: Trip) => trip.name === driverName
    );
    if (sameTrip) {
      sameTrip.timeTraveled += currentValue.timeTraveled;
      sameTrip.distance = sameTrip.distance += currentValue.distance;
      sameTrip.speed = sameTrip.speed += currentValue.speed;
    } else previousValue.push(currentValue);
    return previousValue;
  }, []);
  // .filter((trip: Trip) => trip.speed > 5 && trip.speed < 100);
};
