import { calcDifference } from "utils";
export const getGreaterThen30Flights = data => {
  let validFlights = [];

  data.forEach(element => {
    const startTime = element.first.arrivalTime.split(":");
    const endTime = element.second.departureTime.split(":");
    const start = Number(startTime[0]) * 60 + Number(startTime[1]);
    const end = Number(endTime[0]) * 60 + Number(endTime[1]);

    if (end - start > 30) {
      validFlights = [
        ...(validFlights || []),
        {
          ...element,
          layoffTime: calcDifference(
            element.first.arrivalTime,
            element.second.departureTime
          ),
          totalTime: calcDifference(
            element.first.departureTime,
            element.second.arrivalTime
          )
        }
      ];
    }
  });
  return validFlights;
};
