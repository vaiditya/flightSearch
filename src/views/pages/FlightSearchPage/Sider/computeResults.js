import { calcDifference } from "../../../../utils";
export default (origin, destination, date, storeData) => {
  let totalFlights = 0;
  const data = storeData.filter(flight => flight.date === date);
  const directFlights = data
    .filter(
      journey =>
        journey.origin === origin && journey.destination === destination
    )
    .map(flight => {
      const diff = calcDifference(flight.departureTime, flight.arrivalTime);
      return {
        ...flight,
        diff
      };
    });

  totalFlights += directFlights.length;

  console.log("=========", directFlights);

  const fromOrigin = data.filter(journey => journey.origin === origin);
  const toDestination = data.filter(
    journey => journey.destination === destination
  );
  let indirectFlights = [];
  const fromLength = fromOrigin.length;
  for (let i = 0; i < fromLength; i++) {
    const toDestinationLength = toDestination.length;
    for (let j = 0; j < toDestinationLength; j++) {
      if (toDestination[j].origin === fromOrigin[i].destination) {
        if (!toDestination[j].diff) {
          toDestination[j].diff = calcDifference(
            toDestination[j].departureTime,
            toDestination[j].arrivalTime
          );
        }

        if (!fromOrigin[i].diff) {
          fromOrigin[i].diff = calcDifference(
            fromOrigin[i].departureTime,
            fromOrigin[i].arrivalTime
          );
        }

        indirectFlights = [
          ...(indirectFlights || []),
          { first: fromOrigin[i], second: toDestination[j] }
        ];
      }
    }
  }
  console.log("=========", indirectFlights);
  return { direct: directFlights, indirect: indirectFlights, totalFlights };
};
