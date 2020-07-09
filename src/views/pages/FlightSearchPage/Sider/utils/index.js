import { calcDifference } from "utils";
export const computeResults = (origin, destination, date, storeData) => {
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
  return { direct: directFlights, indirect: indirectFlights, totalFlights };
};

export const rangeFilter = (range, flights, count) => {
  const { direct, indirect } = flights;
  const filteredDirectFlights = direct.filter(
    flight => flight.price * count < range
  );
  const totalFlights = filteredDirectFlights.length;
  const filteredIndirectFlights = indirect.filter(
    flight => (flight.first.price + flight.second.price) * count < range
  );
  return {
    direct: filteredDirectFlights,
    indirect: filteredIndirectFlights,
    totalFlights
  };
};
