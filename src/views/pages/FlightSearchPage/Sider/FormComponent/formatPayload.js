import { dateToString } from "../../../../../utils";
export const payloadFormatter = formData => {
  const result = { ...formData };
  const { origin, destination, startDate, returnDate } = formData;
  console.log(startDate);
  if (startDate) {
    result.startDate = dateToString(startDate);
  }
  //   if (returnDate) {
  //     result.returnDate = dateToString(returnDate);
  //   }
  return result;
};
